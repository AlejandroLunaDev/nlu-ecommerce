import { useState } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    // Validación del nombre
    if (formData.nombre.trim() === '') {
      errors.nombre = 'El nombre es requerido';
    }

    // Validación del email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'El email no es válido';
    }

    // Validación del teléfono
    if (!/^\d{10}$/.test(formData.telefono)) {
      errors.telefono = 'El teléfono debe tener 10 dígitos';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
  };
};

export default useForm;
