import React from 'react';

/* Basic Component example for conditional rendering.
 * https://reactjs.org/docs/conditional-rendering.html
 */

interface IProps {
}

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface IGreetingProps {
    isLoggedIn: boolean
}

interface IState {
    isLoggedIn: boolean
}

function LoginButton(props: IButtonProps) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props: IButtonProps) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function UserGreeting(props: IProps) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: IProps) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props: IGreetingProps) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    else {
        return <GuestGreeting />;
    }
}

export default class LoginControl extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}
