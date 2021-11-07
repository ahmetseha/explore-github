import styled from "styled-components";

const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #353d40;
  grid-gap: 7px;
  h3 {
    color: #003f63;
  }
`;

const Card = ({ repoName, ahref, repoLang }) => {
  return (
    <CardSection>
      <h3>{repoName}</h3>
      <p>{repoLang}</p>
      <a href={ahref} target="_blank">
        asd
      </a>
    </CardSection>
  );
};

export default Card;
