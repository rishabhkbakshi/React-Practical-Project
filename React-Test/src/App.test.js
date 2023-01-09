import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('render the page title', () => {
  // render(<App />);
  // const titleOfThePage = screen.findByTitle(/React App/)
  // expect(titleOfThePage).toBeInTheDocument()
});
