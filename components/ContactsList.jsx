import React from 'react';
import ContactCard from './ContactCard';
import contactsData from '../data/contactsData';

const ContactsList = () => {
    const contactItems = contactsData.map((contact, index) => (
        <ContactCard
            key={index.toString()}
            id={contact.id}
            name={contact.name}
            image={contact.image}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
        />
    ));
    return (
        <div className="contacts-list">
            <h4>Contacts:</h4>
            {contactItems}
        </div>
    );
};

export default ContactsList;
