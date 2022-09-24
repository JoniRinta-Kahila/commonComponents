import React, { useEffect, useState } from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';
import './Checkbox.scss';

export interface CheckboxGoupProps {
  children: JSX.Element | JSX.Element[];
  mixedValueCheckmarkColor?: string;
  groupTitle?: string;
}

export const CheckboxGroup: React.FC<CheckboxGoupProps> = ({
  children,
  mixedValueCheckmarkColor = '#000',
  groupTitle,
}) => {
  const [checked, setChecked] = useState<boolean | null>(null);
  const [setters, setSetters] = useState<React.Dispatch<React.SetStateAction<boolean>>[]>([]);
  // handle checked state by childrens
  useEffect(() => {
    const kids = Array.from(Array.isArray(children) ? children : [children]);
    const setterArr: React.Dispatch<React.SetStateAction<boolean>>[] = [];
    const checks: boolean[] = kids
      .map((kid) => {
        if (kid.type.name === Checkbox.name) {
          const setter = (kid.props as CheckboxProps).setChecked;
          if (setter) {
            setterArr.push(setter);
          }
          return (kid.props as CheckboxProps).checked;
        }
        return undefined;
      })
      .filter((val) => val !== undefined) as boolean[];
    setSetters(setterArr);
    const onlyTrue = checks.every((x) => x);
    const onlyFalse = checks.every((x) => !x);
    // none of the children have been checked
    if (onlyFalse) return setChecked(false);
    // all of the children have been checked
    if (onlyTrue) return setChecked(true);
    // some of the children have been checked
    return setChecked(null);
  }, [children]);

  useEffect(() => {
    if (checked !== null) {
      setters.map((func) => func(checked));
    }
  }, [checked, setters]);

  return (
    <div className='checkbox-group-container'>
      <Checkbox
        checked={checked}
        setChecked={() => setChecked((old) => !old)}
        checkmarkSquareColor={mixedValueCheckmarkColor}
        label={groupTitle}
      />
      {children}
    </div>
  );
};
