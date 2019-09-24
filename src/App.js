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
      query: '',
      filter: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(userInput) {
    this.setState({
        query: userInput
    });
  }

  setFilter(selected) {
    this.setState({
      selected
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchWord = this.state.query;
    console.log(searchWord);

    const filter = this.state.filter !== '' 
      ? '&filter=' + this.state.filter 
      : '';
    console.log(filter);

    const url =  `https://www.googleapis.com/books/v1/volumes?key=AIzaSyAcbVYDqYMoQ4oWJP-O2u_0Xf4j3rLtWPs&q=` + searchWord + filter;
    const options = {
      method: 'GET',
      dataType: 'json'
    };
    console.log(url);
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        this.setState({
          books: data.items,
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
        <Search 
          query={this.state.query}
          handleSubmit={e => this.handleSubmit(e)}
          handleChange={userInput => this.handleChange(userInput)}/>
        <Filter 
          bookType={selected => this.setFilter(selected)}
          />
        <BookList 
          books={this.state.books}/>
      </div>
    );
  }
}


