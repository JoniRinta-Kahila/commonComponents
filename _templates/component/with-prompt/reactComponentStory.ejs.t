---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

storiesOf('<%= h.changeCase.pascalCase(name) %>', module)
  .add('Default', () => <<%= h.changeCase.pascalCase(name) %>><%= h.changeCase.pascalCase(name) %></<%= h.changeCase.pascalCase(name) %>>);
