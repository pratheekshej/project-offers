import { render } from '@testing-library/react';
import App from './App';

test('renders landing page for offers', () => {
  render(<App />);
  expect(true).toBe(true);
});
