import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalContextProvider, { useModalContext } from './ModalContextProvider';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Modal',
  component: ModalContextProvider,
  parameters: {
    layout: 'centered',
    viewMode: 'story',
    previewTabs: {
      // canvas: { hidden: true },
    },
    docs: {
      description: {
        component:
          '`Modal context provider` with `prompt feature`. Preview in canvas page or on [FULLSCREEN](?id=components-modal--default&viewMode=story) mode.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ModalContextProvider>
        <Story />
      </ModalContextProvider>
    ),
  ],
} as ComponentMeta<typeof ModalContextProvider>;

const Template: ComponentStory<typeof ModalContextProvider> = () => {
  const modal = useModalContext();
  const [require, setRequire] = useState<boolean>(true);
  const [answer, setAnswer] = useState<string>('Click propmpt');
  const prompt = () => {
    modal
      .prompt({
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit ducimus eligendi, eius dolore provident aut.',
        header: 'MODAL',
        cancelLabel: 'NO',
        acceptLabel: 'YES',
        require: require,
        showCloseOnRightCorner: true,
      })
      .then((value) => setAnswer(value ? 'Accepted' : 'Refuced'))
      .catch((err) => setAnswer(err));
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Checkbox
        checked={require}
        setChecked={setRequire}
        label='Require'
        checkmarkColor='hotpink'
        background='#8d8d8d'
      />
      <Button label='PROMPT' onClick={prompt} primary />
      <h3 style={{ fontFamily: 'sans-serif' }}>Answer: {answer}</h3>
    </div>
  );
};

export const Default = Template.bind({});
