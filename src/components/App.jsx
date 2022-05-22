import React, { Component } from 'react';
import { ContactSection } from './ContactSection/ContactSection.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { ContactTitle } from './ContactList/ContactList.styled';
// import { nanoid } from 'nanoid';

const CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextTodos = this.state.contacts;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem(CONTACTS, JSON.stringify(nextTodos));
    }
  }

  // addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const contacts = this.state.contacts;

  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${name} is already in contacts.`);
  //   }

  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));

  //   //   this.setState(({ contacts }) => {
  //   //     if (
  //   //       contacts.some(
  //   //         contact => contact.name.toLowerCase() === name.toLowerCase()
  //   //       )
  //   //     ) {
  //   //       return alert(`${name} is already in contacts.`);
  //   //     }
  //   //     return {
  //   //       contacts: [contact, ...contacts],
  //   //     };
  //   //   });
  // };

  getContactsList = () => {
    const filterValue = this.state.filter.toLowerCase().trim();
    const filterContacts = this.state.contacts;

    return filterContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  // filterContact = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <ContactSection>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <ContactFilter value={filter} />
        <ContactList
        // contacts={this.getContactsList}
        // onDeleteContact={this.deleteContact}
        ></ContactList>
      </ContactSection>
    );
  }
}
