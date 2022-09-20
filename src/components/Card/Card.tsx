import React from 'react';
import './Card.scss';

export interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  width?: number | string | undefined;
  maxWidth?: number | string | undefined;
  minWidth?: number | string | undefined;
  height?: number | string | undefined;
  maxHeight?: number | string | undefined;
  minHeight?: number | string | undefined;
  background?: string | undefined;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  background,
}) => {
  return (
    <div
      className={['card-container', className].join(' ')}
      style={{ background, minHeight, maxHeight, height, minWidth, maxWidth, width }}
    >
      {children}
    </div>
  );
};
