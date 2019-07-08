import './MessageList.css'

import React, { Component } from 'react'

import Compose from '../Compose'
import Message from '../Message'
import Toolbar from '../Toolbar'
import ToolbarButton from '../ToolbarButton'
import axios from 'axios'
import moment from 'moment'

const MY_USER_ID = 'apple'

export default class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  async componentDidMount() {
    var messages = await this.getMessages()
    this.setState({ messages: messages })
  }

  async getText() {
    var text = await axios.get('http://www.randomtext.me/api/gibberish/p-1/5-15').then(text => {
      return text.data.text_out
    })
    text = text.replace('<p>', '')
    text = text.replace('</p>', '')

    return text
  }

  async getMessages() {
    var messages = [
      {
        id: 1,
        author: 'apple',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 2,
        author: 'orange',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 3,
        author: 'orange',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 4,
        author: 'apple',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 5,
        author: 'apple',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 6,
        author: 'apple',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 7,
        author: 'orange',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 8,
        author: 'orange',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 9,
        author: 'apple',
        message: await this.getText(),
        timestamp: new Date().getTime()
      },
      {
        id: 10,
        author: 'orange',
        message: await this.getText(),
        timestamp: new Date().getTime()
      }
    ]
    return messages
  }

  renderMessages() {
    let i = 0
    let messageCount = this.state.messages.length
    let messages = []

    while (i < messageCount) {
      let previous = this.state.messages[i - 1]
      let current = this.state.messages[i]
      let next = this.state.messages[i + 1]
      let isMine = current.author === MY_USER_ID
      let currentMoment = moment(current.timestamp)
      let prevBySameAuthor = false
      let nextBySameAuthor = false
      let startsSequence = true
      let endsSequence = true
      let showTimestamp = true

      if (previous) {
        let previousMoment = moment(previous.timestamp)
        let previousDuration = moment.duration(currentMoment.diff(previousMoment))
        prevBySameAuthor = previous.author === current.author

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp)
        let nextDuration = moment.duration(nextMoment.diff(currentMoment))
        nextBySameAuthor = next.author === current.author

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false
        }
      }

      messages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      )

      // Proceed to the next message.
      i += 1
    }

    return messages
  }

  render() {
    return (
      <div className='message-list'>
        <Toolbar
          title='Conversación'
          rightItems={[
            <ToolbarButton key='info' icon='ion-ios-information-circle-outline' />,
            <ToolbarButton key='video' icon='ion-ios-videocam' />,
            <ToolbarButton key='phone' icon='ion-ios-call' />
          ]}
        />

        <div className='message-list-container'>{this.renderMessages()}</div>

        <Compose
          rightItems={[
            <ToolbarButton key='photo' icon='ion-ios-camera' />,
            <ToolbarButton key='image' icon='ion-ios-image' />,
            <ToolbarButton key='audio' icon='ion-ios-mic' />,
            <ToolbarButton key='money' icon='ion-ios-card' />,
            <ToolbarButton key='games' icon='ion-logo-game-controller-b' />,
            <ToolbarButton key='emoji' icon='ion-ios-happy' />
          ]}
        />
      </div>
    )
  }
}
