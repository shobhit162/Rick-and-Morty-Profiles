const API_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page = 1, search = '', filters = {}) => {
  const query = new URLSearchParams({
    page: page.toString(),
    name: search,
    ...filters,
  }).toString();

  const response = await fetch(`${API_URL}/character?${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return response.json();
};

export const fetchCharacter = async (id: string) => {
  const response = await fetch(`${API_URL}/character/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch character');
  }
  return response.json();
};
