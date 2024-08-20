import { useState } from "react";

function Home() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log(`Value added: `, counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  let imageUrl =
    "https://images.pexels.com/photos/27559006/pexels-photo-27559006/free-photo-of-a-long-table-with-white-plates-and-green-napkins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <h1 className="bg-green-500 ">TailWind Test</h1>
      <h3>Counter Values: {counter}</h3>
      <button
        onClick={addValue}
        className="px-3 py-3.5  font-medium text-white bg-blue-500"
      >
        {" "}
        Add Value
      </button>
      <br />
      <br />
      <button
        onClick={removeValue}
        className="px-3 py-3.5 font-medium text-white bg-blue-500"
      >
        {" "}
        Decrease Value
      </button>
      <br />
      <br />

      <div>
        <img className="h-20 w-20 " src={imageUrl} alt="" />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            {"Harsh Bachchani"}
          </p>
          <p className="text-sm text-gray-500">{"harsh@gmail.com"}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
