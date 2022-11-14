import { useState } from "react";

function Meist() {
  const [telefon, muudaTelefoni] = useState(localStorage.getItem("telefon") || "...Lisame peagi");
  const [n2itaEmaili, muudaN2itaEmaili] = useState(false);

  return ( 
    <div>
      <div>Meie telefon: 
        {telefon} 
        { telefon.startsWith("+372") === false && telefon !== "...Lisame peagi" &&
          <button onClick={() => muudaTelefoni("+372" + telefon)}>Lisa suunakood</button>}
      </div>
      <div>Meie email: 
        { n2itaEmaili === true && localStorage.getItem("email")}
        { n2itaEmaili === false && <button onClick={() => muudaN2itaEmaili(true)}>Näita-maili</button>}
      </div>
    </div> );
}

export default Meist;