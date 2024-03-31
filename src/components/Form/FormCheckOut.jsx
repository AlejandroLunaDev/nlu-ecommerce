import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PurchaseButton } from '../Ui/Button/PurchaseButton';

export const FormCheckout = ({ handleSubmit }) => {




    
  const initialValues = {
    nombre: '',
    email: '',
    telefono: '',
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = 'El nombre es requerido';
    }
    if (!values.email) {
      errors.email = 'El email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Formato de email inválido';
    }
    if (!values.telefono) {
      errors.telefono = 'El teléfono es requerido';
    }

    // Verifica si el formulario es válido
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
  };

  return (
    <div className="mb-2">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isValid }) => (
          <Form>
            <label htmlFor="nombre">Nombre:</label>
            <Field
              type="text"
              id="nombre"
              name="nombre"
              className="border border-gray-300 md:p-2 rounded-md mb-2 w-full"
            />
            <ErrorMessage name="nombre" component="div" className="text-red-500 text-sm mb-2" />

            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 md:p-2 rounded-md mb-2 w-full"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mb-2" />

            <label htmlFor="telefono">Teléfono:</label>
            <Field
              type="tel"
              id="telefono"
              name="telefono"
              className="border border-gray-300 md:p-2 rounded-md mb-2 w-full"
            />
            <ErrorMessage name="telefono" component="div" className="text-red-500 text-sm mb-2" />

            <PurchaseButton
              text={'Finalizar Compra'}
              type="submit"
              disabled={!isValid} // Habilita o deshabilita el botón según el estado isValid
              isValid={isValid}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
