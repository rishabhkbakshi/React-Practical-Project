import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 'p1',
          title: 'First Post',
        },
      ],
    });

    render(<Async></Async>);

    const lstItems = await screen.findAllByRole(
      'li',
      { exact: false },
      { timeout: 1 }
    );
    expect(lstItems).not.toHaveLength(0);
  });
});
