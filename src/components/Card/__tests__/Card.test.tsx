import React from 'react';
import { Card, CardProps, Title } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: CardProps = {
  children: <Title text='foo' />,
};

const setup = (props = defaultProps) => render(<Card {...props} />);

describe('Card', () => {
  it('renders', () => {
    setup({ children: <Title text='foo' /> });
    expect(screen.getByText('foo'));
  });
});
