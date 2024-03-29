// import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import uuid from 'react-uuid'

const Formulario = ({ propsFormulario }) => {
  const { colaboradores, setColaboradores, formData, setFormData, setError, setMsg, setStatus } = propsFormulario
  const validNull = (e) => {
    e.preventDefault()
    // validacion de espacios en blanco
    if (formData.nombre === '' || formData.edad === '' || formData.correo === '' || formData.telefono === '' || formData.cargo === '') {
      setError(true)
      setMsg('Complete todos los campos')
      setStatus('danger')
      return
    }
    if (formData.nombre !== '' || formData.edad !== '' || formData.correo !== '' || formData.telefono !== '' || formData.cargo !== '') {
      setError(true)
      setMsg('Registro completo')
      setStatus('success')
      setColaboradores([...colaboradores, formData])
      setFormData({
        nombre: '',
        edad: '',
        correo: '',
        telefono: '',
        cargo: ''
      })
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
          value={formData.nombre}
          onChange={e => setFormData({ ...formData, id: uuid(), nombre: e.target.value })}
        />
        <Form.Control
          type='number'
          placeholder='Edad del colaborador'
          value={formData.edad}
          onChange={e => setFormData({ ...formData, edad: e.target.value })}
        />
        <Form.Control
          type='email'
          placeholder='Correo del colaborador'
          value={formData.correo}
          onChange={e => setFormData({ ...formData, correo: e.target.value })}
        />
        <Form.Control
          type='text'
          placeholder='Teléfono del colaborador'
          value={formData.telefono}
          onChange={e => setFormData({ ...formData, telefono: e.target.value })}
        />
        <Form.Control
          type='text'
          placeholder='Cargo del colaborador'
          value={formData.cargo}
          onChange={e => setFormData({ ...formData, cargo: e.target.value })}
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
