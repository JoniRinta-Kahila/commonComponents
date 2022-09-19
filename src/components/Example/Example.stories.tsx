/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Example } from './Example';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/Example",
  component: Example,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  }
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />

export const Default = Template.bind({});

Default.args = {
  background: '#fff',
}

export default Story;
