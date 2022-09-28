import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from '@src/theme/StyleSheet';
import React from 'react';


interface BoxProps {
  tag?: 'main' | 'section' | 'article' | 'aside' | 'div' | 'header' | 'footer' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;

}

export default function Box({ children, styleSheet, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  )
}


