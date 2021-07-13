import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import contacts from './data/Contacts.json'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'
import Container from './components/Container/Container'

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(contacts)

    if (parseContacts) {
      this.setState({ contacts: parseContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  formSubmitHandle = ({ name, number }) => {
    const { contacts } = this.state
    const entry = {
      id: uuidv4(),
      name,
      number,
    }
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the contacts.`)
      return
    }
    this.setState((prevState) => ({
      ...prevState,
      contacts: [entry, ...prevState.contacts],
    }))
  }
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state
    const normalizedFilter = filter.toLowerCase()

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }))
  }

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts()
    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandle} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Container>
    )
  }
}

export default App
