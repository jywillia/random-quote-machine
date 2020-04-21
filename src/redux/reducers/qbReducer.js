import { GET_NEW_QUOTE, POST_NEW_QUOTE, TWEET_QUOTE } from "../actionTypes";

const initialState = {
    text = "Do or do not, there is no try.",
    author = "Yoda"
};

export default function( state = initialState, action ) {
    switch ( action.type ) {
        case GET_NEW_QUOTE: {
            const { quote, writer } = action.payload;
            return {
                text: quote,
                author: writer
            };
        }
        case POST_NEW_QUOTE: {
            const { quote, writer } = action.payload;
            return {
                text: quote,
                author: writer
            };
        }
        case TWEET_QUOTE: {
            const { quote, writer } = action.payload;
            return {
                text: quote,
                author: writer
            };
        }
        default:
            return state;
    }
}