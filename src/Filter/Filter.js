import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
    changeBookType(value) {
        console.log(value);
        if(value==="no_filter") {
            this.props.bookType('');
        } else {
            this.props.bookType(value);
        }
    }
    render() {
        return (
            <form className='filter_form'>
                <fieldset className='print'>
                <label htmlFor='print'>Print type: </label>
                <select name='print' id='print'>
                    <option value='all'>All</option>
                    <option value='books'>books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                </fieldset>
                <fieldset className='book'>
                    <label htmlFor='book'>Book type: </label>
                    <select 
                        name='book' 
                        id='book'
                        onChange={(e) => this.changeBookType(e.target.value)}>
                        <option value='no_filter'>No filter</option>
                        <option value='partial'>Partial</option>
                        <option value='full'>Full</option>
                        <option value='free-ebooks'>Free ebooks</option>
                        <option value='paid-ebooks'>Paid ebooks</option>
                        <option value='ebooks'>ebooks</option>
                    </select>
                </fieldset>
            </form>
        )
    }
}