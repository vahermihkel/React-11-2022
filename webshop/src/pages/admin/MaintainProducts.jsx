import { useState } from "react";
import { Link } from "react-router-dom";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const MaintainProducts = () => {
  const [products, setProducts] = useState(productsFromFile);
  const { t } = useTranslation();

  const remove = (i) => {
    productsFromFile.splice(i,1);
    setProducts(productsFromFile.slice());
    toast.error(t("successfully-deleted"), {
      position: "bottom-right",
      theme: "dark",
      });
  }

  // otsingumootor -> otsi toodet nime alusel

  return (
    <div>
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

export default MaintainProducts