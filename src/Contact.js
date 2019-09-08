import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const Wraper = styled.div`
    height: 20px;
    width: 100%;
    background-color: lightgrey;
`;

const Name = styled.p`
    color: white;
`;

const Contact = ({account, history}) =>{
    const routeChange = () => {
        let path = `/accounts/` + account.id;
        history.push(path);
    };
    return (
        <Wraper onClick={routeChange}>
            <Name>
                {account.nick}
                Contact
            </Name>
        </Wraper>
    )
};

export default withRouter(Contact);