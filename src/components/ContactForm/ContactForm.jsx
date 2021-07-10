import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import { Form, Label, Input, Button } from './ContactForm.styles'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }
  idInputName = uuidv4()
  idInputNumber = uuidv4()

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { name, number } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.idInputName}>
          Name
          <Input
            onChange={this.handleInputChange}
            type="text"
            id={this.idInputName}
            name="name"
            autoComplete="off"
            placeholder="Enter name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label htmlFor={this.idInputNumber}>
          Number
          <Input
            onChange={this.handleInputChange}
            type="tel"
            id={this.idInputNumber}
            name="number"
            autoComplete="off"
            placeholder="Enter number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>
        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    )
  }
}

export default ContactForm

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
