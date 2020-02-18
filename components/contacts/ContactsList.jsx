import React, { Component } from 'react';
import ContactCard from './ContactCard';
import Conditional from './Conditional';
import contactsData from '../../data/contactsData';

class ContactsList extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            contacts: [],
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState(
                {
                    isLoading: false,
                    contacts: contactsData,
                },
            );
        }, 2000); // Simulate a api call
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { contacts } = this.state;
        const contactItems = contacts.map((contact, index) => (
            <ContactCard
                key={index.toString()}
                id={contact.id}
                name={contact.name}
                image={contact.image}
                phoneNumber={contact.phoneNumber}
                email={contact.email}
            />
        ));
        const { isLoading } = this.state;
        return (
            <div className="contacts-list">
                <Conditional isLoading={isLoading} />
                {contactItems}
            </div>
        );
    }
}

export default ContactsList;
