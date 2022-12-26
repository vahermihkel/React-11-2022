import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";

const MaintainImages = () => {
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const urlRef = useRef();
  const altRef = useRef();
  const headerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    setLoading(true);
    fetch(config.imagesDbUrl)
      .then(res => res.json())
      .then(json => {
        setImages(json || []);
        setLoading(false);
      });
  }, []);

  const addImage = () => {
    const newImage = {
      "url": urlRef.current.value,
      "alt": altRef.current.value,
      "header": headerRef.current.value,
      "text": textRef.current.value,
    }
    images.push(newImage);
    fetch(config.imagesDbUrl, {"method": "PUT", "body": JSON.stringify(images)})
      .then(() => {
        setImages(images.slice());
        urlRef.current.value = "";
        altRef.current.value = "";
        headerRef.current.value = "";
        textRef.current.value = "";
      })
  }

  const removeImage = (i) => {
    images.splice(i,1);
    setImages(images.slice());
    fetch(config.imagesDbUrl, {"method": "PUT", "body": JSON.stringify(images)})
      .then(() => {
        setImages(images.slice());
      })
  }

  if (isLoading === true) {
    return (<Spinner />)
  }

  return (
    <div>
      <label>URL</label> <br />
      <input ref={urlRef} type="text" /> <br />
      <label>Alt</label> <br />
      <input ref={altRef} type="text" /> <br />
      <label>Header</label> <br />
      <input ref={headerRef} type="text" /> <br />
      <label>Text</label> <br />
      <input ref={textRef} type="text" /> <br />
      <button onClick={addImage}>Lisa</button> <br />
      {images.map((element,i) => 
        <div key={i}>
          <div>{element.url}</div>
          <div>{element.alt}</div>
          <div>{element.header}</div>
          <div>{element.text}</div>
          <button onClick={() => removeImage(i)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainImages