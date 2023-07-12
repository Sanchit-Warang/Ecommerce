import { Alert } from 'react-bootstrap'

const Message = ({ variant, childeren }) => {
  return <Alert variant={variant}>{childeren}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
