import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";

const EditProduct = () => {
  const { id } = useParams();                       //    43146808 === "43146808"
  const productFound = productsFromFile.find(element => element.id === Number(id));
  const index = productsFromFile.indexOf(productFound);

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  const changeProduct = () => {
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }
    productsFromFile[index] = updatedProduct;
    navigate("/admin/maintain-products");
  }

  // kontroll peale, kas on unikaalne ID

  return (
    <div>
      {productFound !== undefined && 
        <div>
          <label>ID</label> <br />
          <input ref={idRef} defaultValue={productFound.id} type="number" /> <br />
          <label>Name</label> <br />
          <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
          <label>Price</label> <br />
          <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
          <label>Image</label> <br />
          <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
          <label>Category</label> <br />
          <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
          <label>Description</label> <br />
          <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
          <label>Active</label> <br />
          <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
          <button onClick={changeProduct}>Change</button>
        </div>}
      {productFound === undefined && 
        <div>
          Toodet ei leitud
        </div>}
    </div>
  )
}

export default EditProduct

// SingleProduct
// 1. URLi muutuja koolon abil App.js
// 2. toodete vaates saan vajutada, et läheks sellele URLile
// 3. Sinna lehele kuhu saabun, pean tegema useParams() (import) ja võtma selle muutuja
//      ehk selle koha, kus asub see koolon URLs ja võtan ta kasutusele
// 4. Võtan KÕIK tooted
// 5. Otsin üles õige toote .find() abil    .find(element => element.id === ID_URLst)
// 6. Kuvan ta HTML-s
// 7. Teen dünaamilise väljakuvamise juhuks kui teda ei ole 

// AddProduct
// 8. Iga toote võtme kohta ref - kokku 7tk: id, name, price, image, category, description, active
//        ref-st ka import
// 9. Teen 7x label + input
// 10. Teen 7x input sisse ref panemist
// 11. Teen nupu ja ühendan selle funktsiooniga
// 12. Funktsiooni sees seon kõik need ref.current.value-d kokku
// 13. Teisendan ref.current.value-d kõik mis ei pea olema sõnad, sobivateks väärtusteks
// 14. Lisan PRODUCTSFROMFILE (push) xxxxxxxxxxx

// 15. 7x inputide sisse defaultValue
// 16. MUUDAN PRODUCTSFROMFILE

