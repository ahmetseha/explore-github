import styled from "styled-components";
import { useState } from "react";

import Card from "./Card";
import getUserRepos from "../../api";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FormSection = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px;

  input {
    border: 1px solid #353d40;
    border-radius: 8px;
    padding: 10px 10px 10px 25px;
    width: 40%;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #003f63;
    &:focus {
      outline: none;
    }
  }
`;
const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 40px;
`;

const CardContainer = () => {
  const [name, setName] = useState("");
  const [repos, setRepos] = useState([]);

  const getUserRepo = (e) => {
    e.preventDefault();
    getUserRepos
      .get(`${name}/repos?sort=created&direction=desc&per_page=300`)
      .then((res) => {
        console.log(res.data);
        setRepos(res.data);
      });
  };
  return (
    <Container>
      <FormSection onSubmit={getUserRepo}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </FormSection>
      <div>
        <CardContent>
          {repos
            ? repos.map((repo, id) => {
                return (
                  <Card
                    key={id}
                    repoId={repo.id}
                    repoName={repo.name}
                    ahref={repo.html_url}
                    repoLang={repo.language}
                  />
                );
              })
            : null}
        </CardContent>
      </div>
    </Container>
  );
};

export default CardContainer;
