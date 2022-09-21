/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tooltip } from './Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/Tooltip",
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  }
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args}>ASD</Tooltip>

export const Default = Template.bind({});

Default.args = {
 title: 'Tooltip'
}

export default Story;