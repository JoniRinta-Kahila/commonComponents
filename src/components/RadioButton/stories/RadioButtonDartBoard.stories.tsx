import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from '..';
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
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => {
  const [value, setValue] = useState('1');
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '8px',
          width: '100%',
        }}
      >
        <h1>Selected: {value}</h1>
        <RadioButton
          {...args}
          variation='dartBoard'
          name='dart'
          label='Item-1'
          value={1}
          defaultChecked
          onChange={(e) => setValue(e.target.value)}
          styles={{
            colors: {
              default: {
                circle: '#660000',
                label: '#000',
              },
              checked: {
                circle: '#660000',
                dot: '#660000',
                label: '#000',
              },
            },
            margin: '5px 0',
          }}
        />
        <RadioButton
          {...args}
          variation='dartBoard'
          name='dart'
          value={2}
          label='Item-2'
          onChange={(e) => setValue(e.target.value)}
          styles={{
            colors: {
              default: {
                circle: '#140066',
                label: '#000',
              },
              checked: {
                circle: '#140066',
                dot: '#140066',
                label: '#000',
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export const DartBoard = Template.bind({});
