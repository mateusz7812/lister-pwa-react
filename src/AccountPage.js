import React, {useState, useEffect} from 'react';
import {MainChildWrapper} from './App.js' ;
import List from "./ListDetails";
import LoadingComponent from "./LoadingComponent";
import styled from 'styled-components';
import AccountDetails from "./AccountDetails";

const ListsWrapper = styled.div`
    margin: 3vh auto;
    width: 80%;
    text-align: center;
`;


const AccountPage = ({match}) =>{
    const accountId = match.params.accountId;
    const [account, setAccount] = useState(
        {}
    );

    const [lists, setLists] = useState(
        []
    );

    useEffect(() =>{
        fetch("http://localhost:8888/api/accounts/" + accountId)
            .then(res => res.json())
            .then(item => {
                setLists(item["lists"]);
                setAccount(item)
            })
    }, [accountId]);

    return(
        <MainChildWrapper>
           <AccountDetails scale="10" account={account}/>
            <ListsWrapper>
                {
                    lists.length ? lists.map((item) => (
                        <List scale="10" item={item}/>
                    )) : <LoadingComponent />
                }
            </ListsWrapper>
        </MainChildWrapper>
    )
};

export default AccountPage;