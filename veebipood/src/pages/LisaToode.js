import { useRef, useState } from "react";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const nimiViide = useRef();

  function lisa() {
    if (nimiViide.current.value === "") {
      // siis kui on tõene, siis ta läheb siia blokki
      uuendaSonum("Ei saa lisada ilma nimeta!")
    } else {
      // siis kui ei ole tõene, siis ta läheb siia blokki
      uuendaSonum("Uus toode lisatud: " + nimiViide.current.value);
    }
  }

  return ( 
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiViide} type="text" /> <br />
      <button onClick={lisa}>Lisa uus toode</button> <br />
    </div> );
}

export default LisaToode;