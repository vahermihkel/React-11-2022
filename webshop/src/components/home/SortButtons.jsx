

const SortButtons = (props) => {
  const sortAZ = () => {
    props.products.sort((a,b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice());
  }

  const sortZA = () => {
    props.products.sort((a,b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice());
  }

  const sortPriceAsc = () => {
    props.products.sort((a,b) => a.price - b.price);
    props.setProducts(props.products.slice());
  }

  const sortPriceDesc = () => {
    props.products.sort((a,b) => b.price - a.price);
    props.setProducts(props.products.slice());
  }

  return (
    <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort price ascending</button>
      <button onClick={sortPriceDesc}>Sort price descending</button>
    </div>
  )
}

export default SortButtons