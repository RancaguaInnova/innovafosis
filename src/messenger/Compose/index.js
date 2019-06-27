import './Compose.css'

import React, { Component } from 'react'

export default class Compose extends Component {
  render() {
    return (
      <div className='compose'>
        <input type='text' className='compose-input' placeholder='Agregar Mensaje' />

        {this.props.rightItems}
      </div>
    )
  }
}
