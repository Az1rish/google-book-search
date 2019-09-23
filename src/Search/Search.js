import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
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