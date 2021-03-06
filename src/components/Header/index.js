import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  height: 100px;
  background-color: #353d40;
  width: 100%;
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
  flex-direction: column;
  font-size: 15px;
  color: #f2b138;
  border: none;
  background: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  option {
    background: #353d40;
  }
`;

const Header = (props) => {
  const onLocaleChange = (locale) => {
    props.setLocale(locale);
  };
  return (
    <Container>
      <NavLink to="/">
        <Head>Github Repositories</Head>
      </NavLink>
      <Nav>
        <NavLink to="/">
          <List>
            <FormattedMessage id="explore">Explore</FormattedMessage>
          </List>
        </NavLink>
        <Lang
          value={props.locale}
          onChange={(e) => onLocaleChange(e.target.value)}>
          <option value="tr-TR">TR</option>
          <option value="en-US">EN</option>
        </Lang>
      </Nav>
    </Container>
  );
};

export default Header;
