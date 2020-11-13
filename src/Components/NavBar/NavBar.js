import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import { Context } from '../Functions/context'

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  width: 100px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 18px;
  padding: 10px;
  transition: .3s linear;

  :hover {
    color: #299B01;
    background-color: white;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
  margin-right: 30px;
`;

export const NavBar = () => {

  const {auth: { authentication, logIn, logOut}} = useContext(Context);
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt='logo'/>
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ?
        <User>
          <figure>
            <figcaption>{authentication.displayName}</figcaption>
          </figure>
          <LogOut title='Выйти' onClick={logOut}>X</LogOut>
        </User> :
        <Login onClick={logIn}>войти</Login>
      }
    </NavBarStyled>
  )
};

 
