import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: 'More details' });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const pokemonName = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(pokemonName).toBeInTheDocument();
    expect(moreDetails).not.toBeInTheDocument();

    const summaryHeading = screen.getByRole('heading', { name: 'Summary' });
    expect(summaryHeading).toBeInTheDocument();

    const detailsParagraph = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(detailsParagraph).toBeInTheDocument();
  });

  it('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: 'More details' });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const locationHeading = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
    expect(locationHeading).toBeInTheDocument();

    /*  const pikachuFirstLocation = screen.getByText('Kanto Viridian Forest'); */
    const pikachuImage = screen.getAllByAltText('Pikachu location');
    expect(pikachuImage[0].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(pikachuImage[1].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: 'More details' });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const favoriteCheckBox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(favoriteCheckBox).toBeInTheDocument();
    fireEvent.click(favoriteCheckBox);
    expect(favoriteCheckBox.checked).toBe(true);
  });
});
