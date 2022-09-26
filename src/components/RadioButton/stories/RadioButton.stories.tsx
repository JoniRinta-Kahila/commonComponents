import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from '..';
import { argTypes } from './storyArgTypes';

export default {
  title: 'Components/Inputs/RadioButton',
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
        component: '**`Default`**',
      },
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
