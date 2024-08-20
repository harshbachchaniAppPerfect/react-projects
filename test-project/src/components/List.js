function handleClick(name) {
  alert(`You clicked ${name}`);
}

function MyList() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
    { title: "WaterMelon", isFruit: true, id: 4 },
    { title: "Pineapple", isFruit: false, id: 5 },
    { title: "MuskMelon", isFruit: true, id: 6 },
    { title: "Banana", isFruit: true, id: 7 },
  ];
  const filteredItems = products.filter((product) => product.isFruit);
  const listFruits = filteredItems.map((product) => (
    <li key={product.id}>
      <button
        onClick={() => handleClick(product.title)}
        style={{ color: product.isFruit ? "blue" : "darkgreen" }}
      >
        {product.title}
      </button>
    </li>
  ));
  const allProducts = products.map((product) => (
    <li key={product.id}>
      <button
        onClick={() => handleClick(product.title)}
        style={{ color: product.isFruit ? "blue" : "darkgreen" }}
      >
        {product.title}
      </button>
    </li>
  ));
  return (
    <>
      <ol>{listFruits}</ol>
      <ol>{allProducts}</ol>
    </>
  );
}
export default MyList;
