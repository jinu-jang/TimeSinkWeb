import React from 'react';

/* Basic Component example for how to use life cycle.
 * https://reactjs.org/docs/state-and-lifecycle.html
 */

interface IProps {
}

interface IState {
    date: Date
}

export default class Clock extends React.Component<IProps, IState> {
    private _timerID: any;

    constructor(props: IProps) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this._timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this._timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
              <h1>Hello, world</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
