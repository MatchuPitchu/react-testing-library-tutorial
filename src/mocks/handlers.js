import { rest } from 'msw';

// Handles RestAPI (-> rest)
export const handlers = [
  // HTTP method to mock (-> get, post etc.)
  // full URL to mock (-> e.g. http://localhost:3030/user)
  // response resolver function: req (request obj), res (fn to create response), ctx (utility to build response)
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      // simulate which data type I get back of server (-> here array)
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    );
  }),
];
