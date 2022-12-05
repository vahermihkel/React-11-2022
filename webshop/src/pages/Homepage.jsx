import { Link } from "react-router-dom";
import productsFromFile from "../data/products.json";

const Homepage = () => {

  const addToCart = () => {
    // KODUS: Ostukorvi loogika eesti keelse projekti järgi
    let cartLS = localStorage.getItem("cart");
    // 1., 2., 3., 4., 5.
    // a) peast   b) proovida mõne kodutöö järgi   c) eesti keelsest projektist vaadata
  }

// kogustega asjad ostukorvi -> mitte enam listina [toode1,toode1,toode1, toode2, toode2]
// [{product: toode1, quantity: 3}, {product: toode2, quantity: 2}]
// ostukorvis koguse muutmine
// ostukorvi kujundus

  return (
    <div>
      <button>Sort A-Z</button>
      <button>Sort Z-A</button>
      <button>Sort price ascending</button>
      <button>Sort price descending</button>
      {productsFromFile.map(element => 
        <div key={element.id}>
          <Link to={"/product/" + element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
          </Link>
          <button>Add to cart</button>
        </div>)}
    </div>
  )
}

export default Homepage