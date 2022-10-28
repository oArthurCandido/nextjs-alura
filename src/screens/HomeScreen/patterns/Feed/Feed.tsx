import Box from '@src/components/Box/Box'
import Icon from '@src/components/Icon/Icon'
import Text from '@src/components/Text/Text'
import React from 'react'

interface FeedProps {
  children?: React.ReactNode
}

export default function Feed({ children }) {
  return (
    <Box><Text>Feed base</Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  return (
    <Box>
      <Icon name={'youtube'} size={'xl'} />
      <Icon name={'instagram'} />
      <Icon name={'Instagram'} />
      <Icon name={'Instagram'} />


      <Text>Feed.Header</Text>

    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box><Text>Feed.Posts</Text></Box>
  )
}
