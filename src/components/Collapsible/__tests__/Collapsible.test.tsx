import React from 'react';
import { Collapsible, CollapsibleProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: CollapsibleProps = {};

const setup = (props = defaultProps) => render(<Collapsible {...props} />);

describe('Collapsible', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
