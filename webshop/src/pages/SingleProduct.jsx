import { useParams } from "react-router-dom";
import productsFromFile from "../data/products.json";

const SingleProduct = () => {
  const { id } = useParams();    
  const productFound = productsFromFile.find(element => element.id === Number(id));

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