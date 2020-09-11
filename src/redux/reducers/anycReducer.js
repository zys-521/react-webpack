import {REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_SUBREDDIT}  from '../actions/anycAction'

const init = {
    isLoading: false,
    data: null
}

export function anycActionReducer(state=init, action){
    const {type, subreddit} = action
    console.log(subreddit)
    switch(type){
        case REQUEST_POSTS:
            return Object.assign({}, state, subreddit);
        case RECEIVE_POSTS:
            return Object.assign({}, state, subreddit);
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, subreddit);
        default :
            return state;
    }
}