import productsFromFile from "../data/products.json";

const Homepage = () => {

  const addToCart = () => {
    // KODUS: Ostukorvi loogika eesti keelse projekti järgi
    let cartLS = localStorage.getItem("cart");
  }

  return (
    <div>
      <button>Sort A-Z</button>
      <button>Sort Z-A</button>
      <button>Sort price ascending</button>
      <button>Sort price descending</button>
      {productsFromFile.map(element => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <button>Add to cart</button>
        </div>)}
    </div>
  )
}

export default Homepage