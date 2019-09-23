import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(userInput) {
        this.setState({
            value: userInput
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const searchWord = this.state.value;
        console.log(searchWord);
    }
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
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e.target.value)}/>
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