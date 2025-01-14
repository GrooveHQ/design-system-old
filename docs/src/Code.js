import styled from 'react-emotion'
import { color, fontSize } from 'styled-system'

const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  ${color} ${fontSize};
`

Code.defaultProps = {
  fontSize: 2,
  color: 'blue'
}

export default Code
