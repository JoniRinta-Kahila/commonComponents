---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';
import styles from './<%= h.changeCase.pascalCase(name) %>.scss';

export interface <%= h.changeCase.pascalCase(name) %>Props {
  children?: string | JSX.Element | JSX.Element[];
}

export const <%= h.changeCase.pascalCase(name) %>: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};
