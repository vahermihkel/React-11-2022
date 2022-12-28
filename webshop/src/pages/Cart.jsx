import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import OrderEmail from "../components/cart/OrderEmail";
import ParcelMachines from "../components/cart/ParcelMachines";
import Payment from "../components/cart/Payment";
import styles from "../css/Cart.module.css";
import CartSumContext from '../store/CartSumContext';

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const cartSumCtx = useContext(CartSumContext);

  const removeFromCart = (index) => {
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartSum());
  }

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    cartSumCtx.setCartSum("0.00");
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
    cartSumCtx.setCartSum(calculateCartSum());
  }
  
  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    // uuendan HTMLi
    // uuendan LS
    cartSumCtx.setCartSum(calculateCartSum());
  }

  // useNavigate ---> suuna JavaScriptis Reacti siseselt
  // <Link to=""> ---> suuna HTML-s Reacti siseselt
  // window.location.href ---> suuna rakendusest väljas olevale URL-le
    
  return (
    <div>
      {cart.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
      {/* <div className={styles["cart-top"]}> */}
      <div className={styles.cart__top}>
        {cart.length > 0 && <button onClick={emptyCart}>Tühjenda</button>}
        {cart.length > 0 && <div>{cart.length} tk</div> }
      </div>
      {cart.map((e, i) => 
        <div key={i} className={styles.product}>
          <img className={styles.image} src={e.product.image} alt="" />
          <div className={styles.name}>{e.product.name}</div>
          <div className={styles.price}>{e.product.price.toFixed(2)} €</div>
          <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(i)} src="/minus.png" alt="" />
            <div>{e.quantity} tk</div>
            <img className={styles.button} onClick={() => increaseQuantity(i)} src="/plus.png" alt="" />
          </div>
          <div className={styles.sum}>{(e.product.price * e.quantity).toFixed(2)} €</div>
          <img className={`${styles.button} ${styles.remove}`} onClick={() => removeFromCart(i)} src="/remove.png" alt="" />
        </div>)}

      {cart.length > 0 && 
        <div className={styles.cart__bottom}>
          <div>{calculateCartSum()} €</div>

          <ParcelMachines />

          <Payment sum={calculateCartSum()} />
          <OrderEmail 
            products={cart} 
            sum={calculateCartSum()}
            />
        </div>}
    </div>
  )
}

export default Cart