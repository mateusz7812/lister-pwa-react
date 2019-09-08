import React, {useEffect, useState} from 'react';
import {MainChildWrapper} from "./App";
import LoadingComponent from "./LoadingComponent";
import AccountDetails from "./AccountDetails";

const  AccountsPage = () => {

    const [accounts, setAccounts] = useState([]);

    function updateAccounts() {
        fetch("http://localhost:8888/api/accounts")
            .then(res => res.json())
            .then(json => {
                alert(JSON.stringify(json));
                return json
            })
            .then(json => json["items"])
            .then(items => setAccounts(items))
    }

    useEffect(() =>{
        updateAccounts();
        setInterval(()=> updateAccounts(), 30000)
    });


    return (
        <MainChildWrapper>
            {
                accounts.length ? accounts.map((item) => (
                    <AccountDetails scale="8" account={item}/>
                )) : <LoadingComponent />
            }
        </MainChildWrapper>
    )
};

export default AccountsPage;