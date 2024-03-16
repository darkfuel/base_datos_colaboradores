import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const Formulario = ({ setError, setMsg, setStatus }) => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [cargo, setCargo] = useState('')

  const validNull = (e) => {
    e.preventDefault()
    // validacion de espacios en blanco
    if (nombre === '' || edad === '' || correo === '' || telefono === '' || cargo === '') {
      setError(true)
      setMsg('Complete todos los campos')
      setStatus('danger')
      return
    }
    if (nombre !== '' || edad !== '' || correo !== '' || telefono !== '' || cargo !== '') {
      setError(true)
      setMsg('Registro completo')
      setStatus('success')
      setNombre('')
      setEdad('')
      setCorreo('')
      setTelefono('')
      setCargo('')
      return
    }
    setError(false)
  }

  return (
    <>
      <form onSubmit={validNull}>
        <h5> Agregar Colaborador</h5>
        <Form.Control
          type='text'
          placeholder='Nombre del colaborador'
          value={nombre} onChange={(e) => setNombre(e.target.value)}
        />
        <Form.Control
          type='number'
          placeholder='Edad del colaborador'
          value={edad} onChange={(e) => setEdad(e.target.value)}
        />
        <Form.Control
          type='email'
          placeholder='Correo del colaborador'
          value={correo} onChange={(e) => setCorreo(e.target.value)}
        />
        <Form.Control
          type='text'
          placeholder='Teléfono del colaborador'
          value={telefono} onChange={(e) => setTelefono(e.target.value)}
        />
        <Form.Control
          type='text'
          placeholder='Cargo del colaborador'
          value={cargo} onChange={(e) => setCargo(e.target.value)}
        />
        <br />
        <Button variant='outline-primary' type='submit'>
          Agregar
        </Button>
      </form>
    </>
  )
}

export default Formulario
