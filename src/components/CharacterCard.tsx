/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

interface CharacterCardProps {
  character: any;
}

const cardStyle = css`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: #EEEDEB;
`;

const imageStyle = css`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const buttonStyle = css`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #7c7651;
  color: white;
  cursor: pointer;
`;

const linkStyle = css`
  color: white;
  text-decoration: none;
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div css={cardStyle}>
      <img src={character.image} alt={character.name} css={imageStyle} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <button css={buttonStyle}>
        <Link to={`/character/${character.id}`} css={linkStyle}>View Profile</Link>
      </button>
    </div>
  );
};

export default CharacterCard;
