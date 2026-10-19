import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the HAULBY homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /the uk's nationwide transport marketplace/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /tell us what you need moved/i })).toBeInTheDocument();
});
