import React, { Component } from 'react';
import ChannelList from './ChannelList';


class ChannelSection extends Component {

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
                    />
                </div>
            </div>
        )
    }
}

export default ChannelSection;



