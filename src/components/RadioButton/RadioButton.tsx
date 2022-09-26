import React, { useCallback } from 'react';
import './RadioButton.scss';
import * as CSS from 'csstype';

export type fontFamilyTypes = Pick<CSS.Properties, 'fontFamily'>;
export interface RadioButtonStyleProps {
  colors?: {
    checked?: {
      circle?: string;
      dot?: string;
      label?: string;
      background?: string;
    };
    default?: {
      circle?: string;
      dot?: string;
      label?: string;
    };
  };
  font?: fontFamilyTypes;
  size?: string;
  margin?: string | number;
  padding?: string | number;
  hover?: {
    brightness?: number | string;
    backgroundColor?: string;
  };
}
export interface RadioButtonProps {
  variation?: 'dartBoard' | 'shutter';
  label?: string;
  defaultChecked?: boolean;
  name?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
  styles?: RadioButtonStyleProps;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  styles,
  name,
  value,
  disabled = false,
  variation = 'shutter',
  defaultChecked = false,
  onChange,
}) => {
  const genVars = useCallback(
    () => ({
      // checked colors
      '--radiobutton-circle-c-color': styles?.colors?.checked?.circle ?? '#00ff8c',
      '--radiobutton-dot-c-color': styles?.colors?.checked?.dot ?? '#00ff8c',
      '--radiobutton-label-c-color': styles?.colors?.checked?.label ?? '#00ff8c',
      '--radiobutton-c-background': styles?.colors?.checked?.background ?? 'transparent',

      // default colors
      '--radiobutton-circle-color': styles?.colors?.default?.circle ?? '#888',
      '--radiobutton-label-color': styles?.colors?.default?.label ?? '#888',
      '--radiobutton-dot-color': styles?.colors?.default?.dot ?? '#888',

      // hover
      '--radiobutton-hover-brightness': styles?.hover?.brightness ?? '50%',
      '--radiobutton-hover-background': styles?.hover?.backgroundColor ?? 'transparent',

      // sizing
      '--radiobutton-size': styles?.size ?? '25px',
      '--radiobutton-margin': styles?.margin ?? 0,
      '--radiobutton-padding': styles?.padding ?? 0,

      // font
      '--radiobutton-fontfamily': styles?.font?.fontFamily,
    }),
    [styles]
  );

  const theme = {
    dartBoard: {
      container: 'radiobutton-dart',
      check: 'radiobutton-dart-check',
    },
    shutter: {
      container: 'radiobutton-shutter',
      check: 'radiobutton-shutter-check',
    },
  };

  return (
    <label className={theme[variation].container} style={genVars() as React.CSSProperties}>
      <input
        type='radio'
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {variation === 'dartBoard' ? <p>{label}</p> : null}
      <span className={theme[variation].check}>
        {variation === 'shutter' ? <p>{label}</p> : null}
      </span>
    </label>
  );
};
