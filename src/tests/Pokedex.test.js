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

    const allButton = screen.getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);

    const buttonPokemonType = screen.getAllByTestId('pokemon-type-button');
    expect(buttonPokemonType).toHaveLength(7);

    userEvent.click(buttonPokemonType[0]);

    const eletricPokemon = screen.getByText('Pikachu');
    expect(eletricPokemon).toBeInTheDocument();

    userEvent.click(buttonPokemonType[1]);
    const firePokemon = screen.getByText('Charmander');
    expect(firePokemon).toBeInTheDocument();

    const nextPokemonName = screen.getByRole('button', { name: 'Próximo Pokémon' });
    userEvent.click(nextPokemonName);
    const rapidash = screen.getByText('Rapidash');
    expect(rapidash).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);
  });
});
