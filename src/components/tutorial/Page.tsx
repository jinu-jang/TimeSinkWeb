import React from 'react';

/* Basic Component example for hiding a component although it was rendered
 * https://reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering
 */

interface IWarningBannerProps {
    warn: boolean
}

interface IProps {
}

interface IState {
    showWarning: boolean
}


function WarningBanner(props: IWarningBannerProps) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

export default class Page extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }

}
