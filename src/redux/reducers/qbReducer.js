// import action creators
import { GET_NEW_QUOTE, TWEET_QUOTE } from "../actionTypes";

// import static array of quotes for initial quote on first load
import { quotes } from './quotes';

// function that returns initial state = some random quote from static array
const randomQuote = function() {
    const index = Math.floor( Math.random() * quotes.length );
    return ({
        text: quotes[index].text,
        author: quotes[index].author
    });
}

// set initial state to random quote in const variable
const initialState = randomQuote();

// quote box component reducer returns new state of new quote or returns current quote for tweeting
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_NEW_QUOTE: {            
            return randomQuote();
        }        
        case TWEET_QUOTE: {            
            return state;
        }
        default:
            return state;
    }
}