import Box from "@src/components/Box/Box";
import theme from "@src/theme/theme";

interface TextProps {
  variant?: 'display1';
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Text({
  styleSheet,
  variant,
  ...props
}: TextProps) {
  const textVariant = theme.typography.variants[variant]
  return (
    <Box styleSheet={{
      fontFamily: theme.typography.fontFamily,
      ...textVariant,
      ...styleSheet
    }} {...props} />


  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
}
