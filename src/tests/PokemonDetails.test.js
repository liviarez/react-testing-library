/* import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';
import App from '../App';

describe('Testa o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: 'More details' });
    userEvent.click(details);

    const pokemonName = screen.getByText(`${pokemonList[0].name} Details`);
    expect(pokemonName).toBeInTheDocument();

    const summaryHeading = screen.getByRole('heading', { level: 2 });
    expect(summaryHeading).toHaveTextContent('Summary');

    const detailsParagraph = screen.getByText(`${pokemonList[0].summary}`);
    expect(detailsParagraph).toHaveTextContent('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
  });

  it('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: 'More details' });
    userEvent.click(details);

    const summaryHeading = screen.getByRole('heading', { level: 2 });
    expect(summaryHeading).toHaveTextContent('Summary');

    const name = screen.getByTestId('pokemon-name');
    expect(name).toBeInTheDocument();
  });
});
 */
