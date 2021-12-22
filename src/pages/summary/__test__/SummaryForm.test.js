import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

describe('SummaryForm component', () => {
  test('should render initially unchecked checkbox and disabled button', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    expect(checkbox).not.toBeChecked();

    const confirmBtn = screen.getByRole('button', { name: /confirm/i });
    expect(confirmBtn).toBeDisabled();
  });

  test('checkbox enables button on first click and disables it on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmBtn = screen.getByRole('button', { name: /confirm/i });

    userEvent.click(checkbox);
    expect(confirmBtn).toBeEnabled();
    userEvent.click(checkbox);
    expect(confirmBtn).toBeDisabled();
  });
});
