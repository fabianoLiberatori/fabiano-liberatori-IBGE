import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
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
