import React, {useEffect, useState} from 'react';
import {MainChildWrapper} from './App.js';
import List from "./List";
import LoadingComponent from "./LoadingComponent";
import AccountDetails from "./AccountDetails";
import styled from 'styled-components';

const OneLiner = styled.div`
     width: 100%;
     text-align: inherit;
`;

const ListPage = ({match}) =>{
    const listId = match.params.listId;

    const [list, setList] = useState(
        {}
    );

    useEffect(() =>{
        fetch("http://localhost:8888/api/lists/" + listId)
            .then(res => res.json())
            .then(item => setList(item))
    }, [listId]);

    return(
        <MainChildWrapper>
            { Object.keys(list).length?
                        <div>
                            <OneLiner>
                                <List scale="15" key={list.toString()} item={list}/>
                            </OneLiner>
                            <OneLiner>
                                <AccountDetails  href={'/accounts/' + list["account_id"]} scale="8" account={{"nick": list["account"]}}/>
                            </OneLiner>
                        </div>
                : <LoadingComponent/>
            }
        </MainChildWrapper>
    )
};

export default ListPage;