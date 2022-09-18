import React from 'react';
import { Example, ExampleProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ExampleProps = {
  
};

const setup = (props = defaultProps) => render(<Example {...props} />);

describe('Example', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
