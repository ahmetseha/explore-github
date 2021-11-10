import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 30px;
  height: 100%;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 150px;
  }
`;
const Bio = styled.p`
  text-align: center;
  font-size: 15px;
`;
const FollowInfo = styled.span`
  display: flex;
  justify-content: center;
  font-size: 12px;
  grid-gap: 5px;
  color: #353d40;
  span {
    font-size: 15px;
  }
`;

const UserInfo = (props) => {
  const { userInfo } = props;

  return (
    <UserContainer>
      <Image>
        <img src={userInfo.avatar_url} alt={userInfo.name} />
      </Image>
      <Bio>{userInfo.bio}</Bio>
      <FollowInfo>
        <span>Followers : {userInfo.followers}</span>
        <br />
        <span>Following : {userInfo.following}</span>
      </FollowInfo>
    </UserContainer>
  );
};

export default UserInfo;
