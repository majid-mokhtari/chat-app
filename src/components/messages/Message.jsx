import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component{

  render(){
    const { message, activeUser } = this.props;
    if(!message) {
      return null;
    }
    if(message.name.toLowerCase() === activeUser.toLowerCase()){
      return (
        <li className="message-active-user">
          <div className="body">
            {message.message}
          </div>
        </li>
      )
    } else {
      return (
        <li className="message-user">
          <div className="body">
            {message.message}
          </div>
          <div className="author">
            {message.name}
          </div>
        </li>
      )
    }
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message