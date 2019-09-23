import React, { Component } from 'react';
import './BookList.css';
import Books from '../Books/Books';

export default class BookList extends Component {
    render() {
        const books = this
            .props
            .books
            .map((book, i) => <Books {...book} key={i}/>);
        return (
            <div className='booklist'>
                {books}
            </div>
        );
    }
}

BookList.defaultProps = {
    books: []
};