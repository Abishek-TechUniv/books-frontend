import React from 'react';
import axios from 'axios';
import AuthorShelf from '../AuthorShelf';

import './Content.css';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: {},
    };
  }

  componentDidMount = () => {
    axios.get('/books/all')
      .then((booksArr) => {
        const group = {};
        booksArr.data.forEach((elem) => {
          if (group[elem.author] === undefined) {
            group[elem.author] = [elem];
          } else {
            group[elem.author].push(elem);
          }
        });
        this.setState({ library: group });
      });
  }

  createSections = () => {
    const sections = [];
    Object.keys(this.state.library).forEach((author) => {
      sections.push(<AuthorShelf
        key={author}
        books={this.state.library[author]}
        author={author}
      />);
    });
    return sections;
  }


  importLibrary = () => {
    axios.post('/books');
    axios.get('/books/all')
      .then((booksArr) => {
        const group = {};
        booksArr.data.forEach((elem) => {
          if (group[elem.author] === undefined) {
            group[elem.author] = [elem];
          } else {
            group[elem.author].push(elem);
          }
        });
        this.setState({ library: group });
      });
  }
  render = () => {
    if (Object.keys(this.state.library).length > 0) {
      return <div className="Content Content-section-container">{this.createSections()}</div>;
    }
    return (
      <div className="Content">
        <div className="Content-not-found">
          <p>Oops! No Book Found!</p>
          <br />
          <p>Import them now?</p>
          <i className="material-icons Content-image-large" onClick={() => this.importLibrary()}>refresh</i>
        </div>
      </div>);
  }
}
export default Content;
