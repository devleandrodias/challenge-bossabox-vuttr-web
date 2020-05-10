import React from 'react';

import './style.css';

const Card: React.FC = () => (
  <div className="card">
    <div className="card-title">
      <a href="https://notion.so">Notion</a>
    </div>
    <div className="card-description">
      <p>
        All in one tool to organize teams and ideas. Write, plan, collaborate,
        and get organized.
      </p>
    </div>
    <div className="card-tags">
      <span className="card-tag">organization x</span>
      <span className="card-tag">planning x</span>
      <span className="card-tag">collaboration x</span>
      <span className="card-tag">writing x</span>
      <span className="card-tag">calendar x</span>
    </div>
  </div>
);

export default Card;
