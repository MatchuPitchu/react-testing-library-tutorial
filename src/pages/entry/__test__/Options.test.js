import { render, screen } from '@testing-library/react';
import Options from '../Options';

describe('Options component', () => {
  test('displays image for each scoop option from server', async () => {
    // GET request happens in Options component
    // with configuration in setupTest.js, handlers.js and server.js
    // test runs component and mock service worker is going to intercept to the request
    // and sends back handler response
    render(<Options optionType='scoops' />);

    // find images with 'scoop' at the end of alt text
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images (create array of alt texts)
    const altText = scoopImages.map((element) => element.alt);
    // arrays + objects use toEqual() while nums + string use toBe()
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });
});
