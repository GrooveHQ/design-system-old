import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { injectGlobal } from 'styled-components'
import { ThemeProvider, Box } from '../src'
import 'react-chromatic/storybook-addon'

injectGlobal([], {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    lineHeight: 1.5,
    margin: 0,
  },
})

addDecorator(story => (
  <ThemeProvider>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
))

const req = require.context('../stories', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
