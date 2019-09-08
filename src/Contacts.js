import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Contact from "./Contact";
import LoadingComponent from "./LoadingComponent";

const Wrapper = styled.div`
    position: relative;
    float: left;
    width: 20%;
    height: 100%;
    color: green;
    background-color: gray;
    padding: 20px;
    border: 20px solid white;
`;

const Contacts = () => {
    const accountId = 0;

    const [contactsAccounts, setContactsAccounts] = useState(
        []
    );

    function loadContacts() {
        fetch("http://localhost:8888/api/accounts/" + accountId)
            .then(res => res.json())
            .then(item => JSON.parse(item["contacts"]))
            .then(contacts => {
                loadContactsAccounts(contacts);
            })
    }

    function loadContactsAccounts(contacts) {
        contacts.forEach(
            (id) => {
                fetch("http://localhost:8888/api/accounts/" + id)
                    .then(res => res.json())
                    .then(account => {
                        setContactsAccounts(c => c.concat([account]));
                    })
            }
        );
    }

    useEffect(loadContacts, [accountId]);

    return (
        <Wrapper>
            {
                contactsAccounts.length ? contactsAccounts.map((item) => (
                    <Contact account={item} />
                )) : <LoadingComponent/>
            }
        </Wrapper>
    )
};

export default Contacts;
