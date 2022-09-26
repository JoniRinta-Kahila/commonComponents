import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton, RadioButtonStyleProps } from '..';
import { argTypes } from './storyArgTypes';

export default {
  title: 'Components/RadioButton/variations',
  component: RadioButton,
  argTypes: argTypes,
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: 'Radio button with **`SHUTTER`** animation',
      },
    },
  },
} as ComponentMeta<typeof RadioButton>;

const style: RadioButtonStyleProps = {
  font: {
    fontFamily: 'cursive',
  },
  margin: '5px 0',
  size: '25px',
};

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
        width: '100%',
      }}
    >
      <RadioButton
        {...args}
        variation='shutter'
        name='shutter'
        label='Item-1'
        defaultChecked
        styles={{
          ...style,
          colors: {
            default: {
              circle: '#660000',
              dot: 'transparent',
              label: '#000',
            },
            checked: {
              circle: '#660000',
              dot: 'transparent',
              label: '#000',
            },
          },
        }}
      />
      <RadioButton
        {...args}
        variation='shutter'
        name='shutter'
        label='Item-2'
        styles={{
          ...style,
          colors: {
            default: {
              circle: '#140066',
              dot: 'transparent',
              label: '#000',
            },
            checked: {
              circle: '#140066',
              dot: 'transparent',
              label: '#000',
            },
          },
        }}
      />
    </div>
  </div>
);

export const Shutter = Template.bind({});
