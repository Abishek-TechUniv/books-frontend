import React from 'react';

import Sidebar from '../Sidebar';
import Content from '../Content';
import Header from '../Header';


import './App.css';

const App = () => (
  <div className="App-container">
    <Sidebar />
    <div>
    <Header>
      <h2>The <span className="Header-main-text">Book</span> Shelf</h2>
    </Header>
    <Content />
    </div>
  </div>
);

export default App;
