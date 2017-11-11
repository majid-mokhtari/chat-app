import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component{
  onSubmit(e){
    e.preventDefault();
    const node = this.refs.user;
    const userName = node.value;
    this.props.actions.addUser(userName);
    node.value = '';
  }
  render(){
    return (
     <div className="users">
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            placeholder='Type your user name...'
            type='text'
            ref='user'
          />
          <button className="btn btn-primary">
           Join the DoorDash Chat!
          </button>
        </div>
      </form>
      </div>
    )
  }
}

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired
}


export default UserForm