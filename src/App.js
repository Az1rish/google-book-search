import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import BookList from './BookList/BookList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    const key = "AIzaSyAcbVYDqYMoQ4oWJP-O2u_0Xf4j3rLtWPs";
    const url = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    const options = {
      method: 'GET',
      headers: {
        "key": key,
        "Content-type": "application/json"
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Search />
        <Filter />
        <BookList />
      </div>
    );
  }
}


