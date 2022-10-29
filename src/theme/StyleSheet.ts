import { Breakpoints } from '@skynexui/responsive_stylesheet';

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  color?: ResponsiveProperty<string> | string;
  fontSize?: ResponsiveProperty<number> | number;
  fontWeight?: ResponsiveProperty<number> | number;
  lineHeight?: ResponsiveProperty<number> | number;
  letterSpacing?: ResponsiveProperty<number> | number;
  textAlign?: ResponsiveProperty<string> | string;
  textTransform?: ResponsiveProperty<string> | string;
  textDecoration?: ResponsiveProperty<string> | string;
  textOverflow?: ResponsiveProperty<string> | string;
  whiteSpace?: ResponsiveProperty<string> | string;
  wordBreak?: ResponsiveProperty<string> | string;
  wordWrap?: ResponsiveProperty<string> | string;
  overflow?: ResponsiveProperty<string> | string;
  overflowX?: ResponsiveProperty<string> | string;
  overflowY?: ResponsiveProperty<string> | string;
  textShadow?: ResponsiveProperty<string> | string;
  boxShadow?: ResponsiveProperty<string> | string;
  border?: ResponsiveProperty<string> | string;
  borderWidth?: ResponsiveProperty<number> | number;
  borderStyle?: ResponsiveProperty<string> | string;
  borderColor?: ResponsiveProperty<string> | string;
  borderRadius?: ResponsiveProperty<number> | string;
  borderTop?: ResponsiveProperty<string> | string;
  borderTopWidth?: ResponsiveProperty<number> | number;
  borderTopStyle?: ResponsiveProperty<string> | string;
  borderTopColor?: ResponsiveProperty<string> | string;
  borderTopLeftRadius?: ResponsiveProperty<number> | number;
  borderTopRightRadius?: ResponsiveProperty<number> | number;
  borderRight?: ResponsiveProperty<string> | string;
  borderRightWidth?: ResponsiveProperty<number> | number;
  borderRightStyle?: ResponsiveProperty<string> | string;
  borderRightColor?: ResponsiveProperty<string> | string;
  borderBottom?: ResponsiveProperty<string> | string;
  borderBottomWidth?: ResponsiveProperty<number> | number;
  borderBottomStyle?: ResponsiveProperty<string> | string;
  borderBottomColor?: ResponsiveProperty<string> | string;
  borderBottomLeftRadius?: ResponsiveProperty<number> | number;
  borderBottomRightRadius?: ResponsiveProperty<number> | number;
  borderLeft?: ResponsiveProperty<string> | string;
  borderLeftWidth?: ResponsiveProperty<number> | number;
  borderLeftStyle?: ResponsiveProperty<string> | string;
  borderLeftColor?: ResponsiveProperty<string> | string;
  borderLeftTopRadius?: ResponsiveProperty<number> | number;
  borderLeftBottomRadius?: ResponsiveProperty<number> | number;
  borderRightTopRadius?: ResponsiveProperty<number> | number;
  borderRightBottomRadius?: ResponsiveProperty<number> | number;
  padding?: ResponsiveProperty<number> | number;
  paddingTop?: ResponsiveProperty<number> | number;
  paddingRight?: ResponsiveProperty<number> | number;
  paddingBottom?: ResponsiveProperty<number> | number;
  paddingLeft?: ResponsiveProperty<number> | number;
  margin?: ResponsiveProperty<number> | number;
  marginTop?: ResponsiveProperty<number> | number;
  marginRight?: ResponsiveProperty<number> | number;
  marginBottom?: ResponsiveProperty<number> | number;
  marginLeft?: ResponsiveProperty<number> | number;
  width?: ResponsiveProperty<number> | string;
  height?: ResponsiveProperty<number> | string;
  minWidth?: ResponsiveProperty<number> | number;
  minHeight?: ResponsiveProperty<number> | number;
  maxWidth?: ResponsiveProperty<number> | number;
  maxHeight?: ResponsiveProperty<number> | number;
  flex?: ResponsiveProperty<number> | number;
  flexGrow?: ResponsiveProperty<number> | number;
  flexShrink?: ResponsiveProperty<number> | number;
  flexBasis?: ResponsiveProperty<number> | number;
  flexDirection?: ResponsiveProperty<string> | string;
  flexWrap?: ResponsiveProperty<string> | string;
  justifyContent?: ResponsiveProperty<string> | string;
  alignItems?: ResponsiveProperty<string> | string;
  alignContent?: ResponsiveProperty<string> | string;
  alignSelf?: ResponsiveProperty<string> | string;
  order?: ResponsiveProperty<number> | number;
  position?: ResponsiveProperty<string> | string;
  top?: ResponsiveProperty<number> | number;
  right?: ResponsiveProperty<number> | number;
  bottom?: ResponsiveProperty<number> | number;
  left?: ResponsiveProperty<number> | number;
  zIndex?: ResponsiveProperty<number> | number;
  cursor?: ResponsiveProperty<string> | string;
  pointerEvents?: ResponsiveProperty<string> | string;
  userSelect?: ResponsiveProperty<string> | string;
  visibility?: ResponsiveProperty<string> | string;
  opacity?: ResponsiveProperty<number> | number;
  transition?: ResponsiveProperty<string> | string;
  transitionProperty?: ResponsiveProperty<string> | string;
  transitionDuration?: ResponsiveProperty<number> | number;
  transitionTimingFunction?: ResponsiveProperty<string> | string;
  transitionDelay?: ResponsiveProperty<number> | number;
  animation?: ResponsiveProperty<string> | string;
  animationName?: ResponsiveProperty<string> | string;
  animationDuration?: ResponsiveProperty<number> | number;
  animationTimingFunction?: ResponsiveProperty<string> | string;
  animationDelay?: ResponsiveProperty<number> | number;
  animationIterationCount?: ResponsiveProperty<number> | number;
  animationDirection?: ResponsiveProperty<string> | string;
  animationFillMode?: ResponsiveProperty<string> | string;
  display?: ResponsiveProperty<string> | string;

























  [key: string]: any;
}
