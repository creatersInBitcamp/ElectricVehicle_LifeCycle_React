import { posts } from './data'
import axios from 'axios'

// types
const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN'
const RECEIVE_POSTS = 'RECEIVE_POSTS'
const RECEIVE_POST = 'RECEIVE_POST'
// actions
export const fetchPostsBegin = () => ({type: FETCH_POSTS_BEGIN })
export const receivePosts = posts => ({type: RECEIVE_POSTS, posts})
export const getAllPosts = () => {
    return axios.get(`http://localhost:8080/posts/findall`)
        .then( res => {
            receivePosts(res.data)
        })
        .catch( error => {
            throw(error)
        })
}
export const receivePost = post => ({type: RECEIVE_POST, post})
export const getOnePost = (postId) => {
    return axios.get(`http://localhost:8080/posts/findone/${postId}`)
        .then(res => {
            receivePost(res.data)
        })
        .catch( error => {
            throw (error)
        })
}
// reducer
export const boardReducer = (state=[], action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.data
        case RECEIVE_POST:
            return action.data
        default:
            return state
    }
}
export default boardReducer
