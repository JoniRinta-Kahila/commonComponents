import React from 'react';

enum TextPosition {
  start = 'start',
  middle = 'center',
  end = 'end',
}

export interface ContentProps {
  children: JSX.Element | JSX.Element[] | string;
  textPosition?: TextPosition;
  className?: string;
}

export const Content: React.FC<ContentProps> = ({
  children,
  textPosition = TextPosition.middle,
  className,
}) => {
  return (
    <div
      className={['card-content-container', className].join(' ')}
      style={{ textAlign: textPosition }}
    >
      {children}
    </div>
  );
};
