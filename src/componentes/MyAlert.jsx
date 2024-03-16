import Alert from 'react-bootstrap/Alert'

function MyAlert ({ texto, status }) {
  return <Alert variant={status}>{texto}</Alert>
}

export default MyAlert
