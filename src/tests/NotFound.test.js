import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Testa o componente <NotFound.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found;', () => {
    renderWithRouter(<NotFound />);

    const notFoundText = screen.getByRole('heading', 'Page requested not found');
    expect(notFoundText).toBeInTheDocument();
    expect(notFoundText.tagName).toBe('H2');
    // const notFoundText = screen.getByRole('heading', {line: 2});
  });

  it('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByRole('img');
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
