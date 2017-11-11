import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component{
  render(){
    const {message} = this.props;
    return (
      <li className="message">
        <div className="author">
          <strong>{message.name}</strong>
        </div>
        <div className="body">
          {message.message}
        </div>
      </li>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message