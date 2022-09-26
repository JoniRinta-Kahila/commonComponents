import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from '..';
import { argTypes } from './storyArgTypes';

export default {
  title: 'Components/Inputs/RadioButton/styled',
  component: RadioButton,
  argTypes: argTypes,
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <div>
    <div
      style={{
        display: 'flex',
        padding: '8px',
        width: '100%',
        background: '#888',
      }}
    >
      <RadioButton
        {...args}
        name='color'
        label='YES!'
        variation='dartBoard'
        styles={{
          margin: 'auto',
          colors: {
            default: {
              circle: 'green',
              label: 'green',
            },
            checked: {
              circle: 'green',
              dot: 'green',
              label: 'green',
            },
          },
        }}
      />
      <RadioButton
        {...args}
        variation='shutter'
        name='color'
        label='Maybe..'
        styles={{
          colors: {
            default: {
              circle: 'yellow',
              label: 'yellow',
            },
            checked: {
              circle: 'yellow',
              dot: 'yellow',
              label: 'yellow',
              background: '#1a12ff56',
            },
          },
          hover: {
            backgroundColor: '#1a12ff56',
          },
        }}
      />
      <RadioButton
        {...args}
        variation='dartBoard'
        name='color'
        label='NO!'
        styles={{
          margin: 'auto',
          colors: {
            default: {
              circle: 'red',
              label: 'red',
            },
            checked: {
              circle: 'red',
              dot: 'red',
              label: 'red',
            },
          },
        }}
      />
    </div>
  </div>
);

export const Styling = Template.bind({});
