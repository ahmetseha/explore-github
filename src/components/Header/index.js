import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  height: 90px;
  background-color: #353d40;
`;
const Head = styled.h1`
  letter-spacing: 3px;
  color: #f2b138;
  cursor: pointer;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 45px;
  font-size: 20px;
`;
const List = styled.li`
  font-weight: 500;
  letter-spacing: 3px;
  color: #f2b138;
  cursor: pointer;
`;
const Lang = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  font-size: 15px;
  color: #f2b138;
  cursor: pointer;
`;
const LangList = styled.li`
  background: #353d40;
`;

const Header = () => {
  return (
    <Container>
      <NavLink to="/">
        <Head>Github Repositories</Head>
      </NavLink>
      <Nav>
        <NavLink to="/">
          <List>Home</List>
        </NavLink>
        <NavLink to="/Explore">
          <List>Explore</List>
        </NavLink>
        <NavLink to="/Trends">
          <List>Trends</List>
        </NavLink>
        <Lang>
          <LangList>TR</LangList>
          <LangList>EN</LangList>
        </Lang>
      </Nav>
    </Container>
  );
};

export default Header;
