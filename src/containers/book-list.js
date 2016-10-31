import React, { Component } from 'react';

import { connect } from 'react-redux'; // connect function from react-redux

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => { <li key = { book.title }
            className = "list-group-item" > { book.title } </li>
        });
    }

    render() {
        return <ul className = "listgroup col-sm-4" > { this.renderList() } </ul>;
    }
}

function mapStateToProps (state) {
    // Whatever gets returned from here will show up as props
    // inside of BookList

    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);
// connect takes a function and component to make a container
// This is the glue between redux and react in our application
// -- Whenever the app state changes the other objects in the 
//    state function become rendered as props