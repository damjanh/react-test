import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = (
    {
        name, image, phoneNumber, email,
    },
) => (
    <div className="contact-card">
        <img src={image} alt="Contact" />
        <h3>{name}</h3>
        <p>
            Phone:
            {phoneNumber}
        </p>
        <p>
            Email:
            {email}
        </p>
    </div>
);

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default ContactCard;
