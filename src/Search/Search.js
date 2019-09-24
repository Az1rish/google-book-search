import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <form 
                className="search_form">
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
                        type='submit'
                        onSubmit={(e) => this.props.handleSubmit(e)}>
                            Submit
                    </button>
                </fieldset>
            </form>
        )
    }
}