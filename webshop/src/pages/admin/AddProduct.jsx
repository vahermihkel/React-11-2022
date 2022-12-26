import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";
import FileUpload from "../../components/FileUpload";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

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
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [isPictureUrl, setPictureUrl] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
      
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setDbProducts(json || []))
  }, []);

  const addProduct = () => {
    if (idRef.current.value === "") {
      toast.error("Id lisamata");
      return;    // return lõpetab funktsiooni
    }
    if (nameRef.current.value === "") {
      toast.error("Nimi lisamata");
      return;
    } // /^[A-ZÜÕÖÄ]+/
    if (/^[A-ZÖÄÜÕ].*/.test(nameRef.current.value) === false) {
      toast.error("Nimi peab algama suure algustähega");
      return;
    }
    if (priceRef.current.value === "") {
      toast.error("Hind lisamata");
      return;
    }
    if (isPictureUrl === true && imageRef.current.value === "") {
      toast.error("Pilt lisamata");
      return;
    }
    if (isPictureUrl === false && imageUrl === "") {
      toast.error("Pilt üles laadimata");
      return;
    }
    if (isPictureUrl === true && /^\S*$/.test(imageRef.current.value) === false) {
      toast.error("Pildi aadressis on tühik");
      return;
    }
    if (descriptionRef.current.value === "") {
      toast.error("Kirjeldus lisamata");
      return;
    }

    const newProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": isPictureUrl === true ? imageRef.current.value : imageUrl,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }
    dbProducts.push(newProduct);
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => {
        idRef.current.value = "";
        nameRef.current.value = "";
        priceRef.current.value = "";
        // imageRef.current.value = "";
        setImageUrl("");
        categoryRef.current.value = "";
        descriptionRef.current.value = "";
        activeRef.current.checked = false;
        toast.success(t("successfully-added"), { // paneb toasti
          position: "bottom-right",
          theme: "dark",
          });
      });
  }

  const checkIdUniqueness = () => {
    //console.log(idRef.current.value);  // inspect -> console
    const found = dbProducts.find(element => element.id === Number(idRef.current.value)); // vt üles ja võrrelge
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
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" value={1} onClick={() => setPictureUrl(true)}>
            Pilt URL-na
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2} onClick={() => setPictureUrl(false)}>
            Lae pilt üles
          </ToggleButton>
        </ToggleButtonGroup> <br />
        {isPictureUrl === true && <input ref={imageRef} type="text" />}
        {isPictureUrl === false && <FileUpload onSendPictureUrl={setImageUrl} />} <br /><br />
        <label>Category</label> <br />
        {/* <input ref={categoryRef} type="text" /> <br /> */}
        <select ref={categoryRef}>
          {categories.map(element => <option key={element.name}>{element.name}</option>)}
        </select> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} type="text" /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} type="checkbox" /> <br />
        <button disabled={idUnique === false} onClick={addProduct}>Add</button>
        <ToastContainer />
    </div>
  )
}

export default AddProduct