import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import BookList from './BookList/BookList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: ''
    };
  }


  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const options = {
      method: 'GET',
      headers: {
        "key": "AIzaSyAcbVYDqYMoQ4oWJP-O2u_0Xf4j3rLtWPs",
        "Content-type": "application/json",
        "q": {this.state.query}
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
  

  onSearch(search) {
    this.setState({
      query: search
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Search 
          onSearch={search => this.onSearch(search)}/>
        <Filter />
        <BookList 
          books={this.state.books}/>
      </div>
    );
  }
}


