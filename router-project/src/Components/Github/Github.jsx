import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshChoudhary")
  //     .then((res) => {
  //       console.log(`My response is: ${JSON.stringify(res)}`);
  //       res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-blue-900 text-white text-3xl p-4">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async (userName) => {
  if (typeof userName !== "string") {
    userName = "hiteshchoudhary";
  }
  try {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    return res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};
