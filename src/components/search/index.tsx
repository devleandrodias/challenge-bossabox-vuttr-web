import React from 'react';
import { GrSearch } from 'react-icons/gr';
import { Wrapper, Input } from './style';

const Search: React.FC = () => (
  <Wrapper>
    <GrSearch size={20} cursor="pointer" />
    <Input type="text" placeholder="Digite o que está procurando..." />
  </Wrapper>
);

export default Search;
