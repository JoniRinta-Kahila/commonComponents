import React from 'react';
import './Dsa.scss';

export interface DsaProps {}

export const Dsa: React.FC<DsaProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
