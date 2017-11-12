import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/channelAction';
import ChannelSection from './../components/channels/ChennelSection.jsx';
import UserSection from './../components/users/UserSection.jsx';
import MessageSection from './../components/messages/MessageSection.jsx';

class AppContainer extends Component {

    render() {
        const { activeUser } = this.props.channelReducer;
        if(!activeUser){
          return (
            <UserSection 
              {...this.props} 
            />
          )
        }
        return (
          <div className="app room">
            <div className="nav" >
              <ChannelSection 
                {...this.props} 
              />
            </div>
            <MessageSection 
              {...this.props} 
            />
          </div>
        );
    }
}


function mapStateToProps({channelReducer} ) {
  return {channelReducer};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);