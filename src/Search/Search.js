import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
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
            <form className="search_form">
                <label htmlFor='search'>Search: </label>
                <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Title, Author, keyword, etc.'/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}