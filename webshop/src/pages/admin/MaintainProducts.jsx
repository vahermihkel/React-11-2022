import { Link } from "react-router-dom";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from "react";

const MaintainProducts = () => {
  const [products, setProducts] = useState(productsFromFile);
  const { t } = useTranslation();
  const searchedRef = useRef();

  const remove = (i) => {
    productsFromFile.splice(i,1);
    setProducts(productsFromFile.slice());
    toast.error(t("successfully-deleted"), {
      position: "bottom-right",
      theme: "dark",
      });
  }

  const searchProducts = () => {
    const result = productsFromFile.filter(element =>
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
