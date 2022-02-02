import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from './Home';
import { mockData } from '../../utils/mock';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(`https://ghibliapi.herokuapp.com/films`, (req, res, ctx) => {
    return res(ctx.json([mockData]));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test.skip('should render list of films', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  // render header Ghibli Films
  const heading = screen.getByRole('heading');

  // rendering films awaiting findAllByRole list item, length 22
  const films = await screen.findByRole('list');

  //   expect(films.length).toEqual(22);
  expect(films).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
});
