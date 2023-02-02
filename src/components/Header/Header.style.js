import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid #bbb;
`;

export const Logo = styled(NavLink)`
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;
