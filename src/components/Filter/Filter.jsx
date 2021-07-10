import { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, Input } from './Filter.styles'

class Filter extends Component {
  render() {
    const { onChange } = this.props
    return (
      <Label>
        Find contacts by name:
        <Input onChange={onChange} type="text" name="filter"></Input>
      </Label>
    )
  }
}

export default Filter

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}
