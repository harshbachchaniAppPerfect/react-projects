// import { useState } from "react";
import { useImmer } from "use-immer";

export default function Form() {
  //   const [person, setPerson] = useState({
  //     name: "Harsh Bachchani",
  //     artwork: {
  //       title: "Montle Nuka",
  //       city: "Los Angeles",
  //     },
  //   });

  //   function handleNameChange(e) {
  //     setPerson({
  //       ...person,
  //       name: e.target.value,
  //     });
  //   }
  //   //we can use in place of below handleArtWorkChange function two functions for each field title and city
  //   function handleArtWorkChange(e) {
  //     setPerson({
  //       ...person,
  //       artwork: {
  //         ...person.artwork,
  //         [e.target.name]: e.target.value,
  //       },
  //     });
  //   }

  //we can use Immer also in place of above code this will work like that
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
    },
  });
  function handleNameChange(e) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }
  //we can use in place of below handleArtWorkChange function two functions for each field title and city
  function handleTitleChange(e) {
    updatePerson((draft) => {
      [draft.artwork.title] = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  return (
    <>
      <label className="block text-blue-700 text-sm font-bold mb-2">
        Name:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={person.name}
          name="name"
          onChange={handleNameChange}
        />
      </label>
      <label className="block text-blue-700 text-sm font-bold mb-2">
        Title:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={person.artwork.title}
          name="title"
          onChange={handleTitleChange}
        />
      </label>
      <label className="block text-blue-700 text-sm font-bold mb-2">
        Name:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={person.artwork.city}
          name="city"
          onChange={handleCityChange}
        />
      </label>
      <p className="text-white">
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
    </>
  );
}
