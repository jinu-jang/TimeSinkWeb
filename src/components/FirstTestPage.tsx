import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

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
    text-shadow: 5px 3px 0 #DDA94B;
    color: #103A6E;
    margin: 0;
`;

const Horizontal = styled.h1`
    font-size: 10em;
    text-align: center;
    text-shadow: 5px 3px 0 #DDA94B;
    color: #103A6E;
    margin: 0;
    position: absolute;
    top: 40%;
    left: 40%;
`

export default class FullPageBackground extends React.Component<IProps, IState> {

    render() {
        return (
            <Background>
                <Title>
                    Hello!
                </Title>
                <Parallax
                    y={[-70, 70]}
                    x={[30, -30]}
                >
                    <Horizontal className="h1">Horizontal</Horizontal>
                </Parallax>
            </Background>
        );
    }
}
