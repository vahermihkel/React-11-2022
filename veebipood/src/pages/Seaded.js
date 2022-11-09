import { useState } from "react";

function Seaded() {
  const [keel, uuendaKeel] = useState("est");

  return ( 
    <div>
      <button onClick={() => uuendaKeel("est")}>Eesti</button>
      <button onClick={() => uuendaKeel("eng")}>Inglise</button>
      <button onClick={() => uuendaKeel("rus")}>Vene</button>
     { keel === "est" && <div>Lehekülg on eesti keelne</div> }
     { keel === "eng" && <div>Lehekülg on inglise keelne</div> }
     { keel === "rus" && <div>Lehekülg on vene keelne</div> }
    </div> );
}

export default Seaded;