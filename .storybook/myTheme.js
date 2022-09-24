import { create } from '@storybook/theming';
import Logo from '../assets/logo.svg';

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://www.rints.in/',
  brandImage: Logo,
  brandTarget: '_self',
});