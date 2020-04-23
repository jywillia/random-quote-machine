// import action type constants
import { GET_NEW_QUOTE, TWEET_QUOTE } from './actionTypes';

// get new quote action creator
export const getNewQuote = () => ({
    type: GET_NEW_QUOTE
})

// tweet current quote action creator
export const tweetQuote = () => ({
    type: TWEET_QUOTE    
})