import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import config from "../data/config.json";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const categories = [...new Set(dbProducts.map(element => element.category))];
  
  useEffect(() => {
    setLoading(true)
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setDbProducts(json);
        setLoading(false);
      })
  }, []);

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
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
    // 1., 2., 3., 4., 5.
    // a) peast   b) proovida mõne kodutöö järgi   c) eesti keelsest projektist vaadata
  }

  // SELLE TEEME KOOS:
// kogustega asjad ostukorvi -> mitte enam listina [toode1,toode1,toode1, toode2, toode2]
// [{product: toode1, quantity: 3}, {product: toode2, quantity: 2}]
// ostukorvis koguse muutmine
// ostukorvi kujundus

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  }

  const filterProducts = (categoryClicked) => {
    // console.log(categoryClicked);
    // console.log(products);
    const result = dbProducts.filter(element => element.category === categoryClicked);
    // console.log(result);
    setActiveCategory(categoryClicked);
    setProducts(result);
  }

  const [activeCategory, setActiveCategory] = useState("");

  if (isLoading === true) {
    return (<Spinner />);
  }

  return (
    <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort price ascending</button>
      <button onClick={sortPriceDesc}>Sort price descending</button>
      <div>{products.length} tk</div>
      {/* <button onClick={() => filterProducts("camping")}>camping</button>
      <button onClick={() => filterProducts("tent")}>tent</button>
      <button onClick={() => filterProducts("ebay")}>ebay</button> */}
      { categories.map(element => 
        <button key={element} className={element === activeCategory ? "active-category" : undefined} onClick={() => filterProducts(element)}>
          {element}
        </button>
        ) }
      {products.map(element => 
        <div key={element.id}>
          <Link to={"/product/" + element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price.toFixed(2)}</div>
          </Link>
          <button onClick={() => addToCart(element)}>Add to cart</button>
        </div>)}
    </div>
  )
}

export default Homepage