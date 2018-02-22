import React from 'react';

import './AuthorSelf.css';

const AuthorShelf = ({ key, books, author }) => {
  const createBooks = () => books;
  return (
    <div className="AuthorShelf-container">
      <div className="AuthorShelf-header">{author}</div>
    </div>
  );
};
export default AuthorShelf;
