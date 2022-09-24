import React from 'react';
import { Checkbox, CheckboxProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: CheckboxProps = {
  label: 'foo',
};

const setup = (props = defaultProps) => render(<Checkbox {...props} />);

describe('Checkbox', () => {
  it('renders', () => {
    setup({ label: 'foo' });
    expect(screen.getByLabelText('foo'));
  });
});
