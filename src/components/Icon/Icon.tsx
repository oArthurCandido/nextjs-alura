import { BaseComponent } from "@src/theme/BaseComponent"
import * as icons from './svgs/_index'

const iconSizes = {
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
}

interface IconProps {
  name: keyof typeof icons
  styleSheet?: StyleSheet
  size?: keyof typeof iconSizes
}

export default function Icon({ size, name }: IconProps) {
  const CurrentIcon = icons[name]
  if (!CurrentIcon) return <>{`"${name}" is not a valid icon name! `}<Icon /></>
  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],

      }}
      fill="currentColor"
      color="inherit"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: 'default_icon',
  size: 'md'
}
