import React from 'react';
import UserInfoComponent from './UserInfoComponent';

class UserInfoContainer extends React.Component {
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
            <UserInfoComponent
                handleChange={this.handleChange}
                firstName={firstName}
                lastName={lastName}
                age={age}
                gender={gender}
                destination={destination}
                isVegan={isVegan}
                isVegeterian={isVegeterian}
                isLactoseFree={isLactoseFree}
            />
        );
    }
}

export default UserInfoContainer;
