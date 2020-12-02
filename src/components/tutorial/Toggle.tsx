import React from 'react';

/* Basic Component example for handling events.
 * https://reactjs.org/docs/handling-events.html
 */

interface IProps {
}

interface IState {
    isToggleOn: boolean
}

export default class Toggle extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
