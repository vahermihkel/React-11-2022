import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import productsFromFile from "../data/products.json";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();    
  const productFound = products.find(element => element.id === Number(id));
  const dbUrl = "https://react-mihkel-webshop-11-2022-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  
  useEffect(() => {
    fetch(dbUrl)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  return (
    <div>
      {productFound !== undefined && 
        <div>
          <img src={productFound.image} alt="" />
          <div>{productFound.id}</div>
          <div>{productFound.name}</div>
          <div>{productFound.price}</div>
          <div>{productFound.category}</div>
          <div>{productFound.description}</div>
          <div>{productFound.active}</div>
        </div>}
      {productFound === undefined && 
        <div>
          Toodet ei leitud
        </div>}
    </div>
  )
}

export default SingleProduct