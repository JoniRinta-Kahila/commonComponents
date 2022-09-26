import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from '..';
import { argTypes } from './storyArgTypes';

export default {
  title: 'Components/RadioButton/styled',
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
        alignItems: 'center',
        padding: '8px',
        width: '100%',
        background: '#999',
      }}
    >
      <RadioButton
        {...args}
        variation='dartBoard'
        name='size'
        label='Big'
        styles={{
          size: '30px',
          margin: '0 10px',
          colors: {
            default: {
              circle: '#fff',
              label: '#fff',
            },
            checked: {
              circle: 'green',
              dot: 'green',
              label: 'green',
            },
          },
          hover: {
            brightness: '75%',
          },
        }}
      />
      <RadioButton
        {...args}
        variation='dartBoard'
        name='size'
        label='DEFAULT'
        styles={{
          margin: '0 10px',
          colors: {
            default: {
              circle: '#fff',
              label: '#fff',
            },
            checked: {
              circle: 'yellow',
              dot: 'yellow',
              label: 'yellow',
            },
          },
          hover: {
            brightness: '75%',
          },
        }}
      />
      <RadioButton
        {...args}
        variation='dartBoard'
        name='size'
        label='SMALL'
        styles={{
          size: '15px',
          margin: '0 10px',
          colors: {
            default: {
              circle: '#fff',
              label: '#fff',
            },
            checked: {
              circle: 'red',
              dot: 'red',
              label: 'red',
            },
          },
          hover: {
            brightness: '75%',
          },
        }}
      />
    </div>
  </div>
);

export const Sizing = Template.bind({});
