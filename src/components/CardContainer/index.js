import styled from "styled-components";
import { useState } from "react";

import Card from "./Card";
import UserInfo from "./UserInfo";
import getUsers from "../../api";

const Container = styled.div`
  display: flex;
`;
const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a1a5a6;
  width: 40%;
  position: sticky;
`;
const CardAndInput = styled.div`
  width: 100%;
  padding: 20px;
`;
const FormSection = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 10px 0;
  input {
    border: 1px solid #353d40;
    border-radius: 8px;
    padding: 10px 10px 10px 25px;
    width: 40%;
    margin-bottom: 20px;
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
  justify-content: space-evenly;
  flex-wrap: wrap;
  grid-gap: 40px;
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background: #f2b138;
  }
`;

const CardContainer = () => {
  const [name, setName] = useState("");
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const getUserInfo = () => {
    getUsers.get(`${name}`).then((res) => {
      setUserInfo(res.data);
    });
  };

  const getUserRepo = (e) => {
    e.preventDefault();
    getUsers.get(`${name}/repos?per_page=1000`).then((res) => {
      setRepos(res.data);
    });
    getUserInfo();
    setShowUserInfo(true);
  };

  return (
    <Container>
      {showUserInfo && (
        <UserInfoContainer>
          <UserInfo userInfo={userInfo} />
        </UserInfoContainer>
      )}
      <CardAndInput>
        <FormSection onSubmit={getUserRepo}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </FormSection>
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
      </CardAndInput>
    </Container>
  );
};

export default CardContainer;
