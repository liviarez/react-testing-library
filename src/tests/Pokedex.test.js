import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

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
  });

  it('Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /próximo pokémon/i });

    pokemonList.forEach((pokemon, index) => {
      const pokemonName = screen.getByText(pokemon.name);
      expect(pokemonName).toBeInTheDocument();

      act(() => {
        userEvent.click(button);
      });

      // Verify that the next Pokémon is displayed
      if (index < pokemonList.length - 1) {
        const nextPokemonName = screen.getByText(pokemonList[index + 1].name);
        expect(nextPokemonName).toBeInTheDocument();
      }
    });
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole(
      'button',
      { name: /all/i },
    )).not.toHaveAttribute('data-testid', 'pokemon-type-button');

    expect(screen.getByRole(
      'button',
      { name: /electric/i },
    )).toHaveAttribute('data-testid', 'pokemon-type-button');
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByText(/Pikachu/i);
    const allButton = screen.getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);
    expect(pokemonName).toBeInTheDocument();
  });
});
