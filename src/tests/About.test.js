import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testa o componente <About.js />', () => {
  it('Teste se a página contém as informações sobre a Pokédex;', () => {
    renderWithRouter(<About />);

    const homeContent = 'About Pokédex';
    const homeInfo = screen.getByRole('heading', homeContent);
    expect(homeInfo).toHaveTextContent(homeContent);
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const homeTitle = screen.getByRole('heading', 'About Pokédex');
    expect(homeTitle).toBeInTheDocument();
    expect(homeTitle.tagName).toBe('H2');
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    renderWithRouter(<About />);

    const paragraph01 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    const paragraph02 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');

    expect(paragraph01).toBeInTheDocument();
    expect(paragraph02).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
    renderWithRouter(<About />);

    const image = screen.getByRole('img');
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
