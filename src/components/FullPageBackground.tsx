import React from 'react'
import styled from 'styled-components'

interface IProps {
    backgroundColor: string
}

interface IState {
    backgroundColor: string
}

const Background = styled.div<IProps>`
    height: 100vh;
    min-height: 100vh;
    background-color: ${(props: IProps) => props.backgroundColor};
`

export default class FullPageBackground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            backgroundColor: props.backgroundColor
        }
    }

    render() {
        return (
            <Background backgroundColor={this.state.backgroundColor}>
                Hello
            </Background>
        );
    }
}
