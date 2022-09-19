/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ENavbarPosition, Navbar } from './Navbar';
import Repo from '../../assets/repo.svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: "Components/Navbar",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({});

const itemStyle = {
  color: 'azure',
  fontFamily: 'monospace',
  fontWeight: 700,
  margin: '12px'
}

const Menu = (isMobile: boolean): React.ReactNode => (
  <div style={{
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    padding: '0 20px'

  }}>
    <a style={itemStyle} href="#">LINK-1</a>
    <a style={itemStyle} href="#">LINK-2</a>
    <a style={itemStyle} href="#">LINK-3</a>
    <a style={itemStyle} href="#">LINK-4</a>
  </div>
)

Default.args = {
  logoSrc: Repo,
  menuRendererEnd: Menu(false),
  hamburgerMenuRenderer: Menu(true),
  mobileMenuDefaultOpen: false,
  navbarPosition: ENavbarPosition.fixed,
  logoLink: '#',
  hideNavbarOnScroll: true,
  menuRendererCenter: null,
}

export default Story;