import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <form className="centered-with-margin">
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <h1>
                    {firstName}
                    &nbsp;
                    {lastName}
                </h1>
            </form>
        );
    }
}

export default Input;
