import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const Wraper = styled.a`
    display: block;
    height: 40px;
    width: 100%;
    background-color: white;
`;


const Contact = ({account}) =>{
    return (
        <Wraper href={`/accounts/` + account.id}>
            <p>
                {account.nick}
            </p>
        </Wraper>
    )
};

export default withRouter(Contact);