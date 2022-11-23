import { useParams } from "react-router-dom";

function YksikToode() {
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[index]; 
  
  // ["Nobe", "Tesla", "BMW"][1] --> "Tesla"
  // tooted[1] --> järjekorras nr2

  return ( 
    <div>
      {/* <div>{index}</div> */}
      <div>
          <img src={leitudToode.pilt} alt="" />
          <div>{leitudToode.nimi}</div>
          <div>{leitudToode.hind} €</div>
          <div>{leitudToode.aktiivne + 0}</div>
      </div>
      { leitudToode === undefined && <div>Toodet ei leitud</div> }
    </div> );
}

export default YksikToode;