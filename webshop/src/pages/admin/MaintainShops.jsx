import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";

const MaintainCategories = () => {
  const [isLoading, setLoading] = useState(false);
  const [shops, setShops] = useState([]);
  const xCoordRef = useRef();
  const yCoordRef = useRef();
  const nameRef = useRef();
  const openTimeRef = useRef();

  useEffect(() => {
    setLoading(true);
    fetch(config.shopsDbUrl)
      .then(res => res.json())
      .then(json => {
        setShops(json || []);
        setLoading(false);
      });
  }, []);

  const addShop = () => {
    const newShop = {
      "xCoord": Number(xCoordRef.current.value),
      "yCoord": Number(yCoordRef.current.value),
      "name": nameRef.current.value,
      "openTime": openTimeRef.current.value,
    }
    shops.push(newShop);
    fetch(config.shopsDbUrl, {"method": "PUT", "body": JSON.stringify(shops)})
      .then(() => {
        setShops(shops.slice());
        xCoordRef.current.value = "";
        yCoordRef.current.value = "";
        nameRef.current.value = "";
        openTimeRef.current.value = "";
      })
  }

  const removeShop = (i) => {
    shops.splice(i,1);
    setShops(shops.slice());
    fetch(config.shopsDbUrl, {"method": "PUT", "body": JSON.stringify(shops)})
      .then(() => {
        setShops(shops.slice());
      })
  }

  if (isLoading === true) {
    return (<Spinner />)
  }

  return (
    <div>
      <label>xCoord</label> <br />
      <input ref={xCoordRef} type="number" /> <br />
      <label>yCoord</label> <br />
      <input ref={yCoordRef} type="number" /> <br />
      <label>Nimi</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Lahtiolekuaeg</label> <br />
      <input ref={openTimeRef} type="text" /> <br />
      <button onClick={addShop}>Lisa</button> <br />
      {shops.map((element,i) => 
        <div key={i}>
          {element.name}
          <button onClick={() => removeShop(i)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories