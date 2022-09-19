import React from 'react';
import { Navbar, NavbarProps } from '..';
import { render, screen, fireEvent } from '@testing-library/react';

const defaultProps: NavbarProps = {};

const setup = (props = defaultProps) => render(<Navbar {...props} />);

describe('Navbar Component', () => {
  it('Navbar renders', () => {
    const { container } = setup();
    const node = container.querySelector('nav.container');
    expect(node!.className).toEqual('container');
  });

  it('MenuVisibility state chekc', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const { getByTestId } = setup();
    const checkbox = getByTestId('input-element');
    fireEvent.click(checkbox);
    setStateMock(false);
    expect(setStateMock).toHaveBeenCalledWith(true);
    expect(setStateMock).toHaveBeenCalledWith(false);
  });

  it('check MenuRenderers', () => {
    setup({ menuRendererCenter: 'foo', menuRendererEnd: 'bar' });
    expect(screen.getByText('foo'));
    expect(screen.getByText('bar'));
  });
});
