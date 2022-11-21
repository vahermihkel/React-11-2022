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
      <div>{leitudToode}</div>
      { leitudToode === undefined && <div>Toodet ei leitud</div> }
    </div> );
}

export default YksikToode;