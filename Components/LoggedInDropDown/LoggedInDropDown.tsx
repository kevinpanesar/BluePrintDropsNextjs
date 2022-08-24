import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { useState } from "react";
import React from "react";
import { Dropdown } from "semantic-ui-react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase/clientApp";

const LoggedInDropDown = () => {
  const [user, loading, error] = useAuthState(firebase.auth() as any);
  const [showDropdown, setShowDropdown] = useState(false);
  const username =
    user && typeof user.displayName === "string"
      ? user?.displayName.substring(0, user?.displayName.indexOf(" "))
      : "";

  const logout = () => {
    signOut(auth);
  };

  const userImage : any = user ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'

  return (
    <Container>
      {" "}
      {user && <ProfileImg referrerPolicy="no-referrer" src={userImage} />}
      <Dropdown text={username}>
        <Dropdown.Menu>
          <Dropdown.Item text="Log Out" onClick={logout} />
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  display: flex ;
  flex-direction: row ;
  align-items: center ;

`

const ProfileImg = styled.img`
  height: 35px;
  border-radius: 50%;
  margin-right: 8px ;
`;

const ProfileImageNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ProfileName = styled.p`
  margin: 0;
  font-size: 18px;
  margin-right: 5px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export default LoggedInDropDown;
