import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import App from '../App';
import NewsProvider from '../context/NewsProvider';
import { BrowserRouter } from 'react-router-dom';

describe('Testes de funcionalidade da app', () => {
  test('testando render', () => {
    render(
      <NewsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NewsProvider>
    )
    screen.debug();
  });

});
