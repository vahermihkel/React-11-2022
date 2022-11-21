import { useRef, useState } from "react";

// 1. andmebaas
// 2. lokaalmälu brauseris
// 3. fail

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const nimiViide = useRef();

  function lisa() {
    if (nimiViide.current.value === "") {
      // siis kui on tõene, siis ta läheb siia blokki
      uuendaSonum("Ei saa lisada ilma nimeta!");
    } else {
      // siis kui ei ole tõene, siis ta läheb siia blokki
      
      // EELDAKS: lisa juurde üks mida ma sisestan
      
      // TEGELIKKUSES:
      // 1. võta localStorage-st kõik varasemad väärtused
      // 2. võta saadud väärtustest jutumärgid maha VÕI võta tühi array kui on tühjus
      // 3. lisa üks juurde
      // 4. pane localStorage-st saadud väärtustele, kus on 1 juurde lisatud jutumärgid tagasi
      // 5. pane localStorage-sse tagasi

      let tootedLS = localStorage.getItem("tooted");
      tootedLS = JSON.parse(tootedLS) || [];
      tootedLS.push(nimiViide.current.value);
      tootedLS = JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS);

      // const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
      // tooted.push(nimiViide.current.value);
      // localStorage.setItem("tooted", JSON.stringify(tooted));

            
      // localStorage.setItem("võti", "uus_väärtus")
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