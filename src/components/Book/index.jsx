import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './Book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
    };
    this.propTypes = {
      name: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      key: PropTypes.string.isRequired,
      bookId: PropTypes.number.isRequired,
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
    const imageStyle = {
      width: '250px',
      position: 'absolute',
      clip: 'rect(0px, 250px,250px, 0px)',
    };
    const image = 'https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg';
    return (
      <div className="card" key={this.props.key}>
        <img src={image} alt="Avatar" style={imageStyle} />
        <div className="container">
          <i
            className={this.state.liked ? 'material-icons like liked' : 'material-icons like'}
            onClick={() => this.change(this.state.liked)}
          >favorite
          </i>
          <h4><b>{this.props.name}</b></h4>
          <p>
            <span className="rating">{this.props.rating}</span><span className="author">{this.props.author}</span>
          </p>
        </div>
      </div>);
  }
  
}



export default Book;
