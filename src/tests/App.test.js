import React from 'react';
import { screen/* , render */ } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const homeLink = screen.getByRole('link', { name: 'About' });
    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/about');
  });
});

// Referencia do course da Trybe. Dia 03. Testes no Router.
