import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuudaToode() {
  const { j2rjekorraNumber } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[j2rjekorraNumber];

  const nimiRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    // ["Nobe", "Tesla", "BMW"][2] = "Mercedes"
    // "BMW"  =  ["Nobe", "Tesla", "BMW"][2]
    tooted[j2rjekorraNumber] = nimiRef.current.value;
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda");
  }

  return ( 
    <div>
        {/* <div>{j2rjekorraNumber}</div>
        <div>{leitudToode}</div> */}
        <label>Toote nimi</label> <br />
        <input ref={nimiRef} defaultValue={leitudToode} type="text" /> <br />
        <button onClick={muuda}>Muuda</button>
    </div> );
}

export default MuudaToode;