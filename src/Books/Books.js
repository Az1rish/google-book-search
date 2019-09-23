import React, {Component} from 'react';
import './Books.css';

export default class Books extends Component {
    render() {
        return (
            <div className='book'>
                <div className='book_row'>
                    <div className='book_thumbnail'>
                        <img 
                            src={this.props.thumbnail}
                            alt={this.props.title}/>
                    </div>
                    <div className='book_info'>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.author}</p>
                        <p>{this.props.price}</p>
                        <p>{this.props.summary}</p>
                    </div>
                </div>
            </div>
        )
    }
}