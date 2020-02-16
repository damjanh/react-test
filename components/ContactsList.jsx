import React from 'react';
import ContactCard from './ContactCard';
import contactsData from '../data/contactsData';

const ContactsList = () => contactsData.map((contact, index) => (
    <ContactCard
        key={index.toString()}
        id={contact.id}
        name={contact.name}
        image={contact.image}
        phoneNumber={contact.phoneNumber}
        email={contact.email}
    />
));

export default ContactsList;
