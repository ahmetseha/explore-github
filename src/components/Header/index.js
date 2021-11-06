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
const Lang = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  border: none;
  padding: 12px 12px 10px 0;
  font-size: 15px;
  color: #f2b138;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  option {
    background: #353d40;
  }
`;

const Header = () => {
  return (
    <Container>
      <Head>Github Repositories</Head>
      <Nav>
        <List>Home</List>
        <List>Explore</List>
        <List>Trend</List>
        <Lang>
          <option>TR</option>
          <option>EN</option>
        </Lang>
      </Nav>
    </Container>
  );
};

export default Header;
