import React from "react";
import { connect } from 'react-redux';
import { getNewQuote, postNewQuote, tweetQuote } from '../redux/actions';
import { bindActionCreators } from 'redux';

class QuoteBox extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: '',
            author: ''
        };

        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleSubmit( event ) {
        this.setState( {
            text: event.target.text,
            author: event.target.author
        });
    }

    render() {
        return (
            <div id="quote-box">
                <p id="text">{this.state.text}</p>
                <p id="author">{this.state.author}</p>
                <button id="new-quote">New Quote</button>
                <a id="tweet-quote">Tweet Quote</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        text: state.text,
        author: state.author
    });
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({ getNewQuote, postNewQuote, tweetQuote }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )(QuoteBox)