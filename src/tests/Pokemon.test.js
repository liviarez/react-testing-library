import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import { Pokemon } from '../components';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');

    const pokemonWeigth = screen.getByTestId('pokemon-weight');
    expect(pokemonWeigth.textContent).toEqual('Average weight: 6.0 kg');

    const pokemonImg = screen.getByRole('img', { name: /pikachu sprite/i });
    const img = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png';
    expect(pokemonImg).toHaveAttribute('src', img);
  });

  it('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    expect(history.location.pathname).toBe('/pokemon/25');
  });

  it('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const favoritePokemon = screen.getByRole('checkbox');
    userEvent.click(favoritePokemon);

    const checkedFavorite = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(checkedFavorite.src).toBe('http://localhost/star-icon.svg');
  });
});
