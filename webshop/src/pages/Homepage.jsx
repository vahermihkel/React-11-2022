import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';
import CarouselGallery from "../components/home/CarouselGallery";
// import { Link } from "react-router-dom";
import Product from "../components/home/Product";
import SortButtons from "../components/home/SortButtons";
import config from "../data/config.json";

const Homepage = () => {
  const [products, setProducts] = useState([]); // ALATI 20 tükki (või viimasel lehel vähem)
  const [categoryProducts, setCategoryProducts] = useState([]); // 2 / 61 / 120 vastavalt kategooriale (näidata lk numbreid)
  const [dbProducts, setDbProducts] = useState([]); // näidata kategooriaid välja ALATI KOGUARV - 124tk
  const [isLoading, setLoading] = useState(false);
  const categories = [...new Set(dbProducts.map(element => element.category))];
  const [activeCategory, setActiveCategory] = useState("");
  const [activePage, setActivePage] = useState(2);
  const pages = [];
  for (let number = 1; number <= Math.ceil(categoryProducts.length/20); number++) {
    pages.push(number);
  }

  useEffect(() => {
    setLoading(true)
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => { // 0,1,2,3.....19
        setProducts(json.slice(0,20));
        setCategoryProducts(json)
        setDbProducts(json);
        setLoading(false);
      })
  }, []);

  const changePage = (newPage) => {
    setActivePage(newPage);
    setProducts(categoryProducts.slice(20*newPage-20,20*newPage));
  }

  const filterProducts = (categoryClicked) => {
    // console.log(categoryClicked);
    // console.log(products);
    const result = dbProducts.filter(element => element.category === categoryClicked);
    // console.log(result);
    setActiveCategory(categoryClicked);
    setCategoryProducts(result);
    setProducts(result.slice(0,20));
    setActivePage(1);
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

      <div>
        {activePage*20 > categoryProducts.length ? categoryProducts.length : activePage*20} 
        / 
        {categoryProducts.length} tk
      </div>
      {/* <button onClick={() => filterProducts("camping")}>camping</button>
      <button onClick={() => filterProducts("tent")}>tent</button>
      <button onClick={() => filterProducts("ebay")}>ebay</button> */}
      { categories.map(element => 
        <button key={element} className={element === activeCategory ? "active-category" : undefined} onClick={() => filterProducts(element)}>
          {element}
        </button>
        ) }
      <Pagination>
        {pages.map(number => 
          <Pagination.Item key={number} onClick={() => changePage(number)} active={number === activePage}>
            {number}
          </Pagination.Item>)}
      </Pagination>
      {products.map(element => 
          <Product key={element.id} element={element} />
        )}
    </div>
  )
}

export default Homepage