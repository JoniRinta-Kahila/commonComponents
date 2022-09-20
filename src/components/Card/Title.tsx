import React from 'react';

enum TitlePosition {
  start = 'start',
  middle = 'center',
  end = 'end',
}

export interface TitleProps {
  text: string;
  titlePosition?: TitlePosition;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  text,
  titlePosition = TitlePosition.middle,
  className,
}) => {
  return (
    <div
      className={['card-title-container', className].join(' ')}
      style={{ textAlign: titlePosition }}
    >
      <h3>{text}</h3>
    </div>
  );
};
