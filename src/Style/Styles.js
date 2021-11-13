import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background: #5B8EE5;
    box-sizing: border-box;
  }
  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: unset;
  }
`;

export const NavMenu = styled.nav`
  padding-top: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin: 50px auto;
  color: #fff;
  text-transform: uppercase;
`;

export const Info = styled.p`
  font-size: 25px;
  color: #fff;
`;

export const Images = styled.img`
  height: 750px;
  width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5b8ee5;
`;

export const StyledLink = styled(Link)`
  margin: 0 10px;
`