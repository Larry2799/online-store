import React from "react";
import UserNavigation from "./components/UserNavigation";
import logo from "../../assets/images/png/bmw-logo.png";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo to="/">
        <img src={logo} alt="BMW logo" />
      </S.Logo>
      <UserNavigation />
    </S.HeaderContainer>
  );
};

export default Header;
