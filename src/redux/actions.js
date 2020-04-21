import { GET_NEW_QUOTE, POST_NEW_QUOTE, TWEET_QUOTE } from './actionTypes';

export const getNewQuote = () => ({
    type: GET_NEW_QUOTE
})

export const postNewQuote = content => ({
    type: POST_NEW_QUOTE,
    payload: {
        text: content.text,
        author: content.author
    }
})

export const tweetQuote = content => ({
    type: TWEET_QUOTE,
    payload: {
        text: content.text,
        author: content.author
    }
})