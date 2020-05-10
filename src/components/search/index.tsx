import React from 'react';

import './style.css';

const Search: React.FC = () => (
  <input
    className="search"
    placeholder="Digite o que está procurando..."
    type="text"
  />
);

export default Search;
