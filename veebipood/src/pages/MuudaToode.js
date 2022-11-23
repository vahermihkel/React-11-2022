import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuudaToode() {
  const { j2rjekorraNumber } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[j2rjekorraNumber];

  const nimiViide = useRef();
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    // ["Nobe", "Tesla", "BMW"][2] = "Mercedes"
    // "BMW"  =  ["Nobe", "Tesla", "BMW"][2]
    const muudetudToode = {
      "nimi": nimiViide.current.value,
      "hind": Number(hindViide.current.value),
      "pilt": piltViide.current.value,
      "aktiivne": aktiivneViide.current.checked,
    }
    tooted[j2rjekorraNumber] = muudetudToode;
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda");
  }

  return ( 
    <div>
        {/* <div>{j2rjekorraNumber}</div>
        <div>{leitudToode}</div> */}
        <label>Toote nimi</label> <br />
        <input ref={nimiViide} defaultValue={leitudToode.nimi} type="text" /> <br />
        <label>Toote hind</label> <br />
        <input ref={hindViide} defaultValue={leitudToode.hind} type="number" /> <br />
        <label>Toote pilt</label> <br />
        <input ref={piltViide} defaultValue={leitudToode.pilt} type="text" /> <br />
        <label>Toote aktiivsus</label> <br />
        <input ref={aktiivneViide} defaultValue={leitudToode.aktiivne} type="checkbox" /> <br />
        <button onClick={muuda}>Muuda</button>
    </div> );
}

export default MuudaToode;