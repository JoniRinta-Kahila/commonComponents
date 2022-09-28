import React, { InputHTMLAttributes } from 'react';
import './TextField.scss';

export interface TextFieldStylesProps {
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
    invalid?: {
      inputBackgroundColor?: string;
      inputColor?: string;
      labelColor?: string;
      borderColor?: string;
    };
  };
}

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
  // variation?: 'basic' | 'outline';
  name?: string;
  styles?: TextFieldStylesProps;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  label = 'Label',
  type = 'text',
  name = `${type}_input_${label}`,
  styles,
  ...rest
}) => {
  const generateVariables = () => {
    const variables = {};
    styles?.colors &&
      Object.entries(styles.colors).map((x) => {
        const key = x[0];
        const colors = x[1];
        Object.entries(colors).map((c) => {
          const property = c[0];
          const color = c[1];
          variables[`--textfield-${key.toLowerCase()}-${property.toLowerCase()}`] = color;
        });
      });
    return variables;
  };
  return (
    <div style={generateVariables()} className='textfield-container' id='label'>
      <input type={type} placeholder={name} name={name} {...rest} />
      <label>{label}</label>
    </div>
  );
};
