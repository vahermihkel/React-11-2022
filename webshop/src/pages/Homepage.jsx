import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CarouselGallery from "../components/home/CarouselGallery";
// import { Link } from "react-router-dom";
import Product from "../components/home/Product";
import SortButtons from "../components/home/SortButtons";
import config from "../data/config.json";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const categories = [...new Set(dbProducts.map(element => element.category))];
  const [activeCategory, setActiveCategory] = useState("");

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

  const filterProducts = (categoryClicked) => {
    // console.log(categoryClicked);
    // console.log(products);
    const result = dbProducts.filter(element => element.category === categoryClicked);
    // console.log(result);
    setActiveCategory(categoryClicked);
    setProducts(result);
  }

  if (isLoading === true) {
    return (<Spinner />);
  }

  return (
    <div>
      <CarouselGallery />
      
      <SortButtons 
        products={products} 
        setProducts={setProducts} />

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
          <Product key={element.id} element={element} />
        )}
    </div>
  )
}

export default Homepage