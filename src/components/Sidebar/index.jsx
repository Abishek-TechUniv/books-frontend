import React from 'react';

import './Sidebar.css';

const Sidebar = () => (
  <div className="Sidebar-container">
    <button className="Sidebar-home">Bs</button>
    <div className="Sidebar-lower">
      <i className="material-icons Sidebar-icon">refresh</i>
      <i className="material-icons Sidebar-icon">settings</i>
    </div>
  </div>
);

export default Sidebar;
