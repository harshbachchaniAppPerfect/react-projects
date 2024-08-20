import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <h3 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
        Please Login{" "}
      </h3>
    );

  return (
    <h3 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
      Welcome {user.username}
    </h3>
  );
}

export default Profile;
