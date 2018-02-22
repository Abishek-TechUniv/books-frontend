import React from 'react';
import axios from 'axios';

import './Book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
    };
  }

  change = (liked) => {
    const url = `/books/${this.props.bookId}`;
    const postUrl = this.state.liked ? `${url}/dislike` : `${url}/like`;
    axios.post(postUrl).then(() => {
      this.setState({
        liked: !liked,
      });
    });
  }
  render() {
    return (
      <div className="Book-container">
        <div>{this.props.name}</div>
        <div>{this.props.rating}</div>
        <div>{this.props.author}</div>
        <button className={this.state.liked ? 'Book-liked' : 'Book-not-liked'} onClick={() => this.change(this.state.liked)}>+</button>
      </div>
    );
  }
}

export default Book;
