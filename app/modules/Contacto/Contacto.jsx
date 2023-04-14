"use client";
import React, { useReducer, useRef, useState } from "react";
import styles from "./Contacto.module.css";
import { Title, Input, Textarea } from "../../../components";
import { UPDATE_FORM, RESET_FORM, onInputChange } from "../../utils/form/index";
import { sendContactForm } from "../../../lib/api";

const initialState = {
  name: { value: "", error: "", touched: false, hasError: true },
  email: { value: "", error: "", touched: false, hasError: true },
  subject: { value: "", error: "", touched: false, hasError: true },
  message: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

const Contacto = () => {
  const [error, setError] = useState(null);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const formRef = useRef();

  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  const onResetForm = () => dispatchFormState({ type: "RESET_FORM" });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await sendContactForm(formState);
      onResetForm();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section id="contacto" className={styles.screen}>
      <div className={styles.formContactContainer}>
        <div className={styles.image}></div>
        <div className={styles.formContainer}>
          <Title title={"contacto"} style={styles.title} />
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            {error && <p className={styles.error}>{error}</p>}
            <Input
              style={styles.input}
              label={"Nombre"}
              type="text"
              name="name"
              placeholder={"Ingrese su nombre"}
              value={formState.name.value}
              hasError={formState.name.hasError}
              error={formState.name.error}
              touched={formState.name.touched}
              onChange={(e) => onHandleChangeInput(e.target.value, "name")}
            />
            <Input
              style={styles.input}
              label={"Email"}
              type="email"
              name="email"
              placeholder={"Ingrese su email"}
              value={formState.email.value}
              hasError={formState.email.hasError}
              error={formState.email.error}
              touched={formState.email.touched}
              onChange={(e) => onHandleChangeInput(e.target.value, "email")}
            />
            <Input
              style={styles.input}
              label={"Asunto"}
              type="text"
              name="subject"
              placeholder={"Ingrese el asunto"}
              value={formState.subject.value}
              hasError={formState.subject.hasError}
              error={formState.subject.error}
              touched={formState.subject.touched}
              onChange={(e) => onHandleChangeInput(e.target.value, "subject")}
            />
            <Textarea
              style={styles.input}
              label={"Mensaje"}
              type="text"
              name="message"
              placeholder={"Ingrese su mensaje"}
              value={formState.message.value}
              hasError={formState.message.hasError}
              error={formState.message.error}
              touched={formState.message.touched}
              onChange={(e) => onHandleChangeInput(e.target.value, "message")}
            />
            <div className={styles.btnSubmitContainer}>
              <input
                className={styles.btnSubmit}
                type="submit"
                disabled={!formState.isFormValid}
                value={"Enviar"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
