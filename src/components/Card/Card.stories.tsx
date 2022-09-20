/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card, Title, Actions, Content } from '.';
import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({});

Default.args = {
  children: <>
    <Title text='Title text' />
    <Content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus accusamus unde qui earum sapiente fuga iusto? Beatae, nemo saepe?
    </Content>
    <Actions>
      <Button label='Yes' primary onClick={() => console.log('YES')} />
      <Button label='No' onClick={() => console.log('NO')} />
    </Actions>
  </>
}

export default Story;

