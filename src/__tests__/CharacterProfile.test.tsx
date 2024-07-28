import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CharacterProfile from '../pages/CharacterProfile';
import { fetchCharacter } from '../services/rickAndMortyApi';
import '@testing-library/jest-dom';


jest.mock('../services/rickAndMortyApi');

const mockCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  species: 'Human',
  gender: 'Male',
  status: 'Alive',
  origin: { name: 'Earth (C-137)' },
  location: { name: 'Earth (Replacement Dimension)' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
};

describe('CharacterProfile', () => {
  beforeEach(() => {
    (fetchCharacter as jest.Mock).mockResolvedValue(mockCharacter);
  });

  test('renders character profile', async () => {
    render(
        <MemoryRouter initialEntries={['/character/1']}>
          <Routes>
            <Route path="/character/:id" element={<CharacterProfile />} />
          </Routes>
        </MemoryRouter>
      );

    expect(await screen.findByText(/Rick Sanchez/)).toBeInTheDocument();
    expect(screen.getByText(/Human/)).toBeInTheDocument();
    expect(screen.getByText(/Male/)).toBeInTheDocument();
    expect(screen.getByText(/Alive/)).toBeInTheDocument();
    expect(screen.getByText(/Earth \(C-137\)/)).toBeInTheDocument();
    expect(screen.getByText(/Earth \(Replacement Dimension\)/)).toBeInTheDocument();
  });
});
