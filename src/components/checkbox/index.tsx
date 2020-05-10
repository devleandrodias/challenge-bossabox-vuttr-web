import React from 'react';

import './style.css';

const Checkbox: React.FC = () => (
  <div className="search-check">
    <input type="checkbox" />
    <span>search in tags only</span>
  </div>
);

export default Checkbox;
