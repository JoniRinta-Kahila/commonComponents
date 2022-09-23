/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tooltip } from './Tooltip';

const Story = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    children: 'HOVER ON ME',
    title: 'TOOLTIP',
  },
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
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
