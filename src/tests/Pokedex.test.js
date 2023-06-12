import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
/* import { Pokedex } from '../pages'; */
import App from '../App';
import { Pokedex } from '../pages';

/* describe('Testa o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon;', () => {
    renderWithRouter(<App />);

    const ecounteredTitle = screen.getByRole('heading', { level: 2 });
    expect(ecounteredTitle).toHaveTextContent('Encountered Pokémon');
  });
}); */

describe('Testa o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon;', () => {
    renderWithRouter(<App />);

    const ecounteredTitle = screen.getByRole('heading', { level: 2 });
    expect(ecounteredTitle).toHaveTextContent('Encountered Pokémon');
  });

  it('O botão deve conter o texto Próximo Pokémon;', () => {
    renderWithRouter(<App />);

    const nextPokemonButton = screen.getByRole('button', { name: 'Próximo Pokémon' });
    expect(nextPokemonButton).toBeInTheDocument();
  /*   userEvent.click(nextPokemonButton); */
  });

  it('Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão', () => {
    renderWithRouter(<Pokedex />);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<Pokedex />);
  });
});
