/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    background: {
      description: 'the background colow when the checkbox is unchecked',
      type: 'string',
      defaultValue: '#eee',
    },
    checkedBackground: {
      description: 'the background colow when the checkbox is checked',
      type: 'string',
      defaultValue: '#2196f3',
    },
    checkmarkColor: {
      description: 'the color of the checkmark',
      type: 'string',
      defaultValue: '#fff',
    },
    checked: {
      description: 'checked',
      type: 'boolean',
      defaultValue: false,
    },
    label: {
      description: 'label',
      type: 'string',
    },
  },
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [val, setVal] = useState<boolean>(args.checked ?? false);
  return <Checkbox {...args} setChecked={setVal} checked={val} />;
};

export const Checked = Template.bind({});
export const Unchecked = Template.bind({});
export const Disabled = Template.bind({});
export const Label = Template.bind({});

Checked.args = {
  checked: true,
  label: 'Buy milk',
};

Disabled.args = {
  disabled: true,
};

Label.args = {
  label: 'Label text',
};
