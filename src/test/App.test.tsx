import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import { describe, test, vi } from 'vitest';
import App from '../App';
import NewsProvider from '../context/NewsProvider';
import { BrowserRouter } from 'react-router-dom';
import MockApiParse from '../services/MockApiParse.json'
import { favoriteLatest } from '../services/MockFavoriteLatest';
import '@testing-library/jest-dom';

describe('Testes de funcionalidade da app', () => {

  test('testando render do latestNews', async () => {
    
  vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => MockApiParse,
    } as Response);

  localStorage.setItem('favorite', JSON.stringify(favoriteLatest));

  render(
    <NewsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NewsProvider>
  );
  
  expect(await screen.findByTestId('dias-corridos')).toBeInTheDocument();
  await useEvent.click(screen.getByTestId('imgheart'));
  expect(screen.getByTestId('dias-corridos')).toBeInTheDocument();
  await useEvent.click(screen.getByTestId('imgheart'));
  expect(screen.getByText(/IBGE realiza mais de 70/i)).toBeInTheDocument();
  await useEvent.click(screen.getByTestId('imgheart'));

  });

  test('testando render do Placeholder', async () => {
    
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        json: async () => MockApiParse,
      } as Response);
  
    render(
      <NewsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NewsProvider>
    );
    
    expect(await screen.findByTestId('imgheart')).toBeInTheDocument();
    await useEvent.click(screen.getByTestId('release'));
    expect(screen.getByText(/Finanças públicas:/i)).toBeInTheDocument();
    await useEvent.click(screen.getByTestId('noticia'));
    expect(screen.getByText(/IBGE avalia os registros de dados/i)).toBeInTheDocument();
    await useEvent.click(screen.getByTestId('favorita'));
    expect(screen.getByText(/Sem favoritos marcados/i)).toBeInTheDocument();
    await useEvent.click(screen.getByTestId('mais-recentes'));
    expect(screen.getByText(/IBGE avalia os registros de dados/i)).toBeInTheDocument();
  
  });

  test('testando render do NewsCard', async () => {
    const newsID = [
      38420,
      38419,
      38416,
      38415,
      38409,
      38404,
      38398,
      38394,
      38388,
      38420,
      38419,
      38416,
      38415,
      38409,
      38404,
      38398,
      38394,
      38388
    ];
    
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
         json: async () => MockApiParse,
       } as Response);
  
     render(
       <NewsProvider>
         <BrowserRouter>
          <App />
        </BrowserRouter>
       </NewsProvider>
    );

    expect(await screen.findByTestId('imgheart')).toBeInTheDocument();
    await useEvent.click(screen.getByTestId(`favorite${newsID[0]}`));
    await useEvent.click(screen.getByTestId(`favorite${newsID[4]}`));
    await useEvent.click(screen.getByTestId(`favorite${newsID[0]}`));
    await useEvent.click(screen.getByTestId(`favorite${newsID[4]}`));
    
    });

    test('testando render do home', async () => {
  
      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
           json: async () => MockApiParse,
         } as Response);
    
       render(
         <NewsProvider>
           <BrowserRouter>
            <App />
          </BrowserRouter>
         </NewsProvider>
      );
       
      expect(await screen.findByTestId('imgheart')).toBeInTheDocument();
      await useEvent.click(screen.getByTestId('release'));
      await useEvent.type(screen.getByPlaceholderText('Pesquisar por titulo'), 'fin');
      expect(screen.getAllByTestId('card')).toHaveLength(1);
      await useEvent.clear(screen.getByPlaceholderText('Pesquisar por titulo'));
      expect(screen.getAllByTestId('card')).toHaveLength(29);

      });

});
