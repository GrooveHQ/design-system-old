import React from 'react'
import styled from 'react-emotion'
import {
  Flex,
  Box,
  Card,
  BackgroundImage,
  Heading,
  Text,
  Button,
  Divider,
  Icon
} from 'groove-design-system'
import PageTitle from './PageTitle'
import Pre from './Pre'
import Markdown from './Markdown'
import Container from './Container'
import Description from './Description'

Button.a = Button.withComponent('a')

const Landing = props => {
  const gettingStarted = props.content.find(c => c.name === 'GettingStarted')
    .content
  return (
    <Box>
      <Container>
        <PageTitle>Groove </PageTitle>
        <Description>{props.pkg.description}</Description>
        <Text fontSize={1} color="gray">
          v{props.pkg && props.pkg.version}
        </Text>
        <Flex wrap py={4} align="center">
          <Pre
            my={2}
            mr={2}
            style={{
              lineHeight: '16px'
            }}
          >
            npm install groove-design-system
          </Pre>
          <Button.a
            size="large"
            href="https://github.com/groovehq/design-system-sketch/releases/latest"
          >
            Download Sketch Kit
          </Button.a>
        </Flex>
        <Divider />
        <Box pb={5}>
          <Markdown children={gettingStarted} />
        </Box>
      </Container>
    </Box>
  )
}

export default Landing
