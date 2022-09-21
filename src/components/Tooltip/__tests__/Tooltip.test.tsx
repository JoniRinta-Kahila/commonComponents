import React from 'react';
import { Tooltip, TooltipProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TooltipProps = {
  title: 'asd',
  children: 'ASD',
};

const setup = (props = defaultProps) => render(<Tooltip {...props} />);

describe('Tooltip', () => {
  it('renders', () => {
    setup({ children: 'ASD', title: 'asd' });
    expect(screen.getByText('ASD'));
  });
});
