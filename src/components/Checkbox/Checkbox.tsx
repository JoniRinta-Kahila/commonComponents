import React, { useCallback } from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  checked?: boolean | null;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  label?: string;
  checkedBackground?: string;
  background?: string;
  checkmarkColor?: string;
  checkmarkSquareColor?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  label = '',
  background = '#eee',
  checkedBackground = '#2196f3',
  checkmarkColor = '#fff',
  checkmarkSquareColor = '#000',
  setChecked,
  disabled = false,
}) => {
  const generateCheckmarkStyle = useCallback(
    () => ({
      backgroundColor: checked ? checkedBackground : background,
      '--checkbox-checkmark-color': checkmarkColor,
      '--checkbox-checkmark-color2': checkmarkSquareColor,
    }),
    [checked, checkedBackground, background, checkmarkColor, checkmarkSquareColor]
  );

  const handleChange = () => {
    if (setChecked) {
      return setChecked((cur) => !cur);
    }
    console.warn('checkbox setCheck() missing');
  };
  const mode = checked === null ? 'checkbox-checkmark--dash' : null;
  return (
    <label className={'checkbox-container'}>
      {label || String.fromCharCode(160)}
      <input
        type='checkbox'
        checked={checked ?? false}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className={['checkbox-checkmark', mode].join(' ')} style={generateCheckmarkStyle()} />
    </label>
  );
};
