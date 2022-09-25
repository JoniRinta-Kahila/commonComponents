import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
