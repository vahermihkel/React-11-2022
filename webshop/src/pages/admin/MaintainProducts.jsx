import { Link } from "react-router-dom";
// import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from "react";

const MaintainProducts = () => {
  const [dbProducts, setDbProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const searchedRef = useRef();
  const dbUrl = "https://react-mihkel-webshop-11-2022-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  
  useEffect(() => {
    fetch(dbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setDbProducts(json);
      })
  }, []);

  const remove = (i) => {
    products.splice(i,1);
    setProducts(products.slice());
    toast.error(t("successfully-deleted"), {
      position: "bottom-right",
      theme: "dark",
      });
  }

  const searchProducts = () => {
    const result = dbProducts.filter(element =>
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  return (
    <div>
      <input ref={searchedRef} onChange={searchProducts} type="text" />
      <div>{products.length} tk</div>
      {products.map((element, index) => 
        <div key={element.id}>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price} €</div>
          <div>{element.id}</div>
          <div>{element.description}</div>
          <div>{element.category}</div>
          <button onClick={() => remove(index)}>x</button>
          <Link to={"/admin/edit-product/" + element.id}>
            <button>Muuda</button>
          </Link>
        </div>)}
        <ToastContainer />
    </div>
  )
}

export default MaintainProducts;
