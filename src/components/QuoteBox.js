// import react-redux dependancies
import React from "react";
import { connect } from 'react-redux';
// import action creators for mapDispatchToProps
import { getNewQuote, tweetQuote } from '../redux/actions';

// app's presentational component
class QuoteBox extends React.Component {
    constructor( props ) {
        super( props );        

        this.handleSubmit = this.handleSubmit.bind( this );
        this.getQuote = this.getQuote.bind( this );
        this.tweetString = this.tweetString.bind( this );
    }

    // tweet button listener
    handleSubmit() {                
        this.props.tweetQuote();        
    }
    
    // get new quote button listener
    getQuote() {        
        this.props.getNewQuote();
    }

    // stateless function to convert string to uri encoded string to append to url for tweet
    tweetString() {
        return encodeURIComponent( '"' + this.props.text + '" - ' + this.props.author );
    }

    render() {
        return (            
            <div id="quote-box" className="container-md">  {/* container div to wrap component, didn't like the comment before the div */}
                {/* quote and author p elements for displaying current quote and author contains left quote icon */}
                <p id="text"><i className="fas fa-quote-left fa-pull-left"></i>{this.props.text}</p>
                <p id="author">- {this.props.author}</p>
                {/* row wrapper to space buttons apart with bootstrap */}
                <div className="row justify-content-around">
                    {/* get new quote button */}
                  <button id="new-quote" className="col-5 btn btn-secondary btn-lg" onClick={this.getQuote}>New Quote</button>                
                  {/* tweet button with Twitter icon */}
                  <a 
                    id="tweet-quote" 
                    onClick={this.handleSubmit} 
                    className="twitter-share-button col-5 btn btn-primary btn-lg" 
                    href={`https://twitter.com/intent/tweet?text=${this.tweetString()}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Tweet this quote!"
                  ><i className="fab fa-twitter"></i>Tweet Quote</a>
                </div>
            </div>
        );
    }
}

// convert state from store to props to pass to components 
const mapStateToProps = state => {
    const content = Object.assign( {}, state );
    return content;
};

// connect dispatch to appropriate listener
const mapDispatchToProps = dispatch => {
    return {
        getNewQuote: () => dispatch( getNewQuote()),
        tweetQuote: () => dispatch( tweetQuote() )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(QuoteBox)