import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton/variations',
  component: RadioButton,
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
          margin: '5px 0',
        }}
      />
      <RadioButton
        {...args}
        variation='shutter'
        name='shutter'
        label='Item-2'
        styles={{
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
