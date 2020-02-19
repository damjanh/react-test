import React from 'react';

class LoginIndicator extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            loggedIn: !prevState.loggedIn,
        }));
    }

    render() {
        const { loggedIn } = this.state;
        const buttonText = loggedIn ? 'Log out' : 'Log in';
        const displayText = loggedIn ? 'Logged In' : 'Logged Out';
        return (
            <div className="centered-with-margin">
                <h3>
                    {displayText}
                </h3>
                <button type="button" onClick={this.handleClick}>{buttonText}</button>
            </div>
        );
    }
}

export default LoginIndicator;
