import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";


const MaintainCategories = () => {
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  // dbProducts -> sellepärast, et filtreeriti
  // HomePage-s ----> kategooria peale vajutamine (jättis selle kategooria tooted alles)
  // MaintainProducts ----> otsing (jättis otsitud sõnaga tooted alles)

  useEffect(() => {
    setLoading(true);
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json || []);
        setLoading(false);
      });
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    fetch(config.categoriesDbUrl, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => {
        setCategories(categories.slice());
        categoryRef.current.value = "";
      })
  }

  const removeCategory = (i) => {
    categories.splice(i,1);
    setCategories(categories.slice());
    fetch(config.categoriesDbUrl, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => {
        setCategories(categories.slice());
      })
  }

  if (isLoading === true) {
    return (<Spinner />)
  }

  return (
    <div>
      <label>Kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Lisa</button> <br />
      {categories.map((element,i) => 
        <div key={i}>
          {element.name}
          <button onClick={() => removeCategory(i)}>x</button>
        </div>)}
    </div>
  )
}

// config faili uus URL, kuhu me andmeid paneme
// võimaldame lisada kategooriat andmebaasi (useRef + fetch)
// võimaldame kategooriaid kuvada ja sealt kustutada

export default MaintainCategories