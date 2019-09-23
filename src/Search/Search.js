import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <form className="search_form">
                <fieldset className='search'>
                    <label htmlFor='search'>Search: </label>
                    <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Title, Author, keyword, etc.'/>
                    <button 
                        type='submit'
                        onClick={e => this.props.onSearch(e.target.value)}>
                            Submit
                    </button>
                </fieldset>
            </form>
        )
    }
}