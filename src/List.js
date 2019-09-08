import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';

const StyledList = styled.div(
    props => ({
        width: 20 * parseInt(props.scale) + "px",
        height: 30 * parseInt(props.scale) + "px",
        backgroundColor: "lightgray",
        padding: 0.5 * parseInt(props.scale) + "px",
        margin: parseInt(props.scale) + "px",
        display: "inline-block",
    })
);

const Account = styled.p`
    width: 100%;
    height: 6%;
`;

const Title = styled.h4`
    width: 100%;
    text-align: center;
    height: 8%;
`;

const Content = styled.p`
    width: 100%;
    text-align: justify;
    height: 80%;
`;

const Date = styled.p`
    width: 100%;
    text-align: right;
    height: 6%;
`;

const List = ({item, history, scale}) => {
    const routeChange = () => {
        let path = `/lists/` + item.id;
        history.push(path);
    };

    return (
        <StyledList scale={scale} onClick={routeChange}>
            <Account>{item.account}</Account>
            <Title>{item.title}</Title>
            <Content>{item.body}</Content>
            <Date>{item.pub_date}</Date>
        </StyledList>
    );
};

export {StyledList};
export default withRouter(List);