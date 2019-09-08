import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import ListsPage from "./ListsPage";
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import styled from 'styled-components';
import ListPage from "./ListPage";
import AccountPage from "./AccountPage";
import AccountsPage from "./AccountsPage";

const MainChildWrapper = styled.div`
    position: relative;
    float: left;
    width: 60%;
    height: 100%;
    border: 20px solid white;
    text-align: center;
    overflow: scroll;
    scrollbar-width: none; 
`;

const Wrapper = styled.div`
    width: 80%;
    height: 100vh;
    margin: 0 auto;
`;

const App = () => (
    <Wrapper>
        <Navigation />
        <Main />
        <Contacts />
    </Wrapper>
);

const Main = () => (
    <Switch>
        <Route exact path='/lists' component={ListsPage}/>
        <Route exact path='/lists/:listId' component={ListPage}/>
        <Route exact path='/accounts' component={AccountsPage}/>
        <Route exact path='/accounts/:accountId' component={AccountPage}/>
        <Redirect path ="*" to="/lists"/>
    </Switch>
);

export default App;
export {MainChildWrapper};