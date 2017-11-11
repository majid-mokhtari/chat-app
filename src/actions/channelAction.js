import * as types from './../constants/types';
import { Rest } from '../lib/rest';
import {
    extractJSON,
    showCustomError,
    onServerError,
    hasError
} from '../lib/util';

let roomsUrl = "/rooms";

export function loadChannels() {
    return dispatch => {
        return Rest.get(roomsUrl)
          .then(extractJSON)
          .then(res => {
            if (hasError(res)) {
              dispatch(showCustomError(res));
            } else {
              dispatch(channelsLoaded(res));
            }
          })
          .catch(err => {
            return dispatch(onServerError(err));
          });
      };
}

export function addChannel(request){
    return dispatch => {
        return dispatch(channelAdded(request));
    }
}

export function loadUsers() {
    return dispatch => {
        return dispatch(usersLoaded([{id: 1, name: "Majid"}]));
    }
}

export function addUser(request){
    return dispatch => {
        return dispatch(userAdded(request));
    }
}

export function loadMessages() {
    return dispatch => {
        return dispatch(messagesLoaded([]));
    }
}

export function addMessage(res){
    return dispatch => {
        return dispatch(messageAdded(res));
    }
}

export function setChannel(res){
    return dispatch => {
        return dispatch(channelIsSet(res));
    }
}

function channelsLoaded(res){
    return {
        type: types.CHANNELS_LOADED,
        payLoad: res
    }
}

function channelAdded(res){
    return {
        type: types.CHANNEL_ADDED,
        payLoad: res
    }
}

function usersLoaded(res){
    return {
        type: types.USERS_LOADED,
        payLoad: res
    }
}

function userAdded(res){
    return {
        type: types.USER_ADDED,
        payLoad: res
    }
}

function messagesLoaded(res){
    return {
        type: types.MESSAGES_LOADED,
        payLoad: res
    }
}

function messageAdded(res){
    return {
        type: types.MESSAGE_ADDED,
        payLoad: res
    }
}

function channelIsSet(res){
    return {
        type: types.CHANNEL_IS_SET,
        payLoad: res
    }
}