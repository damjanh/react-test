import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            gender: '',
            color: 'Red',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {
            name,
            value,
            type,
            checked,
        } = event.target;
        if (type === 'checkbox') {
            this.setState({
                [name]: checked,
            });
        } else {
            this.setState({
                [name]: value,
            });
        }
    }

    render() {
        const {
            firstName,
            lastName,
            isFriendly,
            gender,
            color,
        } = this.state;
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
                <label htmlFor="friendly-checkbox">
                    <input
                        id="friendly-checkbox"
                        type="checkbox"
                        name="isFriendly"
                        checked={isFriendly}
                        onChange={this.handleChange}
                    />
                    Is friendly?
                </label>
                <label htmlFor="male-radio">
                    <input
                        id="male-radio"
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={this.handleChange}
                    />
                    Male
                </label>
                <label htmlFor="female-radio">
                    <input
                        id="female-radio"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={this.handleChange}
                    />
                    Female
                </label>
                <label htmlFor="favorite-color">
                    Favorite color:
                    <select id="favorite-color" value={color} name="color" onChange={this.handleChange}>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Red">Red</option>
                    </select>
                </label>
                {
                    firstName.length > 0 && lastName.length > 0 && (
                        <h1>
                            {firstName}
                            &nbsp;
                            {lastName}
                            &nbsp;
                            is
                            &nbsp;
                            {isFriendly ? 'Friendly' : 'Unfriendly'}
                        </h1>
                    )
                }
                {
                    gender.length > 0 && (
                        <h2>
                            You are:
                            &nbsp;
                            {gender}
                        </h2>
                    )
                }
                {
                    color.length > 0 && (
                        <h2>
                            Favorite color:
                            &nbsp;
                            {color}
                        </h2>
                    )
                }
            </form>
        );
    }
}

export default Input;
