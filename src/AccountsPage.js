import React, { useState, useEffect} from 'react';
import {MainChildWrapper} from "./App";
import LoadingComponent from "./LoadingComponent";
import AccountDetails from "./AccountDetails";
import styled from 'styled-components';

const StyledAccountDetails = styled(AccountDetails)`
    margin: 10px 20px;
`;

const  AccountsPage = () => {

    const [accounts, setAccounts] = useState([]);

    const updateAccounts = () => {
        fetch("http://localhost:8888/api/accounts")
            .then(res => res.json())
            .then(items => setAccounts(items))
    };

    useEffect(() =>{
        updateAccounts();
        setInterval(()=> updateAccounts(), 30000)
    }, []);


    return (
        <MainChildWrapper>
            {
                accounts.length ? accounts.map((item) => (
                    <StyledAccountDetails href={'/accounts/' + item.id} scale="8" account={item}/>
                )) : <LoadingComponent />
            }
        </MainChildWrapper>
    )
};

export default AccountsPage;