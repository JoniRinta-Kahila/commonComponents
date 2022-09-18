import React from 'react';
import './Asd.scss';

export interface AsdProps {}

export const Asd: React.FC<AsdProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
