import React from 'react';
import styles from './Example.module.scss';

export interface ExampleProps {
  children?: string | JSX.Element | JSX.Element[];
  background?: string;
}

export const Example: React.FC<ExampleProps> = ({ children, background = 'as' }) => {
  return (
    <div className={styles.container} style={{ background: background }}>
      Example
      <div>{children}</div>
    </div>
  );
};
