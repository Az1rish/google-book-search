import React, { Component } from 'react';
import './BookList.css';
import Books from '../Books/Books';

export default class BookList extends Component {
    render() {
        console.log(this.props.books)
        const books = this
            .props
            .books
            .map((book, i) => <Books
                key={i}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                price={book.saleInfo.retailPrice.amount}
                summary={book.searchInfo.textSnippet}/>);
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