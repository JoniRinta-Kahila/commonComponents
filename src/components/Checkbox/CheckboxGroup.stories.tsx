/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxGoupProps, CheckboxGroup } from '.';
// import { useState } from '@storybook/addons';

export default {
  title: 'Inputs/Checkbox',
  component: CheckboxGroup,
  argTypes: {
    children: {
      description: 'checkbox element(s)',
    },
    groupTitle: {
      type: 'string',
      description: 'group title text',
      defaultValue: 'Select All',
    },
    mixedValueCheckmarkColor: {
      description: 'color of the checkbox tick, when group items have mixed value',
      type: 'string',
      defaultValue: '#ffb000',
    },
  },
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component:
          'The group contains one main checkbox, which can be used to set the checked states for all checkboxes in the group.',
      },
    },
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args: CheckboxGoupProps) => {
  const [val1, setVal1] = useState<boolean>(false);
  const [val2, setVal2] = useState<boolean>(true);
  const [val3, setVal3] = useState<boolean>(false);
  console.log('ARGS ARRGGGH', args.groupTitle, args.mixedValueCheckmarkColor, args.children);
  return (
    <CheckboxGroup {...args}>
      <Checkbox checked={val1} setChecked={setVal1} label='Checkbox-1' />
      <Checkbox checked={val2} setChecked={setVal2} label='Checkbox-2' />
      <Checkbox checked={val3} setChecked={setVal3} label='Checkbox-3' />
    </CheckboxGroup>
  );
};

export const Group = Template.bind({});
