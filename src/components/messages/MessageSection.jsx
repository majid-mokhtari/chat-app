import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';


class MessageSection extends Component {
    
    addMessage(body){
      const { activeUser, activeChannel } = this.props.channelReducer;
      this.props.actions.addMessage(activeChannel.id, {name: activeUser, message: body});
    }

    renderUsers(users){
        return users.map((user, i) => {
            let comma = i !== users.length-1 ? ", " : "";
            return (
                <span key={i}>{`${user}${comma}`}</span>
            )
        });
    }

    render() {
        const { messages, activeChannel, activeUser } = this.props.channelReducer;
        const { name, users } = activeChannel;
        if(!name){
            return ( 
                <div className="default-message"> <span>Select a chat room</span></div>
            )
        }
        return (
            <div className='message-panel'>
                <div className='message-heading'>
                    <h3>{name}</h3>
                    <span style={{color: "red"}}>{`${activeUser}, `} </span>
                    {this.renderUsers(users)}
                </div>
                <div className='messages'>
                    <MessageList 
                        {...this.props} 
                        activeUser={activeUser}
                        messages={messages}
                    />
                    <MessageForm 
                        addMessage={this.addMessage.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default MessageSection;



