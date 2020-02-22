import React from 'react';
import PropTypes from 'prop-types';

const UserInfoComponent = (props) => {
    const {
        handleChange,
        firstName,
        lastName,
        age,
        gender,
        destination,
        isVegan,
        isVegeterian,
        isLactoseFree,
    } = props;
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
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <br />
                <input
                    type="text"
                    name="age"
                    value={age}
                    onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                    Female
                </label>
                <br />
                <select value={destination} name="destination" onChange={handleChange}>
                    <option value="">-- Please choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="finland">Finland</option>
                    <option value="italy">Italy</option>
                    <option value="denmark">Denmark</option>
                </select>
                <br />
                <label htmlFor="checkbox-vegan">
                    <input id="checkbox-vegan" type="checkbox" name="isVegan" checked={isVegan} onChange={handleChange} />
                    Is Vegan:
                </label>
                <br />
                <label htmlFor="checkbox-vegeterian">
                    <input id="checkbox-vegeterian" type="checkbox" name="isVegeterian" checked={isVegeterian} onChange={handleChange} />
                    Is Vegetarian:
                </label>
                <br />
                <label htmlFor="checkbox-lactose">
                    <input id="checkbox-lactose" type="checkbox" name="isLactoseFree" checked={isLactoseFree} onChange={handleChange} />
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
};

UserInfoComponent.propTypes = {
    handleChange: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    isVegan: PropTypes.bool.isRequired,
    isVegeterian: PropTypes.bool.isRequired,
    isLactoseFree: PropTypes.bool.isRequired,
};

export default UserInfoComponent;
