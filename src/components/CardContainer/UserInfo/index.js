import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  font-size: 12px;
`;
const FollowInfo = styled.span`
  font-size: 12px;
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
        Followers : {userInfo.followers} <br /> Following : {userInfo.following}
      </FollowInfo>
    </UserContainer>
  );
};

export default UserInfo;
