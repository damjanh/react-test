import React from 'react';
import PropTypes from 'prop-types';

const Conditional = (props) => {
    const { isLoading } = props;
    return isLoading ? <h4>Loading Contacts...</h4> : <h4>Contacts:</h4>;
};

Conditional.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default Conditional;
