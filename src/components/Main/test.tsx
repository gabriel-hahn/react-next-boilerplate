import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    screen.getByRole('heading', { name: /react - nextjs/i });

    expect(container.firstChild).toMatchSnapshot();
  });
});
