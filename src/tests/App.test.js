import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente <App.js />', () => {
  it('Teste se a aplicação é redirecionada para a página de Home', () => {
    // cria um historico de navegacao
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/');
  });

  it('Teste se a aplicação é redirecionada para a página de About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);

    expect(history.location.pathname).toBe('/about');
  });

  it('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados', () => {
    const { history } = renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(favoriteLink).toBeInTheDocument();

    userEvent.click(favoriteLink);

    expect(history.location.pathname).toBe('/favorites');
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pagina/que-nao-existe/');
    });

    const notFoundTitle = screen.getByRole('heading', { level: 2 });
    expect(notFoundTitle).toHaveTextContent('Page requested not found');
  });
});

// Referencia do course da Trybe. Dia 03. Escrevendo os testes da aplicacao.
