import { useRef, useState } from "react";

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est");
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  }

  const telefonViide = useRef(); // telefonRef (reference)
  const emailViide = useRef(); // emailRef

  const sisestaTelefon = () => {
    localStorage.setItem("telefon", telefonViide.current.value);
  }

  const sisestaEmail = () => {
    localStorage.setItem("email", emailViide.current.value);
  }

  return ( 
    <div>
      <button onClick={muudaKeelEst}>Eesti</button>
      <button onClick={muudaKeelEng}>Inglise</button>
      <button onClick={muudaKeelRus}>Vene</button>
     { keel === "est" && <div>Lehekülg on eesti keelne</div> }
     { keel === "eng" && <div>Lehekülg on inglise keelne</div> }
     { keel === "rus" && <div>Lehekülg on vene keelne</div> }
     <label>Meie telefoninumber</label>
     <input ref={telefonViide} type="text" />
     <button onClick={sisestaTelefon}>Sisesta</button>
     <br />
     <label>Meie email</label>
     <input ref={emailViide} type="text" />
     <button onClick={sisestaEmail}>Sisesta</button>
     <br />
    </div> );
}

export default Seaded;

// SALVESTATAKSE:
// 1. Andmebaas -> kõik tundlikud andmed, andmed mida peab kõigile näitama
// 2. Brauseri vahemällu -> lehekülje seadistused (keelevalik, dark mode/light mode, tooteid valides infinite scroll/leheküljenumbrid all)
// 3. Faili -> logid / mis rakenduses toimub / analüütika