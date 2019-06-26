import "./ConversationList.css";

import React, { Component } from "react";

import ConversationListItem from "../ConversationListItem";
import ConversationSearch from "../ConversationSearch";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import axios from "axios";

export default class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
  }

  componentDidMount() {
    this.getConversations();
  }

  getConversations = () => {
    axios.get("https://randomuser.me/api/?results=8").then(response => {
      this.setState(prevState => {
        let conversations = response.data.results.map(result => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: "Hola"
          };
        });

        return { ...prevState, conversations };
      });
    });
  };

  render() {
    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {this.state.conversations.map(conversation => (
          <ConversationListItem key={conversation.name} data={conversation} />
        ))}
      </div>
    );
  }
}
