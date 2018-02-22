import React from 'react';

import Book from '../Book';

import './AuthorSelf.css';

const AuthorShelf = ({ books, author }) => {
  const createBooks = () => books.map(book =>
    (<Book
      img="../../myImg.png"
      key={books.bookId}
      rating={book.rating}
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
export default AuthorShelf;
