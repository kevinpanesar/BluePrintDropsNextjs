import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import {useState} from 'react'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {getAuth,signOut } from 'firebase/auth'
import { auth } from "../../firebase/clientApp";

    const LoggedInDropDown = () => {

        const [user, loading, error] = useAuthState(firebase.auth() as any);
        const [showDropdown, setShowDropdown] = useState(false);
        const username = (user && typeof user.displayName === 'string') ? user?.displayName.substring(0, user?.displayName.indexOf(' ')) : '';

        const logout = () => {
            signOut(auth);
          };

      return(
      
      <Dropdown text={username}>
        <Dropdown.Menu>
          <Dropdown.Item text='Log Out' onClick={logout} />
        </Dropdown.Menu>
      </Dropdown>)
    }

    const ProfileImage = styled.img`
    height: 35px;
    border-radius: 50%
`

const ProfileImageNameContainer = styled.div`
    display: flex ;
    flex-direction: row ;
    align-items: center ;
`
const ProfileName = styled.p`
margin: 0;
font-size: 18px;
margin-right: 5px;
@media (min-width: 768px) and (max-width: 1024px){
    font-size: 13px;
   }

      @media (min-width: 1024px) and (max-width: 1440px){
    font-size: 14px;
   }
`

export default LoggedInDropDown