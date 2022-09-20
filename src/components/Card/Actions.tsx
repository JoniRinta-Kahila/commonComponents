import React from 'react';
import './Card.scss';

enum ActionPosition {
  start = 'flex-start',
  middle = 'center',
  end = 'flex-end',
}

export interface ActionsProps {
  children?: JSX.Element | JSX.Element[];
  actionPosition?: ActionPosition;
  className?: string;
}

export const Actions: React.FC<ActionsProps> = ({
  children,
  actionPosition = ActionPosition.end,
  className,
}) => {
  return (
    <div
      className={['card-actions-container', className].join(' ')}
      style={{ justifyContent: actionPosition.toString() }}
    >
      <div className={'card-actions-content'}>{children}</div>
    </div>
  );
};
