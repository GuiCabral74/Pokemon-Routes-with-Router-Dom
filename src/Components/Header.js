import { Link } from "react-router-dom";
import { NavMenu, StyledLink } from "../Style/Styles";

const Header = () => {
  return (
    <NavMenu>
      <StyledLink to="/">
        Home
      </StyledLink>
      |
      <StyledLink to="venusaur">
        Venusaur
      </StyledLink>{" "}
      |
      <StyledLink to="charizard">
        Charizard
      </StyledLink>{" "}
      |
      <StyledLink to="blastoise">
        Blastoise
      </StyledLink>{" "}
      |
      <StyledLink to="pikachu">
        Pikachu
      </StyledLink>
      |
      <StyledLink to="gardevoir">
        Gardevoir
      </StyledLink>{" "}
      |
      <StyledLink to="lucario">
        Lucario
      </StyledLink>
    </NavMenu>
  );
};

export default Header;