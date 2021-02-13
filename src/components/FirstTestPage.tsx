import React from 'react'
import styled from 'styled-components'

interface IProps {
}

interface IState {
    backgroundColor: string
}

const Background = styled.div<IProps>`
    height: 100vh;
    min-height: 100vh;
    background-color: #1E4174;
`

const Title = styled.h1`
    font-size: 10em;
    text-align: center;
    color: #DDA94B;
`;

export default class FullPageBackground extends React.Component<IProps, IState> {

    render() {
        return (
            <Background>
                <Title>
                    Hello!
                </Title>
            </Background>
        );
    }
}
