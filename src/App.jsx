import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Listado from './componentes/Listado.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import Formulario from './componentes/Formulario.jsx'
import Buscador from './componentes/Buscador.jsx'
import MyAlert from './componentes/MyAlert.jsx'
import { BaseColaboradores } from './assets/js/BaseColaboradores.js'

function App () {
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState(false)
  const [status, setStatus] = useState(false)
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [inputBusqueda, setInputBusqueda] = useState('')
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    correo: '',
    telefono: '',
    cargo: ''
  })
  return (
    <Container>
      <Row>
        <Col sm={5}><h2>Lista de Colaboradores</h2></Col>
      </Row>
      <Col sm={3}><Buscador inputBusqueda={inputBusqueda} setInputBusqueda={setInputBusqueda} /></Col>
      <Row>
        <Col sm={9}><Listado inputBusqueda={inputBusqueda} formData={colaboradores} /></Col>
        <Col sm={3}><Formulario propsFormulario={{
          colaboradores,
          setColaboradores,
          formData,
          setFormData,
          setError,
          setMsg,
          setStatus
        }}
                    />
        </Col>
        {error ? <MyAlert status={status} texto={msg} /> : null}
      </Row>
    </Container>
  )
}

export default App
