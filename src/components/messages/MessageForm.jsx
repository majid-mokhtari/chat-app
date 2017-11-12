import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component{

  onSubmit(e){
    e.preventDefault();
    const node = this.refs.message;
    const message = node.value;
    if(message || message !== ""){
      console.log(message)
      this.props.addMessage(message);
    }
    node.value = '';
  }

  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-row">
            <div className="col-xs-11">
              <input 
                className='form-control'
                placeholder='Type a message...'
                type='text'
                ref='message'
              />
            </div>
            <div className="col-xs-1">
              <button className="btn btn-primary send-button">
              Send
              </button>
            </div>
        </div> 
      </form>
    )
  }
}

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired
}


export default MessageForm