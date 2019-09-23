import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <form 
                className="search_form"
                onSubmit={(e) => this.handleSubmit(e)}>
                <fieldset className='search'>
                    <label htmlFor='search'>Search: </label>
                    <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Title, Author, keyword, etc.'
                    value={this.props.query}
                    onChange={(e) => this.props.handleChange(e.target.value)}/>
                    <button 
                        type='submit'>
                            Submit
                    </button>
                </fieldset>
            </form>
        )
    }
}