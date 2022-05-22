import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from 'redux/contactsAction';
import { ContactFilterLabel, ContactFilterInput } from './ContactFilter.styled';

const ContactFilter = ({ value, onChange }) => {
  return (
    <ContactFilterLabel>
      Find contacts by name
      <ContactFilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </ContactFilterLabel>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
