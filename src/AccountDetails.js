import React from 'react';
import styled from "styled-components";


const  AccountWrapper = styled.div(
    props => ({
        display: "inline-block",
        width: 40* parseInt(props.scale) + "px",
        backgroundColor: "lightgray",
        position: "relative",
        padding: "10px"
    })
);

const AccountImageWrapper = styled.div`
    width:30%;
    float: left;
`;

const AccountImageSquare = styled.div`
    position: relative;
    display:inline-block;
    width: 100%;
    
    &:after{
        content: '';
        display: block;
        margin-top: 100%;
    }
`;

const AccountImage = styled.div`
    background-image: url("/loading-animation.gif");
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid red;
    border-radius: 50%;
`;

const AccountTextWrapper = styled.div`
    width: 70%;
    right: 0;
    top: 50%;
    position: absolute;
    font-size: 20px;
    transform: translate(0, -50%);
`;



const AccountDetails = ({account, scale}) =>{
    return (
        <AccountWrapper scale={scale}>
            <AccountImageWrapper>
                <AccountImageSquare>
                    <AccountImage/>
                </AccountImageSquare>
            </AccountImageWrapper>
            <AccountTextWrapper>
                    <p>Nick: {account.nick}</p>
                    <p>Email: x@x.x</p>
                    <p>Number of lists: X</p>
                    <p>Register date: X</p>
            </AccountTextWrapper>
        </AccountWrapper>
    )
};

export default AccountDetails;