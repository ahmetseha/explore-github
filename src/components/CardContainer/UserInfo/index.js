import { useEffect, useState } from "react";
import styled from "styled-components";

import getUsers from "../../../api";

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = (props) => {
  const { name, setName, getUser } = props;
  const [userInfo, setUserInfo] = useState([]);

  //   const getUserInfo = () => {
  //     getUsers.get(`${name}`).then((res) => {
  //       setUserInfo(res.data);
  //       console.log(userInfo);
  //     });
  //   };

  useEffect(() => {
    getUsers.get(`${name}`).then((res) => {
      setUserInfo(res.data);
      console.log(userInfo);
    });
  });

  return (
    <UserContainer>
      <div>
        <img src={userInfo.avatar_url} alt="" />
      </div>
    </UserContainer>
  );
};

export default UserInfo;
