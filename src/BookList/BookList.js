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
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                price={book.saleInfo.retailPrice ? '$' + book.saleInfo.retailPrice.amount : "Not available"}
                summary={book.searchInfo ? book.searchInfo.textSnippet : "Sorry no summary"}/>
            );
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