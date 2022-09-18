import React from 'react';
import { Asd, AsdProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: AsdProps = {
  
};

const setup = (props = defaultProps) => render(<Asd {...props} />);

describe('Asd', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
