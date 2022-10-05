import React from 'react';
import { TextArea, TextAreaProps } from '..';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: TextAreaProps = {};

const setup = (props = defaultProps) => {
  const utils = render(<TextArea {...props} />);
  const input = utils.getByLabelText('myInput');
  return {
    input,
    ...utils,
  };
};

describe('TextArea', () => {
  it('renders', () => {
    const { input } = setup({ label: 'myInput' });
    fireEvent.change(input, { target: { value: 'foo' } });
    expect((input as HTMLInputElement).value).toBe('foo');
  });
});
