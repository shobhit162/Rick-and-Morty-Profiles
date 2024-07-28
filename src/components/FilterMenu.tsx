/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface FilterMenuProps {
  onFilterChange: (filters: any) => void;
}

const filterMenuStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
`;

const selectStyle = css`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = React.useState({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value }; // used spread operator as we can have multiple filters and we need to store previous one also.
    setFilters(newFilters);
    onFilterChange(newFilters);  // calling props fn which we got from parent component
  };

  return (
    <div css={filterMenuStyle}>
      <select name="status" onChange={handleChange} css={selectStyle} aria-label="All Status">
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select name="species" onChange={handleChange} css={selectStyle} aria-label="All Species">
        <option value="">All Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
      <select name="gender" onChange={handleChange} css={selectStyle} aria-label="All Genders">
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default FilterMenu;
