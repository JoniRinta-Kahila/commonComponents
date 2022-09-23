/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Collapsible } from './Collapsible';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/Collapsible",
  component: Collapsible,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      name: 'children',
      description: 'content of collapsible',
      type: 'symbol',
    },
    containerClassName: {
      defaultValue: '',
      type: 'string',
      description: 'for define styles class name for the collapsible content',
    },
    containerStyle: {
      description: 'for define styles of the collapsible content',
      type: 'symbol',
    },
    contentBackground: {
      description: 'for define background color of the collapsible content',
    },
    label: {
      defaultValue: 'Collapsible',
      type: 'string',
      description: 'collapsible title text',
    },
    contentColor: {
      description: 'for define color of the collapsible content',
    },
    defaultOpen: {
      description: 'if true, collapsible is default open',
    },
    labelBackground: {
      description: 'background color of the collapsible label',
    },
    labelColor: {
      description: 'color of the collapsible label',
    }
  },
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
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