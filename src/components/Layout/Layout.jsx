import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header";
import * as S from "../Layout/Layout.style";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <S.MainContainer>
          <Outlet />
          <Footer />
        </S.MainContainer>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
