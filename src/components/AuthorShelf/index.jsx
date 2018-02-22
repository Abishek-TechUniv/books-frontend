import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';

import './AuthorShelf.css';

const AuthorShelf = ({ books, author }) => {
  const createBooks = () => books.map(book =>
    (<Book
      img="../../myImg.png"
      key={books.bookId}
      rating={book.rating}
      bookId={book.bookId}
      name={book.name}
      author={book.author}
      liked={book.liked}
    />));

  return (
    <div className="AuthorShelf-container">
      <div className="AuthorShelf-header">{author}</div>
      <div className="AuthorShelf-books-list">{createBooks()}</div>
    </div>
  );
};

AuthorShelf.propTypes = {
  author: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.objects).isRequired,
};
export default AuthorShelf;
