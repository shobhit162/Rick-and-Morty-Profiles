import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Characters from '../pages/Characters';
import { fetchCharacters } from '../services/rickAndMortyApi';
import '@testing-library/jest-dom';

jest.mock('../services/rickAndMortyApi');

const mockCharacters = {
  info: { pages: 1 },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      gender: 'Male',
      status: 'Alive',
      origin: { name: 'Earth (C-137)' },
      location: { name: 'Earth (Replacement Dimension)' },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
  ],
};

describe('Characters', () => {
  beforeEach(() => {
    (fetchCharacters as jest.Mock).mockResolvedValue(mockCharacters);
  });

  test('render shimmer UI when characters are empty', async () => {
    (fetchCharacters as jest.Mock).mockResolvedValueOnce({ info: { pages: 1 }, results: [] });
    await act(async () => {
      render(
        <MemoryRouter>
          <Characters />
        </MemoryRouter>
      );
    });
    expect(screen.getByTestId('shimmer')).toBeInTheDocument();
  });

  test('render character cards when characters are fetched', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Characters />
        </MemoryRouter>
      );
    });
    const characterName = await screen.findByText(/Rick Sanchez/);
    expect(characterName).toBeInTheDocument();
  });

  test('updates search term', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Characters />
        </MemoryRouter>
      );
    });

    const searchInput = screen.getByPlaceholderText('Search by name');
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Morty' } });
    });
    expect(searchInput).toHaveValue('Morty');

    const searchButton = screen.getByText('Search');
    await act(async () => {
      fireEvent.click(searchButton);
    });

    await waitFor(() => expect(searchInput).toHaveValue('Morty'));
  });
});
