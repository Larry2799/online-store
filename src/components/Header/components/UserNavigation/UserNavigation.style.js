import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
`;

export const NavigationLink = styled(NavLink)`
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;
