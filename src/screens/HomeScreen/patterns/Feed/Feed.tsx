import Box from '@src/components/Box/Box'
import Icon from '@src/components/Icon/Icon'
import Image from '@src/components/Image/Image'
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
      <Image src={'https://github.com/oarthurcandido.png'} alt={'foto'} styleSheet={{ width: '128px', height: '128px', borderRadius: '50%' }} />

      <Icon name={'youtube'} size={'xl'} />
      <Icon name={'instagram'} size={'xl'} />
      <Icon name={'twitter'} size={'xl'} />
      <Icon name={'github'} size={'xl'} />



      <Text>Feed.Header</Text>

    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box><Text>Feed.Posts</Text></Box>
  )
}
