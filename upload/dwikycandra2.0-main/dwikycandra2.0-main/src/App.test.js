import { render, screen } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

test('renders app with portfolio sections', () => {
  render(<App />);
  const footerElement = screen.getByText(/Built with React/i);
  expect(footerElement).toBeInTheDocument();
});
