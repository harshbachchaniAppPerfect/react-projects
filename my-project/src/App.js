import Card from "./components/Card.js";
import Home from "./components/Home.js";

function App() {
  let obj1 = {
    modelName: "MAC Air",
    chip: "M1",
  };
  let obj2 = {
    modelName: "MAC Pro",
    chip: "M2",
  };
  return (
    <>
      <h1>My First React App</h1>
      <Home />
      <br />
      <br />
      <br />
      <Card name="Mac" property={obj1} />
      <br />
      <Card name="Mac" property={obj2} />
    </>
  );
}

export default App;
