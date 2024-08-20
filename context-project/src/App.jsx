import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
function App() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <UserContextProvider>
        <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Context API Tutorial{" "}
        </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
