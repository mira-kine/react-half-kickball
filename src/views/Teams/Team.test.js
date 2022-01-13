import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Team from './Team';

it('should render a team’s detail page', async () => {
  // MemoryRouter is needed because <Team> uses the <Link> component
  const { container } = render(
    <MemoryRouter initialEntries={['/teams/2/edit']}>
      <Route path="/teams/:id/edit" component={Team} />
    </MemoryRouter>
  );
  screen.getByLabelText(/loading/);
  await screen.findAllByText(/Bridge City Sneakers/);

  expect(container).toMatchSnapshot();
});
