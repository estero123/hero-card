import React, { useEffect } from 'react';
import { createPortal } from "react-dom";
import { Field, Form } from 'react-final-form'
import { Content, Footer, FormContent, Header, ModalButton, SingleField, Title, Wrapper } from './AdminModal.style';

const CreateField = (fieldData, key) => {
  return (
    <SingleField key={key}>
    <label>{fieldData.label}</label>:
    <Field
      name={fieldData.name}
      component={fieldData.component}
      type={fieldData.type}
      placeholder={fieldData.placeholder}
      required={fieldData.required}
      {...fieldData}
    />
  </SingleField>
  )
};

const modalRoot = document.getElementById('modal-root');

const AdminModal = ({ isOpen, onClose, title, onSubmit, initialValues, formJson, customContent = false, children }) => {

  const element = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element)
    };
  }, [element, isOpen]);

  const ModalContent = customContent ? children : formJson && formJson.map(CreateField);

  return isOpen && createPortal(
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <ModalButton onClick={onClose}>Close</ModalButton>
      </Header>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <FormContent onSubmit={handleSubmit}>
            <Content>
              {ModalContent}
            </Content>
            <Footer>
              <ModalButton type="submit" disabled={submitting || pristine}>Save</ModalButton>
              <ModalButton onClick={onClose}>Close</ModalButton>
            </Footer>
          </FormContent>
        )}
      >
      </Form>
    </Wrapper>,
    element
  )
};

export default AdminModal;
