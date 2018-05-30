import styled from 'react-emotion'
import { Container } from 'groove-design-system'
import { space, width } from 'styled-system'

const DocsContainer = Container.extend`
  max-width: 780px;
  ${space} ${width};
`

DocsContainer.defaultProps = {
  width: 1,
  px: 3
}

export default DocsContainer
