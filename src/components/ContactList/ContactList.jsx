import { ContactNameList } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactIListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getContacts } from 'redux/contactsSelector';
import { deleteContact } from 'redux/contactsAction';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ContactNameList>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactNameList>
    </>
  );
};

ContactList.propTypes = {
  getContactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = items.filter(item => item.name.includes(filter));
  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
