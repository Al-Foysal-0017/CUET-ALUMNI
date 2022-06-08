import React from "react";
import NavAndSidebar from "./components/navbar/NavAndSidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import "./_app.scss";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import News from "./pages/news";
import About from "./pages/about";
import Community from "./pages/community";
import Events from "./pages/events";
import Carrier from "./pages/carrier";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {/* {pathname === "/sign-up" ? (
        <>
          <div
            style={{
              position: "fixed",
              width: "100%",
              background: "#fff",
              zIndex: "9999999999999999999",
              top: 0,
            }}
          >
            <NavAndSidebar />
          </div>
          <div style={{ marginBottom: "6.5rem" }}></div>
        </>
      ) : (
        <NavAndSidebar />
      )} */}
      <NavAndSidebar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="community" element={<Community />} />
        <Route path="events" element={<Events />} />
        <Route path="carrier" element={<Carrier />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
