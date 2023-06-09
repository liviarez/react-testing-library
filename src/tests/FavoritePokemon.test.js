import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';

describe('Testa o componente <FavoritePokemon.js />', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<FavoritePokemon />);
    const notFoundPokemon = screen.getByText('No favorite Pokémon found');
    expect(notFoundPokemon).toBeInTheDocument();
  });

  it('Teste se apenas são exibidos os Pokémon favoritados.', () => {
  });
});
