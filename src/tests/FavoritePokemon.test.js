/* import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';

describe('Testa o componente <FavoritePokemon.js />', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    const { history } = renderWithRouter(<FavoritePokemon />);
    const notFoundPokemon = screen.getByRole('function', { name: 'isEmpty' });
    expect(notFoundPokemon).toBeInTheDocument();
    expect(history.location.pathname).toBe('/FavoritePokemon');
  });

  it('Teste se apenas são exibidos os Pokémon favoritados.', () => {
  });
});
 */
