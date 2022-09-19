---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/<%= h.changeCase.pascalCase(name) %>",
  component: <%= h.changeCase.pascalCase(name) %>,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  }
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args) => <<%= h.changeCase.pascalCase(name) %> {...args} />

export const Default = Template.bind({});

Default.args = {

}

export default Story;