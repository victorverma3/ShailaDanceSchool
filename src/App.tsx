import React, { useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Information from "./pages/information/Information";
import Gallery from "./pages/gallery/Gallery";
import Timeline from "./pages/timeline/Timeline";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Testimonials from "./pages/testimonials/Testimonials";
import Layout from "./Layout";

function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
