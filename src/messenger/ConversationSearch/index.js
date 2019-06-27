import './ConversationSearch.css'

import React, { Component } from 'react'

export default class ConversationSearch extends Component {
  render() {
    return (
      <div className='conversation-search'>
        <input type='search' className='conversation-search-input' placeholder='Buscar mensaje' />
      </div>
    )
  }
}
