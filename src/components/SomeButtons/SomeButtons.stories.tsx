/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SomeButtons, Whatsapp, Instagram, Facebook } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: 'Inputs/SomeButtons',
  component: SomeButtons,
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'someButton',
      type: 'symbol',
    },
  },
} as ComponentMeta<typeof SomeButtons>;

const Template: ComponentStory<typeof SomeButtons> = (args) => <SomeButtons {...args} />;

export const Default = Template.bind({});
export const FB = Template.bind({});
export const IG = Template.bind({});
export const WA = Template.bind({});

Default.args = {
  children: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100px',
      }}
    >
      <Facebook facebookLink='https://facebook.com' />
      <Instagram instagramLink='https://instagram.com/' />
      <Whatsapp whatsappLink='https://whatsapp.com' />
    </div>
  ),
};

FB.args = {
  children: <Facebook facebookLink='https://facebook.com' />,
};

IG.args = {
  children: <Instagram instagramLink='https://instagram.com/' />,
};

WA.args = {
  children: <Whatsapp whatsappLink='https://whatsapp.com' />,
};

export default Story;
