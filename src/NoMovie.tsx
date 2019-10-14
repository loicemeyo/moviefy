import React from 'react';
import styled from 'styled-components';

const NoMovie = () => {
    return(
        <Message>Sorry! We do not have that movie...</Message>
    )
}

const Message = styled.div`
    font-size: 24px;
    display: flex;
    align-items: center;
    text-align: start;
    margin-left: 20px;
`;

export default NoMovie;

