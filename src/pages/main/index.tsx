import React, { useEffect, useState } from 'react';
import Search from '../../components/search';
import Checkbox from '../../components/checkbox';
import Button from '../../components/button';
import Card from '../../components/card';
import api from '../../services/api';

import './style.css';

interface Result {
  message: string;
  success: boolean;
  data: Tool[];
  error: string;
}

interface Tool {
  _id: string;
  description: string;
  link: string;
  tags: [string];
  title: string;
}

const Main: React.FC = () => {
  const [tools, setTools] = useState<Result | null>(null);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('tools');
      const tool: Result = response.data;

      setTools(tool);
    }

    loadTools();
  }, []);

  return (
    <>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <div className="group-search">
        <Search />
        <Checkbox />
        <Button />
      </div>
      {tools ? (
        tools.data.map(tool => (
          <Card
            key={tool._id}
            title={tool.title}
            tags={tool.tags}
            description={tool.description}
            link={tool.link}
          />
        ))
      ) : (
        <h1>Carregando</h1>
      )}
    </>
  );
};

export default Main;
