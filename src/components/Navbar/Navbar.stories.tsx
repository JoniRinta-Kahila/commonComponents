/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';
import Repo from '../../assets/repo.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    navbarPosition: {
      name: 'navbarPosition',
      defaultValue: 'initial',
      type: 'string',
      description: 'Navbar position',
    },
    logoSrc: {
      name: 'logoSrc',
      description: 'Logo source',
      type: 'string',
    },
    logoLink: {
      name: 'logoLink',
      type: 'string',
      description: 'Logo link',
    },
    hamburgerMenuRenderer: {
      name: 'hamburgerMenuRenderer',
      description: 'Mobile dropdown menu renderer',
      type: 'symbol',
    },
    menuRendererCenter: {
      name: 'menuRendererCenter',
      defaultValue: null,
      description: 'Render menu to middle of the navbar',
      type: 'symbol',
    },
    menuRendererEnd: {
      name: 'menuRendererEnd',
      description: 'Render menu to end of the navbar',
      type: 'symbol',
    },
    hideNavbarOnScroll: {
      name: 'hideNavbarOnScroll',
      defaultValue: true,
      description: 'Hide navbar on scroll down',
      type: 'boolean',
    },
  },
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['click', '.click-action'],
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

const itemStyle = {
  color: 'azure',
  fontFamily: 'monospace',
  fontWeight: 700,
  margin: '12px',
  cursor: 'pointer',
};

const Logo: React.ReactNode = (
  <div>
    <a
      href=''
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: '#fff',
      }}
    >
      <img src={Repo} alt='logo' />
      <p style={{ margin: 0 }}>Lorem, ipsum.</p>
    </a>
  </div>
);

const Menu = (isMobile: boolean): React.ReactNode => (
  <div
    style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      padding: '0 20px',
    }}
  >
    <p className='link' style={itemStyle}>
      LINK-1
    </p>
    <p className='link' style={itemStyle}>
      LINK-2
    </p>
    <p className='link' style={itemStyle}>
      LINK-3
    </p>
    <p className='link' style={itemStyle}>
      LINK-4
    </p>
  </div>
);

Default.args = {
  menuRendererEnd: Menu(false),
  hamburgerMenuRenderer: Menu(true),
  mobileMenuDefaultOpen: false,
  navbarPosition: 'initial',
  hideNavbarOnScroll: true,
  logoRenderer: Logo,
};
