import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('button has correct inital text and color', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /change to blue/i });
    expect(button).toHaveClass('btn--red');
  });

  test('button changes text and color when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /change to blue/i });
    userEvent.click(button);
    expect(button).toHaveTextContent(/change to red/i);
    expect(button).toHaveClass('btn--blue');
  });
});
