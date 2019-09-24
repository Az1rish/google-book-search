import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import BookList from './BookList/BookList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
        items: {
          volumeInfo: {
            title: 'Generic Title',
            authors: "Generic Author",
            imageLinks: {
              thumbnail: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiV8pmTsufkAhVHnp4KHSfmARYQjRx6BAgBEAQ&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree&psig=AOvVaw041MAFfJItzJcC2UkD5xjG&ust=1569343465164023'
            },
          },
          saleInfo: {
            retailPrice: {
              amount: '50.0'
            }
          },
          searchInfo: {
            textSnippet: "Generic summary"
          }
        }
      }],
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(userInput) {
    this.setState({
        query: userInput
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchWord = this.state.query;
    console.log(searchWord);
    const url = `https://cors-anywhere.herokuapp.com/www.googleapis.com/books/v1/volumes?key=AIzaSyAcbVYDqYMoQ4oWJP-O2u_0Xf4j3rLtWPs&q=` + searchWord;
    const options = {
      method: 'GET',
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
        <Search 
          query={this.state.query}
          handleSubmit={e => this.handleSubmit(e)}
          handleChange={userInput => this.handleChange(userInput)}/>
        <Filter />
        <BookList 
          books={this.state.books}/>
      </div>
    );
  }
}


