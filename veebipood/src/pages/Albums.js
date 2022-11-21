import albums from "../albums.json";

function Albums() {
  return ( 
  <div>
    {albums.map(element => <div>{element.id}</div>)}
  </div> );
}

export default Albums;