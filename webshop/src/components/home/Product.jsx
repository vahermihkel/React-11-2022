import { useContext } from "react";
import { Link } from "react-router-dom";
import CartSumContext from "../../store/CartSumContext";

const Product = (props) => {

  const cartSumCtx = useContext(CartSumContext);
    // {
  //   "id":11391368,
  //   "image":"https://i.ebayimg.com/thumbs/images/g/rI0AAOSwt-RjdaZp/s-l225.webp","name":"Camping Tent Poles",
  //   "price":42.41,
  //   "description":"Camping Tent Poles Outdoor Tarp Telescoping Universal 2Pcs/Set Durable",
  //   "category":"camping",
  //   "active":true
  // }

  // {
  //  product: {
  //   "id":11391368,
  //   "image":"https://i.ebayimg.com/thumbs/images/g/rI0AAOSwt-RjdaZp/s-l225.webp","name":"Camping Tent Poles",
  //   "price":42.41,
  //   "description":"Camping Tent Poles Outdoor Tarp Telescoping Universal 2Pcs/Set Durable",
  //   "category":"camping",
  //   "active":true,
  // }, quantity: 4}
  const addToCart = (productClicked) => {
    // KODUS: Ostukorvi loogika eesti keelse projekti järgi
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    // kas ta on ostukorvis -> kui ei leia, on järjekorranumber -1
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      // kui on ostukorvis, suurenda kogust
      cartLS[index].quantity = cartLS[index].quantity + 1;
      // nagu eesti keelses projektis 1 / 2 päev
      // kogus = kogus + 1;
    } else {
      // kui ei ole ostukorvis, lisa ta kõige lõppu, kogusega 1
      cartLS.push({"product": productClicked, "quantity": 1});
    }

    let cartSum = 0;
    cartLS.forEach(cartItem => cartSum = cartSum + cartItem.product.price * cartItem.quantity);
    cartSumCtx.setCartSum(cartSum.toFixed(2));

    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
  }

  // SELLE TEEME KOOS:
// kogustega asjad ostukorvi -> mitte enam listina [toode1,toode1,toode1, toode2, toode2]
// [{product: toode1, quantity: 3}, {product: toode2, quantity: 2}]
// ostukorvis koguse muutmine
// ostukorvi kujundus

  
  return (
    <div className="product">
      <Link to={"/product/" + props.element.id}>
        <img src={props.element.image} alt="" />
        <div className="active-product">{props.element.name}</div>
        <div>{props.element.price.toFixed(2)}</div>
      </Link>
      <button onClick={() => addToCart(props.element)}>Add to cart</button>
    </div>
  )
}

export default Product