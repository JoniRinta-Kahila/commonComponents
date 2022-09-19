import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './Collapsible.scss';

export interface CollapsibleProps {
  label?: string;
  labelColor?: string;
  labelBackground?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  contentColor?: string;
  contentBackground?: string;
  defaultOpen?: boolean;
  children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[] | string | number;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  label,
  labelColor,
  labelBackground,
  containerClassName,
  containerStyle,
  contentColor,
  contentBackground,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const btnRef: React.MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const contentRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (btnRef.current && contentRef.current) {
      btnRef.current.classList.toggle('collapsible-active', open);
      contentRef.current.style.maxHeight = open ? 'none' : '0px';
    }
  }, [open]);

  return (
    <div className={containerClassName} style={containerStyle}>
      <div className='collapsible-container'>
        <button
          style={{
            color: labelColor,
            background: labelBackground,
          }}
          ref={btnRef}
          className='collapsible-toggle'
          onClick={() => setOpen(!open)}
          data-testid='input-element'
        >
          {label}
        </button>
        <div
          className='collapsible-content'
          ref={contentRef}
          data-testid='div-element'
          style={{
            color: contentColor,
            background: contentBackground,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
