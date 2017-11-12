import React, { Component } from 'react';
import ChannelList from './ChannelList';

let seconds = 0,
    minutes = 0;

class ChannelSection extends Component {

    constructor(){
        super();
        this.state = {
            timer: 1
        }
    }

    componentWillMount(){
        this.props.actions.loadChannels();
    }

    setChannel(activeChannel){
        const { id } = activeChannel;
        this.props.actions.getChannelDetails(id);
    }

    tick(){
        seconds++;
        if(seconds >= 60){
            seconds = 0;
            minutes++;
            this.setState({timer: minutes})
        }
    }

    componentDidMount(){
        setInterval(this.tick.bind(this), 1000);
    }

    render() {
        const { channels, activeChannel, activeUser } = this.props.channelReducer;
        return (
            <div className='support'>
                <h3>{activeUser}</h3>
                <span>{`Online for ${this.state.timer} minutes`}</span>
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