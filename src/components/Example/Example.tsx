import React from 'react';
import styles from './Example.scss';

export interface ExampleProps {
  children: string | JSX.Element | JSX.Element[];
}

export const Example: React.FC<ExampleProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};
