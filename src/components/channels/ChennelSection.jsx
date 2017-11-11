import React, { Component } from 'react';
import ChannelList from './ChannelList';


class ChannelSection extends Component {

    componentWillMount(){
        this.props.actions.loadChannels();
    }

    setChannel(activeChannel){
        const { id } = activeChannel;
        this.props.actions.getChannelDetails(id);
    }

    render() {
        const { channels, activeChannel, activeUser } = this.props.channelReducer;
        return (
            <div className='support'>
                <h3>{activeUser}</h3>
                <span>Online for 12 minutes</span>
                <div className='channels'>
                    <ChannelList 
                        {...this.props} 
                        channels={channels}
                        activeChannel={activeChannel}
                        setChannel={this.setChannel.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default ChannelSection;



