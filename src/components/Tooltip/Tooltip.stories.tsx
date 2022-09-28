/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tooltip } from './Tooltip';

export default {
  title: "Display/Tooltip",
  component: Tooltip,
  argTypes: {
    direction: {
      description: 'the direction in which the tooltip is displayed',
    },
    title: {
      description: 'tooltip text',
    },
    children: {
      description: 'the element on which the tooltip is set',
    },
    toolTipBackground: {
      description: 'tooltip background color',
    },
    toolTipColor: {
      description: 'tooltip color',
    }
  },
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
} as ComponentMeta<typeof Tooltip>;

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
