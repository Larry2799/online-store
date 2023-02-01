import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

import Footer from "../Footer/Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main center-container">
        <Outlet />
        <Footer />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
