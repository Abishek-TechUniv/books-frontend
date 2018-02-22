import PropTypes from 'prop-types';
import React from 'react';
import './Header.css';

const Header = props => (
  <div className="Header">
    {props.children}
  </div>
);

Header.propTypes = {
  children: PropTypes.string,
};

Header.defaultProps = {
  children: 'The Book Shelf',
};

export default Header;
