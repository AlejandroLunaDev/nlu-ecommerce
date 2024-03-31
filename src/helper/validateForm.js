export const validateForm = (values) => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = 'El nombre es requerido';
    } else if (!/^[a-zA-Z\s]+$/.test(values.nombre)) {
      errors.nombre = 'El nombre no debe contener números ni caracteres especiales';
    }
  
    if (!values.email) {
      errors.email = 'El email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Formato de email inválido';
    }
  
    if (!values.telefono) {
      errors.telefono = 'El teléfono es requerido';
    } else if (!/^\d+$/.test(values.telefono)) {
      errors.telefono = 'El teléfono solo debe contener números';
    }
  
    // Verifica si el formulario es válido
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
  };
  