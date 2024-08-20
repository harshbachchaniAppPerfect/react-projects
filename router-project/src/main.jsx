import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  User,
  Github,
  ErrorPage,
} from "./Components/index.js";
import { githubInfoLoader } from "./Components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="about" element={<About />} errorElement={<ErrorPage />} />
      <Route
        path="contact"
        element={<Contact />}
        errorElement={<ErrorPage />}
      />
      <Route path="user/:id" element={<User />} errorElement={<ErrorPage />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
      <Route
        path="github/:userName"
        errorElement={<ErrorPage />}
        element={<Github />}
        loader={({ params }) => {
          return githubInfoLoader(params.userName);
        }}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
