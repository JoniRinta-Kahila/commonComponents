/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card, Title, Actions, Content } from '.';
import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: 'Display/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
  argTypes: {
    className: {
      name: 'className',
      description: 'for define styles of the card',
      type: 'string',
      defaultValue: '',
    },
    background: {
      name: 'background',
      description: 'background color',
      type: 'string',
      defaultValue: '#fffff',
    },
    height: {
      name: 'height',
      description: 'card height',
      type: 'string' || 'number',
    },
    maxHeight: {
      name: 'maxHeight',
      description: 'max height for the card',
      type: 'string' || 'number',
    },
    minHeight: {
      name: 'minHeight',
      description: 'min height for the card',
      type: 'string' || 'number',
    },
    width: {
      name: 'width',
      description: 'card width',
      type: 'string' || 'number',
    },
    maxWidth: {
      name: 'width',
      description: 'max width of the card',
      type: 'string' || 'number',
    },
    minWidth: {
      name: 'minWidth',
      description: 'min width of the card',
      type: 'string' || 'number',
    },
    children: {
      name: 'children',
      description: 'card content',
      type: 'symbol',
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Title text='Title text' />
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus accusamus unde qui
        earum sapiente fuga iusto? Beatae, nemo saepe?
      </Content>
      <Actions>
        <Button label='Yes' primary onClick={() => console.log('YES')} />
        <Button label='No' onClick={() => console.log('NO')} />
      </Actions>
    </>
  ),
};

export default Story;
