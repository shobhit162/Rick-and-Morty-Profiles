/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../services/rickAndMortyApi";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";
import { css } from "@emotion/react";
import Shimmer from "../components/ShimmerUI";

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const paginationStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const buttonStyle = css`
  padding: 8px 16px;
  margin: 0 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters(page, searchTerm, filters);
        setCharacters(data.results);
        setLastPage(data.info.pages);
      } catch (error) {
        console.error("Failed to fetch characters", error);
      }
    };
    setCharacters([]); // for shimmer effect, when we change the page we need to empty characters array
    getCharacters();
  }, [page, searchTerm, filters]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <FilterMenu onFilterChange={setFilters} />
      {characters?.length === 0 && <Shimmer cards={20} />}
      {characters?.length !== 0 && (
        <div css={gridStyle}>
          {characters.map((character: any) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
      <div css={paginationStyle}>
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          css={buttonStyle}
        >
          First
        </button>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          css={buttonStyle}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}
          css={buttonStyle}
        >
          Next
        </button>
        <button
          onClick={() => setPage(lastPage)}
          disabled={page === lastPage}
          css={buttonStyle}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Characters;
