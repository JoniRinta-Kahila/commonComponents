/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from './RadioButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/RadioButton",
  component: RadioButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  }
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />

export const Default = Template.bind({});

Default.args = {

}

export default Story;