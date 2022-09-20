import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { linkRel, linkTarget } from '../../types';
import './SomeButtons.scss';

export interface FacebookProps {
  facebookLink: string;
  linkTarget?: linkTarget;
  linkRel?: linkRel;
  iconSize?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Facebook: React.FC<FacebookProps> = ({
  facebookLink,
  linkRel = 'noreferrer',
  linkTarget = '_balnk',
  iconSize = 24,
  style = undefined,
  className = '',
}) => {
  return (
    <li className={`somebuttons-facebook ${className}`} style={style}>
      <a href={facebookLink} target={linkTarget} rel={linkRel}>
        <FaFacebookF size={iconSize} />
      </a>
    </li>
  );
};

export default Facebook;
