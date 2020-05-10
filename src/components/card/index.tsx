import React from 'react';

import './style.css';

interface Props {
  description: string;
  link: string;
  tags: [string];
  title: string;
}

const Card: React.FC<Props> = ({ description, link, tags, title }: Props) => {
  return (
    <div className="card">
      <div className="card-title">
        <a href={link}>{title}</a>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
      <div className="card-tags">
        {tags.map(tag => (
          <span key={tag} className="card-tag">
            {tag} x
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
