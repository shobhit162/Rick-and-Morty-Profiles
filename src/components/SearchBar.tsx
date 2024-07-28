/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const searchBarStyle = css`
  display: flex;
  margin-bottom: 16px;
`;

const inputStyle = css`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const buttonStyle = css`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    onSearch(searchTerm);  // calling props fn which we got from parent component
  };

  return (
    <div css={searchBarStyle}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name"
        css={inputStyle}
        name="searchTerm"
        id='1'    // hardcoded, not a good approach but just to avoid warnings in the console
      />
      <button onClick={handleSearch} css={buttonStyle}>Search</button>
    </div>
  );
};

export default SearchBar;
