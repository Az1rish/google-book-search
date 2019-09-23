import React, { Component } from 'react';
import './BookList.css';
import Books from '../Books/Books';

export default class BookList extends Component {
    render() {
        const books = this
            .props
            .books
            .map((book, i) => <Books
                key={i}
                thumbnail={book.items.volumeInfo.imageLinks.thumbnail}
                title={book.items.volumeInfo.title}
                author={book.items.volumeInfo.authors}
                price={book.items.saleInfo.retailPrice.amount}
                summary={book.items.searchInfo.textSnippet}/>);
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