import * as types from './../constants/types'

const initialState = {
    channels: [],
    activeChannel: {},
    messages: [],
    activeUser: ""
}

export function channelReducer(state = initialState, action){
    switch(action.type){
        case types.CHANNELS_LOADED:
        return {
            ...state,
            type: types.CHANNELS_LOADED,
            channels: action.payLoad
        }

        case types.CHANNEL_ADDED:
        const newChannels = state.channels.concat(action.payLoad)
        return {
            ...state,
            type: types.CHANNEL_ADDED,
            channels: newChannels
        }

        case types.USER_ADDED:
        return {
            ...state,
            type: types.USER_ADDED,
            activeUser: action.payLoad
        }

        case types.MESSAGES_LOADED:
        return {
            ...state,
            type: types.MESSAGES_LOADED,
            messages: action.payLoad
        }

        case types.MESSAGE_ADDED:
        const newMessages = state.messages.concat(action.payLoad)
        return {
            ...state,
            type: types.MESSAGE_ADDED,
            messages: newMessages
        }

        case types.CHANNEL_IS_SET:
        return {
            ...state,
            type: types.CHANNEL_IS_SET,
            activeChannel: action.payLoad,
            messages: []
        }

        default:
        return state;
    }
}