/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
      name: 'Background color',
      description: 'Set background color for button',
    },
    label: {
      name: 'Label',
      defaultValue: 'Button',
      description: 'Set button label',
      type: 'string'
    },
    primary: {
      name: 'Primary',
      defaultValue: false,
      description: 'Button type',
      type: 'boolean',
    },
    onClick: {
      name: 'onClick',
      type: 'function',
      description: 'onClick',
    }
  },
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
