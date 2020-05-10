import React from 'react';
import Search from '../../components/search';
import Checkbox from '../../components/checkbox';
import Button from '../../components/button';
import Card from '../../components/card';

import './style.css';

const Main: React.FC = () => (
  <>
    <h1>VUTTR</h1>
    <h2>Very Useful Tools to Remember</h2>
    <div className="group-search">
      <Search />
      <Checkbox />
      <Button />
    </div>
    <Card />
    <Card />
    <Card />
    <Card />
  </>
);

export default Main;
