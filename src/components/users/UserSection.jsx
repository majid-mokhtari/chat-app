import React, {Component} from 'react';
import '../../styles/user.css';

class UserForm extends Component{
  constructor(props){
    super();
    this.state = {
      value: ""
    }
  }
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
            onChange={(e) => {this.setState({value: e.target.value})} }
          />
          <button className="btn btn-primary" disabled={this.state.value === ""}>
           Join the DoorDash Chat!
          </button>
        </div>
      </form>
      </div>
    )
  }
}


export default UserForm