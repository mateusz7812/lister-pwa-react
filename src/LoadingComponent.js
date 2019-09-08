import React from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(200, 200, 200, 0.5);
`;

const LoadingImg = styled.img`
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
`;

const LoadingComponent = () =>{
    return(
        <LoadingDiv>
            <LoadingImg src="/loading-animation.gif" alt="Loading..."/>
        </LoadingDiv>
    );
};

export default LoadingComponent;
