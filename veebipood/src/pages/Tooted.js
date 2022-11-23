import { Link } from "react-router-dom";

function Tooted() {
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

  const lisaOstukorvi = (klikitudToode) => {
    let ostukorvLS = localStorage.getItem("ostukorv");
    ostukorvLS = JSON.parse(ostukorvLS) || [];
    ostukorvLS.push(klikitudToode);
    ostukorvLS = JSON.stringify(ostukorvLS);
    localStorage.setItem("ostukorv", ostukorvLS);
  }

  return ( 
    <div>
      {tooted.map((element, index) => 
        <div key={index}>
          <Link to={"/toode/" + index}>
  {/* Objects are not valid as a React child (found: object with keys {nimi, hind, pilt, aktiivne}) */}
            <img src={element.pilt} alt="" />
            <div>{element.nimi}</div>
            <div>{element.hind} €</div>
            <div>{element.aktiivne + 0}</div>
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>)}
    </div> );
}

export default Tooted;