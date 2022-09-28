import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './TextField';

const Styles = JSON.parse(
  '{"colors":{"focus":{"inputBackgroundColor":"lightblue","borderColor": "blue","labelColor": "blue","inputColor": "blue"}}}'
);
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    styles: {
      description: 'input styling props',
      defaultValue: Styles,
    },
    required: {
      type: 'boolean',
      defaultValue: 'false',
      options: [false, true],
      control: { type: 'radio' },
    },
  },
  args: {
    required: false,
    type: 'text',
    label: 'Label',
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Text = Template.bind({});
export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: 'Email',
};
