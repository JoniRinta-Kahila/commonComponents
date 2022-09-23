/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tooltip } from './Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/Tooltip",
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    children: 'HOVER ON ME',
    title: 'TOOLTIP',
  },
  parameters: {
    layout: 'centered',
  }
} as unknown as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Default = Template.bind({});

export const HTMLInside = Template.bind({});

HTMLInside.args = {
 title: 'HTML INSIDE',
 direction: 'bottom',
 children: <div style={{
  background: 'orangered',
  height: '40px',
  width: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 }}>
  <h3>HTML</h3>
 </div>
}



export default Story;
