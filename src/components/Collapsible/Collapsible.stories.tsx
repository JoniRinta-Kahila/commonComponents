/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Collapsible } from './Collapsible';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/Collapsible",
  component: Collapsible,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => <Collapsible {...args} />

export const Default = Template.bind({});

const Child = (
  <div>
    <p>Lorem, ipsum dolor.</p>
    <p>Lorem, ipsum.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit.</p>
  </div>
)

Default.args = {
  defaultOpen: false,
  label: 'Collapsible example',
  children: Child,
}

export default Story;