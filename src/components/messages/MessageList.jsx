import React, {Component} from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';

class MessageList extends Component{
  render(){
    const { messages } = this.props;
    return (
      <ul>{
        messages.map( message =>{
          return <Message 
            message={message}
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