import { render, screen } from '../../../__test-utils__/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';
// not needed anymore because of customized render method
// import { OrderContextProvider } from '../../../store/OrderContext';

describe('Calculation of price', () => {
  test('updates scoop subtotal when scoops changes', async () => {
    // use wrapper prop in options obj to add needed ContextProvider
    // you can wrap component also in Router or in Redux Provider
    // render(<Options optionType='scoops' />, { wrapper: OrderContextProvider });
    // Here: omit wrapper, because of customized render method
    render(<Options optionType='scoops' />);

    // make sure total starts out at 0.00 €
    const scoopsSubtotal = screen.getByText(/^scoops total:.+€$/i);
    expect(scoopsSubtotal).toHaveTextContent(/0.00/);

    // update vanilla scoops to 1 and check subtotal
    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    // when updating text element, first clear element to be sure that only my wished entry is inserted
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent(/2.00/);

    // update chocolate scoops to 2 and check subtotal
    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    expect(scoopsSubtotal).toHaveTextContent(/6.00/);
  });

  test('updates toppings subtotal when toppings change', async () => {
    render(<Options optionType='toppings' />);

    // make sure total starts out at 0.00 €
    const toppingsTotal = screen.getByText(/^toppings total:.+€$/i);
    expect(toppingsTotal).toHaveTextContent(/0.00/);

    // add cherries and check subtotal
    const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Cherries' });
    userEvent.click(cherriesCheckbox);
    expect(toppingsTotal).toHaveTextContent(/1.50/);

    // add hot fudge and check subtotal
    const hotFudgeCheckbox = await screen.findByRole('checkbox', { name: 'Hot fudge' });
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsTotal).toHaveTextContent(/3.00/);

    // remove hot fudge and check subtotal
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsTotal).toHaveTextContent(/1.50/);
  });
});
