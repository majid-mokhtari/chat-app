import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Channel extends Component{
  onClick(e){
    e.preventDefault();
    const {setChannel, channel} = this.props;
    setChannel(channel);
  }
  render(){
    const {channel, activeChannel} = this.props;
    const active = channel.id === activeChannel.id ? 'active' : '';
    return (
      <li className={active} onClick={this.onClick.bind(this)}>
        {channel.name}
      </li>
    )
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default Channel