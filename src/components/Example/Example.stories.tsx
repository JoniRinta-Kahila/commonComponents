/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Example } from './Example';

storiesOf('Example', module)
  .add('Default', () => <Example>Example</Example>);
