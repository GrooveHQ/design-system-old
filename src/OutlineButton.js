import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Button from './Button'
import theme from './theme'

const OutlineButton = styled(Button)`
  color: ${props => props.theme.colors.blue};
  box-shadow: inset 0 0 0 1px ${props => props.theme.colors.borderGray};
  background-color: transparent;

  &:hover {
    color: ${props => (props.disabled ? null : props.theme.colors.blue)};
    box-shadow: inset 0 0 0 1px
      ${props => (props.disabled ? null : props.theme.colors.blue)};
    background-color: transparent;
  }
`

OutlineButton.defaultProps = {
  theme: theme,
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
