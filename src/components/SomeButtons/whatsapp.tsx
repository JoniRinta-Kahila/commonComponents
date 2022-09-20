import React from 'react';
import { linkRel, linkTarget } from '../../types';
import { FaWhatsapp } from 'react-icons/fa';
import './SomeButtons.scss';

export interface WhatsappProps {
  whatsappLink: string;
  linkTarget?: linkTarget;
  linkRel?: linkRel;
  iconSize?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Whatsapp: React.FC<WhatsappProps> = ({
  whatsappLink,
  linkRel = 'noreferrer',
  linkTarget = '_balnk',
  iconSize = 24,
  style = undefined,
  className,
}) => {
  return (
    <li className={`somebuttons-whatsapp ${className}`} style={style}>
      <a href={whatsappLink} target={linkTarget} rel={linkRel}>
        <i>
          <FaWhatsapp size={iconSize} />
        </i>
      </a>
    </li>
  );
};

export default Whatsapp;
