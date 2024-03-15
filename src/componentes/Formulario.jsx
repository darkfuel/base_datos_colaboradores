import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { BaseColaboradores } from '../assets/js/BaseColaboradores'

const Formulario = () => {
  const [inputs, setInputs] = useState()
  const eChange = (e) => {
    setInputs(e.target.value)
    console.log(BaseColaboradores)
    console.log()
  }
  return (
    <>
      <h2> Agregar Colaborador</h2>
      <Form.Control type='text' placeholder='Nombre del colaborador' value={inputs} onChange={eChange} />
      <br />
      <Form.Control type='text' placeholder='Edad del colaborador' value={inputs} onChange={eChange} />
      <br />
      <Form.Control type='text' placeholder='Correo del colaborador' value={inputs} onChange={eChange} />
      <br />
      <Form.Control type='text' placeholder='Teléfono del colaborador' value={inputs} onChange={eChange} />
      <br />
      <Form.Control type='text' placeholder='Cargo del colaborador' value={inputs} onChange={eChange} />
      <br />
      <Button variant='outline-primary'>Agregar</Button>
    </>
  )
}

export default Formulario
