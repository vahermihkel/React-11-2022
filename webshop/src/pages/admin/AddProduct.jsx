import { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";

// hookid   use algusega: useState, useRef, useParams, useNavigate, useTranslate
// Reacti erikoodid, mida ei eksisteeri tavalises JavaScriptis, lihtsustab
// Hooke tuleb alati importida
// Hookidel on alati sulud lõpus kui neid luuakse
// Hooke ei saa luua dünaamiliselt ega funktsioonide sees
// Hookid peaksid alati olema top-level componendi sees

const AddProduct = () => {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [idUnique, setIdUnique] = useState(true);

  const addProduct = () => {
    const newProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }
    productsFromFile.push(newProduct);
  }

  const checkIdUniqueness = () => {
    console.log(idRef.current.value);  // inspect -> console
    const found = productsFromFile.find(element => element.id === Number(idRef.current.value)); // vt üles ja võrrelge
    if (found === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  return (
    <div>
        { idUnique === false && <div>Kellelgi on sama ID!</div>}
        <label>ID</label> <br />
        <input onChange={checkIdUniqueness} ref={idRef} type="number" /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} type="text" /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} type="number" /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} type="text" /> <br />
        <label>Category</label> <br />
        <input ref={categoryRef} type="text" /> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} type="text" /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} type="checkbox" /> <br />
        <button disabled={idUnique === false} onClick={addProduct}>Add</button>
    </div>
  )
}

export default AddProduct