import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Information from "./pages/information/Information";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Analytics />
    </div>
  );
}

export default App;
