import { render, screen, waitFor } from '../../../__test-utils__/testing-library-utils';
import OrderEntry from '../OrderEntry';
import { server } from '../../../mocks/server';
import { rest } from 'msw';

describe('OrderEntry component', () => {
  test('handles error for scoops and toppings routes', async () => {
    // Error Server Response:
    // - use imported server to overwrite its handlers
    // - create new handlers that returns an error (-> status code 500)
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops', (req, res, ctx) => res(ctx.status(500))),
      rest.get('http://localhost:3030/toppings', (req, res, ctx) => res(ctx.status(500)))
    );

    render(<OrderEntry />);

    // waitFor: if you need to wait until all of your mock server promises are resolved;
    // without waitFor alerts array would only have length 1
    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');
      expect(alerts).toHaveLength(2);
    });
  });
});
