import React from 'react';
import './SomeButtons.scss';

export interface SomeButtonsProps {
  children?: string | JSX.Element | JSX.Element[];
}

export const SomeButtons: React.FC<SomeButtonsProps> = ({ children }) => {
  return <div className={'somebuttons-container'}>{children}</div>;
};
