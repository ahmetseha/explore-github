import styled from "styled-components";

const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  height: 120px;
  border: 1px solid #353d40;
  grid-gap: 15px;
  background: #353d40;
  a {
    color: #f2b138;
  }
  p {
    color: #d9d9d9;
  }
`;

const Card = ({ repoName, ahref, repoLang }) => {
  return (
    <CardSection>
      <a href={ahref}>{repoName}</a>
      <p>Language : {repoLang ? repoLang : "Javascript"}</p>
    </CardSection>
  );
};

export default Card;
