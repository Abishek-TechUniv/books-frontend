import React from 'react';

import './Book.css';

class Book extends React.Component {
  render() {
    return (
      <div className="Book-container">
        <div>{this.props.name}</div>
        <div>{this.props.rating}</div>
        <div>{this.props.author}</div>
        <button className={this.props.liked ? 'Book-liked' : 'Book-not-liked'} onClick={() => console.log(this.props.liked)} />
      </div>
    );
  }
}

export default Book;
