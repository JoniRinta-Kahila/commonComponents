import React from 'react';
import { Dsa, DsaProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: DsaProps = {
  
};

const setup = (props = defaultProps) => render(<Dsa {...props} />);

describe('Dsa', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
