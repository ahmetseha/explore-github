import styled from "styled-components";

import "./App.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 300px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </Container>
  );
}

export default App;
