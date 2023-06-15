import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import { FavoritePokemon } from '../pages';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it(
    'Testa se é exibida na tela a mensagem No favorite pokemon found',
    () => {
      renderWithRouter(<FavoritePokemon />);

      const defaultFavoriteText = screen.getByText('No favorite Pokémon found');
      expect(defaultFavoriteText).toBeInTheDocument();
    },
  );

  it(
    'Teste se apenas são exibidos os Pokémon favoritados.',
    () => {
      renderWithRouter(<App />);

      const details = screen.getByRole('link', { name: 'More details' });

      userEvent.click(details);
      const favoritePokemonChecckbox = screen
        .getByRole('checkbox', { name: /pokémon favoritado/i });

      userEvent.click(favoritePokemonChecckbox);

      const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
      userEvent.click(favoriteLink);

      const pokemon = screen.getByText(/pikachu/i);

      expect(pokemon).toBeInTheDocument();
      expect(screen.queryByText(/No favorite Pokémon found/i)).not.toBeInTheDocument();
    },
  );
});
