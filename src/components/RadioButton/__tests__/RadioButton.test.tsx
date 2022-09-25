import React from 'react';
import { RadioButton, RadioButtonProps } from '..';
import { render, screen } from '@testing-library/react';

const setup = (props: RadioButtonProps) => render(<RadioButton {...props} />);

describe('RadioButton', () => {
  it('renders', () => {
    setup({ label: 'radio' });
    expect(screen.getByText('radio'));
  });
});
