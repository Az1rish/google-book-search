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
      filter: '',
      printType: 'all'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(userInput) {
    this.setState({
        query: userInput
    });
  }

  request() {
    const searchWord = this.state.query;

    const filter = this.state.filter !== '' 
      ? '&filter=' + this.state.filter 
      : '';

    const printType = '&printType=' + this.state.printType;

    const key = '&key=AIzaSyAcbVYDqYMoQ4oWJP-O2u_0Xf4j3rLtWPs';
    const url =  `https://www.googleapis.com/books/v1/volumes?q=` + searchWord + filter + printType+ key;
    const options = {
      method: 'GET',
      dataType: 'json',
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.request();
  }

  setFilter = (selected) => {
    this.setState({
      filter: selected
    }, () => this.request());
  }

  setPrintType = (selected) => {
    this.setState({
      printType: selected
    }, () => this.request());
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
          printType={selected => this.setPrintType(selected)}/>
        <BookList 
          books={this.state.books}/>
      </div>
    );
  }
}


