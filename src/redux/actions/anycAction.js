
export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit) {
  return {
    type: RECEIVE_POSTS,
    subreddit
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
 export function invalidateSubreddit(subreddit) {
   return {
     type: INVALIDATE_SUBREDDIT,
     subreddit
   }
 }

export function fetch(data){
    return function(dispatch) {
        dispatch(requestPosts({isLoading: true}));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({isLoading: false, data: {test:111}})  
            }, 3000)
        }).then(res => {
            dispatch(receivePosts(res));
        }).catch(err => {
            dispatch(invalidateSubreddit({isLoading: false}));
        })
    }
}
