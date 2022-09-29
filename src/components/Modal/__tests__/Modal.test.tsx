import React from 'react';
import { ModalContextProvider, ModalContextProviderProps } from '../ModalContextProvider';
import { render, screen } from '@testing-library/react';

const defaultProps: ModalContextProviderProps = { children: <div>ASD</div> };

const setup = (props = defaultProps) => render(<ModalContextProvider {...props} />);

describe('Modal', () => {
  it('renders', () => {
    setup();
    expect(screen.getByText('ASD'));
  });
});
