import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../css/Cart.css";

const Cart = () => {
  // KODUS: Ostukorvi loogika eesti keelse projekti järgi
  // Kuvage välja kõik ostukorvi esemed
  // a) peast   b) proovida mõne kodutöö järgi   c) eesti keelsest projektist vaadata
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json));
  }, []);


  const removeFromCart = (index) => {
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const calculateCartSum = () => {
    let cartSum = 0;
    // [{n:"Donald", v: 60},{n: "Ott", v: 35}, {n: "Joe", v: 80}, {n: "Vola", v: 40}].forEach( => )
    // {n:"Donald", v: 60} =>    =  vanusKokkuMuutuja  + element.v    60   =     0   +  60
    // {n: "Ott", v: 35} =>   95   =     60   +  35
    // {n: "Joe", v: 80} =>   175      =    95   +   80
    // {n: "Vola", v: 40} =>    215     =   175  + 40
    cart.forEach(cartItem => cartSum = cartSum + cartItem.product.price * cartItem.quantity);
    return cartSum.toFixed(2);
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      removeFromCart(index); // kutsun välja teise funktsiooni funktsiooni seest
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    // uuendan HTMLi
    // uuendan LS
  }
  
  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    // uuendan HTMLi
    // uuendan LS
  }

  const pay = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const paymentData = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": calculateCartSum(),
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e79fsdfsd" + Math.random() * 9999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://react-11-2022.web.app"
      };

    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    };

    fetch(paymentUrl, {
      "method": "POST",
      "body": JSON.stringify(paymentData),
      "headers": paymentHeaders
    }).then(res => res.json())
        .then(json => window.location.href = json.payment_link);
  }

  // useNavigate ---> suuna JavaScriptis Reacti siseselt
  // <Link to=""> ---> suuna HTML-s Reacti siseselt
  // window.location.href ---> suuna rakendusest väljas olevale URL-le
    
  return (
    <div>
      {cart.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
      <div className="cart-top">
        {cart.length > 0 && <button onClick={emptyCart}>Tühjenda</button>}
        {cart.length > 0 && <div>{cart.length} tk</div> }
      </div>
      {cart.map((e, i) => 
        <div key={i} className="product">
          <img className="image" src={e.product.image} alt="" />
          <div className="name">{e.product.name}</div>
          <div className="price">{e.product.price.toFixed(2)} €</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(i)} src="/minus.png" alt="" />
            <div>{e.quantity} tk</div>
            <img className="button" onClick={() => increaseQuantity(i)} src="/plus.png" alt="" />
          </div>
          <div className="sum">{(e.product.price * e.quantity).toFixed(2)} €</div>
          <img className="button remove" onClick={() => removeFromCart(i)} src="/remove.png" alt="" />
        </div>)}

      {cart.length > 0 && 
        <div className="cart-bottom">
          <div>{calculateCartSum()} €</div>

          <select>
            {parcelMachines
              .filter(element => element.A0_NAME === "EE")
              .map(element => <option key={element.NAME}>{element.NAME}</option>)}
          </select>

          <button onClick={pay}>Maksma</button>
        </div>}
    </div>
  )
}

export default Cart