import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';

describe('Testa o componente <PokemonDetails.js />', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<About />);
    const notFoundPokemon = screen.getByText('No favorite pokemon found');
    expect(notFoundPokemon).toBeInTheDocument();
  });

  it('Teste se apenas são exibidos os Pokémon favoritados.', () => {
  });
});
