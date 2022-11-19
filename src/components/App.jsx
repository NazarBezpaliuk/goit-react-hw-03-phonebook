import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import {
  Container,
  TitlePhonebook,
  TitleContacts,
  Description,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isDublicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isDublicate
      ? alert(`${name} is already in contacts list`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contactList = localStorage.getItem('contacts');
    const parsedContactList = JSON.parse(contactList);

    if (parsedContactList) {
      this.setState({ contacts: parsedContactList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm addContacts={this.addContacts} />
        <TitleContacts>Contacts</TitleContacts>
        {contacts.length === 0 ? (
          <Description>Please, enter your first contact</Description>
        ) : (
          <>
            <Filter valueFilter={filter} onChangeFilter={this.changeFilter} />
            <ContactList
              visible={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
      </Container>
    );
  }
}
