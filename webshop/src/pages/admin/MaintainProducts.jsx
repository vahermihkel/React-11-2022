import { Link } from "react-router-dom";
import config from "../../data/config.json";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import styles from "../../css/MaintainProducts.module.css";

const MaintainProducts = () => {
  const [dbProducts, setDbProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const searchedRef = useRef();
  
  useEffect(() => {
    setLoading(true)
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json.slice()); // .slice() sest programm näeb neid samasugusena
        setDbProducts(json.slice()); // .slice() ---> loo neile uus mälukoht
        setLoading(false);
      })
  }, []);

  const remove = (productClicked) => {
    //console.log(i); // 0
    const index = products.findIndex(element => element.id === productClicked.id);
    products.splice(index,1); // kustutab ühe
    setProducts(products.slice()); // uuendab HTMLi
    const dbIndex = dbProducts.findIndex(element => element.id === productClicked.id);
    dbProducts.splice(dbIndex,1); // dbProducts.splice(0,1);
    toast.error(t("successfully-deleted"), { // paneb toasti
      position: "bottom-right",
      theme: "dark",
      });
    //console.log(dbProducts);
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)});
  }

  const searchProducts = () => {
    const result = dbProducts.filter(element =>
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  const changeProductActiveness = (productClicked) => {
    const index = dbProducts.findIndex(element => element.id === productClicked.id);
    dbProducts[index].active = !dbProducts[index].active;
    searchProducts();
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)});
  }

  if (isLoading === true) {
    return (<Spinner />);
  }

  return (
    <div>
      <input ref={searchedRef} onChange={searchProducts} type="text" />
      <div>{products.length} tk</div>
      {products.map((element) => 
        <div className={element.active === true ? styles.active : styles.inactive} key={element.id}>
          <div onClick={() => changeProductActiveness(element)}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price} €</div>
            <div>{element.id}</div>
            <div>{element.description}</div>
            <div>{element.category}</div>
          </div>
          <button onClick={() => remove(element)}>x</button>
          <Link to={"/admin/edit-product/" + element.id}>
            <button>Muuda</button>
          </Link>
        </div>)}
        <ToastContainer />
    </div>
  )
}

export default MaintainProducts;
