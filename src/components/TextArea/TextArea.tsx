import React, { InputHTMLAttributes } from 'react';
import './TextArea.scss';

export interface TextAreaStylesProps {
  colors?: {
    default?: {
      inputBackgroundColor?: string;
      inputColor?: string;
      labelColor?: string;
      borderColor?: string;
    };
    focus?: {
      inputBackgroundColor?: string;
      inputColor?: string;
      labelColor?: string;
      borderColor?: string;
    };
  };
  controls?: {
    resizable?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';
  };
}

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  styles?: TextAreaStylesProps;
  label?: string;
  id?: string;
}

const generateVariables = (obj: Record<string, any>) => {
  const vars: Record<string, string> = {};
  const iterateObj = (obj: Record<string, any>, parentKey?: string) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        iterateObj(obj[key], key);
      } else {
        vars[`--textarea-${parentKey ? parentKey + '-' : '-'}${key.toLowerCase()}`] = obj[key];
      }
    });
  };
  iterateObj(obj);
  return vars;
};

export const TextArea: React.FC<TextAreaProps> = ({
  rows = 3,
  styles,
  label,
  id = `textarea_${label ? label + '_' : ''}${Math.floor(Math.random() * 690000)}`,
  ...rest
}) => {
  return (
    <div style={styles && generateVariables(styles)} className='textarea-container'>
      <textarea id={id} rows={rows} placeholder='placeholder' {...rest} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
