import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../data/config.json";
import { Spinner } from "react-bootstrap";

const SingleProduct = () => {
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();    
  const productFound = dbProducts.find(element => element.id === Number(id));
  
  useEffect(() => {
    setLoading(true)
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json);
        setLoading(false);
      })
  }, []);

  if (isLoading === true) {
    return (<Spinner />);
  }

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