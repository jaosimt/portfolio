import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio: sim jao', () => {
  render(<App />);
  const linkElement = screen.getByText(/sim jao/i);
  expect(linkElement).toBeInTheDocument();
});
