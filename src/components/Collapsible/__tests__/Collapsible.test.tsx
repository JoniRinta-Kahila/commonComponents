import React from 'react';
import { Collapsible, CollapsibleProps } from '..';
import { render, screen, fireEvent } from '@testing-library/react';

const defaultProps: CollapsibleProps = {};

const setup = (props = defaultProps) => render(<Collapsible {...props} />);

describe('Collapsible', () => {
  it('renders', () => {
    setup({ label: 'foo' });
    expect(screen.getByText('foo'));
  });

  it('test open state change on button click', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const { getByRole } = setup();
    const button = getByRole('button');

    fireEvent.click(button);

    expect(setStateMock).toHaveBeenCalledWith(true);
  });

  it('check contentRef classname', () => {
    const { getByTestId } = setup();
    const testEl = getByTestId('div-element');
    expect(testEl.style.maxHeight).toEqual('0px');
  });

  it('check contentRef classname change on state change', () => {
    const { getByTestId } = setup({ defaultOpen: true });
    const testEl = getByTestId('div-element');
    expect(testEl.style.maxHeight).toEqual('none');
  });
});
