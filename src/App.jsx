import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Listado from './componentes/Listado.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import Formulario from './componentes/Formulario.jsx'
import Buscador from './componentes/Buscador.jsx'
import MyAlert from './componentes/MyAlert.jsx'

function App () {
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState(false)
  const [status, setStatus] = useState(false)
  return (
    <>
      <Container>
        <Row>
          <Col sm={5}><h2>Lista de Colaboradores</h2></Col>
        </Row>
        <Col sm={3}><Buscador /></Col>
        <Row>
          <Col sm={9}><Listado /></Col>
          <Col sm={3}><Formulario setError={setError} setMsg={setMsg} setStatus={setStatus} /></Col>
          {error ? <MyAlert status={status} texto={msg} /> : null}
        </Row>
      </Container>
    </>
  )
}

export default App
