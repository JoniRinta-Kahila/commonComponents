import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ModalContextProvider, useModalContext } from '../ModalContextProvider';
import { Button } from '../../Button';
import { Card, Content, Title } from '../../Card';

export default {
  title: 'Display/Modal',
  component: ModalContextProvider,
  parameters: {
    layout: 'fullscreen',
    viewMode: 'story',
    docs: {
      description: {
        component:
          '`Modal context provider` with `prompt features`. Preview in canvas page or on [FULLSCREEN](?id=components-modal--default&viewMode=story) mode.',
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
  const { modal } = useModalContext();

  const display = () =>
    modal({
      showCloseOnRightCorner: true,
      content: (
        <Card width='300px' background='#fff'>
          <Title text='Hello, World' />
          <Content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ab deleniti
            placeat consequatur nihil distinctio perspiciatis blanditiis debitis! Veritatis, beatae.
          </Content>
        </Card>
      ),
    });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Button label='Display modal' primary size='large' onClick={display} />
    </div>
  );
};

export const Modal = Template.bind({});
