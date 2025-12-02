import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o menu Home', () => {
  render(<App />);
  // Procura por um texto que REALMENTE existe no seu site agora
  const linkElement = screen.getByText(/HOME/i); 
  expect(linkElement).toBeInTheDocument();
});
