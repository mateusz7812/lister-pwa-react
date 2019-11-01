import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";

const Nav = styled.nav`
    float: left;
    width: 20%;
    height: 100%;
    padding: 20px;
    border: 20px solid white;
    background-color: gray;
`;

const Logo = styled.img`
    width: 70%;
    margin: 0 15%;
`;

const StyledNavLink = styled(NavLink)`
    display: block;
    width: 100%;
    height: 40px;
    background-color: white;
    margin: 10px 0;
    float: left;
    color: black;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
`;

const Navigation = () => (
    <Nav>
        <Logo src="/icon.png"/>
        <StyledNavLink exact activeClassName="current" to='/lists'>Lists</StyledNavLink>
        <StyledNavLink exact activeClassName="current" to='/accounts'>Accounts</StyledNavLink>
    </Nav>
);

export default Navigation;