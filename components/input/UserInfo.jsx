import React from 'react';

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            isVegan: false,
            isVegeterian: false,
            isLactoseFree: false,
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
            age,
            gender,
            destination,
            isVegan,
            isVegeterian,
            isLactoseFree,
        } = this.state;
        return (
            <div className="centered-with-margin">
                <h1>
                    User Input
                </h1>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />
                    <input
                        type="text"
                        name="age"
                        value={age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />
                    <label htmlFor="male-gender">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            id="male-gender"
                            onChange={this.handleChange}
                        />
                        Male
                    </label>
                    <label htmlFor="female-gender">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female-gender"
                            checked={gender === 'female'}
                            onChange={this.handleChange}
                        />
                        Female
                    </label>
                    <br />
                    <select value={destination} name="destination" onChange={this.handleChange}>
                        <option value="">-- Please choose a destination --</option>
                        <option value="germany">Germany</option>
                        <option value="finland">Finland</option>
                        <option value="italy">Italy</option>
                        <option value="denmark">Denmark</option>
                    </select>
                    <br />
                    <label htmlFor="checkbox-vegan">
                        <input id="checkbox-vegan" type="checkbox" name="isVegan" checked={isVegan} onChange={this.handleChange} />
                        Is Vegan:
                    </label>
                    <br />
                    <label htmlFor="checkbox-vegeterian">
                        <input id="checkbox-vegeterian" type="checkbox" name="isVegeterian" checked={isVegeterian} onChange={this.handleChange} />
                        Is Vegetarian:
                    </label>
                    <br />
                    <label htmlFor="checkbox-lactose">
                        <input id="checkbox-lactose" type="checkbox" name="isLactoseFree" checked={isLactoseFree} onChange={this.handleChange} />
                        Is Lactose Free:
                    </label>
                </form>

                <h1>Entered Information:</h1>
                <p>
                    Your name:
                    {firstName}
                    &nbsp;
                    {lastName}
                </p>
                <p>
                    Your age:
                    {age}
                </p>
                <p>
                    Your gender:
                    {gender}
                </p>
                <p>
                    Your destination:
                    {destination}
                </p>
                <p>
                    Vegan:
                    {isVegan ? 'Yes' : 'No'}
                </p>
                <p>
                    Vegeterian:
                    {isVegeterian ? 'Yes' : 'No'}
                </p>
                <p>
                    Lactose Free:
                    {isLactoseFree ? 'Yes' : 'No'}
                </p>
            </div>
        );
    }
}

export default UserInfo;
