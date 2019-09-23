import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
    render() {
        return (
            <form className='filter_form'>
                <label htmlFor='print'>Print type: </label>
                <select name='print' id='print'>
                    <option value='all'>All</option>
                    <option value='books'>books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                <label htmlFor='book'>Book type: </label>
                <select name='book' id='book'>
                    <option value='no_filter'>No filter</option>
                    <option value='partial'>Partial</option>
                    <option value='full'>Full</option>
                    <option value='free-ebooks'>Free ebooks</option>
                    <option value='paid-ebooks'>Paid ebooks</option>
                    <option value='ebook'>ebooks</option>
                </select>
            </form>
        )
    }
}