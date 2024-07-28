/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../services/rickAndMortyApi";
import { css } from "@emotion/react";
import Shimmer from "../components/ShimmerUI";

const profileStyle = css`
  text-align: center;
`;

const imageStyle = css`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const ulStyle = css`
  display: grid;
  justify-content: center;
  padding-left: 0px;
`;

// Function to extract episode number from the string of episodes
const extractEpisodeNumber = (url: string) => {
  const parts = url.split("/");
  return parts[parts.length - 1];
};

const CharacterProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Type guard to ensure 'id' is defined
      const getCharacter = async () => {
        try {
          const data = await fetchCharacter(id);
          setCharacter(data);
        } catch (error) {
          console.error("Failed to fetch character", error);
        }
      };
      getCharacter();
    }
  }, [id]);

  if (!character) { // if we don't have characters then show shimmer effect
    return <Shimmer cards={1}/>;
  }

  return (
    <div css={profileStyle}>
      <img src={character.image} alt={character.name} css={imageStyle} />
      <h1>{character.name}</h1>
      <p>
        <strong>Species:</strong> {character.species}
      </p>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      <p>
        <strong>Status:</strong> {character.status}
      </p>
      <p>
        <strong>Origin:</strong> {character.origin.name}
      </p>
      <p>
        <strong>Location:</strong> {character.location.name}
      </p>
      <h2>Episodes</h2>
      <ul css={ulStyle}>
        {character.episode.map((episode: string) => (
          <li key={episode}>Episode - {extractEpisodeNumber(episode)}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterProfile;
