import { useEffect, useRef } from 'react';
import React from 'react';
import './Tooltip.scss';

export interface TooltipProps {
  children?: string | JSX.Element | JSX.Element[];
  title: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  toolTipBackground?: string;
  toolTipColor?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  direction = 'right',
  toolTipBackground = '#000',
  toolTipColor = '#fff',
}) => {
  const tooltipRef = useRef<HTMLSpanElement | null>(null);

  // handle style changes
  useEffect(() => {
    console.log('ref updated');
    if (!tooltipRef.current) {
      return;
    }
    tooltipRef.current.style.background = toolTipBackground;
    tooltipRef.current.style.color = toolTipColor;
  }, [toolTipBackground, toolTipColor]);

  return (
    <div className={'tooltip-container'}>
      {children}
      <span
        ref={tooltipRef}
        style={{
          background: toolTipBackground,
          color: toolTipColor,
        }}
        className={['tooltip-text', `tooltip-text--${direction}`].join(' ')}
      >
        {title}
      </span>
    </div>
  );
};
