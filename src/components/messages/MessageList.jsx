import React, {Component} from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';

class MessageList extends Component{
  componentDidUpdate(){
    var chatDiv = document.getElementsByClassName('message-container')[0];
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }
  render(){
    const { messages, activeUser } = this.props;
    return (
      <ul className="message-container">{
        messages.map( message =>{
          return <Message 
            message={message}
            activeUser={activeUser}
            key={message.id}
          />
        })
      }</ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList