import React, { useCallback } from 'react';
import './RadioButton.scss';

export interface RadioButtonProps {
  label?: string;
  checked?: boolean;
  name?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
  styles?: {
    checked?: {
      circle?: string;
      dot?: string;
      label?: string;
    };
    default?: {
      circle?: string;
      label?: string;
    };
    hover?: {
      brightness?: number | string;
    };
  };
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  styles,
  name,
  value,
  disabled = false,
}) => {
  const genVars = useCallback(
    () => ({
      '--radiobutton-circle-c-color': styles?.checked?.circle ?? '#00ff8c',
      '--radiobutton-dot-c-color': styles?.checked?.dot ?? '#00ff8c',
      '--radiobutton-label-c-color': styles?.checked?.label ?? '#00ff8c',
      '--radiobutton-circle-color': styles?.default?.circle ?? '#888',
      '--radiobutton-label-color': styles?.default?.label ?? '#888',
      '--radiobutton-hover-brightness': styles?.hover?.brightness ?? '50%',
      '--radiobutton-size': '25px',
    }),
    [styles]
  );
  return (
    <label className={'radiobutton-container'} style={genVars() as React.CSSProperties}>
      <input type='radio' name={name} value={value} disabled={disabled} />
      <p>{label}</p>
      <span className='radiobutton-check'>
        <div className='radiobutton-dot' />
      </span>
    </label>
  );
};
