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

export function getChannelDetails(id){
    return dispatch => {
        return Rest.get(`${roomsUrl}/${id}`)
          .then(extractJSON)
          .then(res => {
            if (hasError(res)) {
              dispatch(showCustomError(res));
            } else {
                 dispatch(channelIsSet(res));
                 dispatch(getChannelMessages(id))
            }
          })
          .catch(err => {
            return dispatch(onServerError(err));
          });
      };
}

export function getChannelMessages(id){
    return dispatch => {
        return Rest.get(`${roomsUrl}/${id}/messages`)
          .then(extractJSON)
          .then(res => {
            if (hasError(res)) {
              dispatch(showCustomError(res));
            } else {
                 dispatch(messagesLoaded(res));
            }
          })
          .catch(err => {
            return dispatch(onServerError(err));
          });
      };
}


export function addMessage(id, request){
    let url = `${roomsUrl}/${id}/messages`;
    return dispatch => {
        return Rest.post(url, request)
          .then(extractJSON)
          .then(res => {
            if (hasError(res)) {
              dispatch(showCustomError(res));
            } else {
              dispatch(getChannelMessages(id))
            }
          })
          .catch(err => {
            return dispatch(onServerError(err));
          });
      };
}

export function addUser(request){
  return dispatch => {
      return dispatch(userAdded(request));
  }
}

function channelsLoaded(res){
    return {
        type: types.CHANNELS_LOADED,
        payLoad: res
    }
}

function messagesLoaded(res){
    return {
        type: types.MESSAGES_LOADED,
        payLoad: res
    }
}

function channelIsSet(res){
    return {
        type: types.CHANNEL_IS_SET,
        payLoad: res
    }
}

function userAdded(res){
  return {
      type: types.USER_ADDED,
      payLoad: res
  }
}