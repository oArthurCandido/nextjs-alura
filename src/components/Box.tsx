import { StyleSheet } from '@src/theme/StyleSheet';
import React from 'react';


interface BoxProps {
  tag?: any;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;

}

export default function Box({ children, styleSheet, tag }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <Tag style={styleSheet}>
      {children}
    </Tag>
  )
}
