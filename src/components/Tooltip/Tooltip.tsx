import React from 'react';
import './Tooltip.scss';

export interface TooltipProps {
  children?: string | JSX.Element | JSX.Element[];
  title: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({ children, title, direction = 'right' }) => {
  return (
    <div className={'tooltip-container'}>
      {children}
      <span className={['tooltip-text', `tooltip-text--${direction}`].join(' ')}>{title}</span>
    </div>
  );
};
