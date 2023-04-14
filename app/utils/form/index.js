const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateInput = (name, value) => {
  let hasError = false;
  let error = "";

  switch (name) {
    case "email":
      if (value.trim() == "") {
        hasError = true;
        error = "El email es requerido";
      } else if (!formatEmail.test(value)) {
        hasError = true;
        error = "El email es inválido";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "name":
      if (value.trim() == "") {
        hasError = true;
        error = "El nombre es requerido";
      }
      break;
    case "subject":
      if (value.trim() == "") {
        hasError = true;
        error = "El asunto es requerido";
      }
      break;
    case "message":
      if (value.trim() == "") {
        hasError = true;
        error = "El mensaje es requerido";
      }
      break;
    default:
      break;
  }
  return { hasError, error };
};

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;
  for (const key in formState) {
    const item = formState[key];
    if (key != name && hasError) {
      isFormValid = false;
      break;
    } else if (key != name && item.hasError) {
      isFormValid = false;
      break;
    }
  }
  dispatch({
    type: UPDATE_FORM,
    data: { name, value, hasError, error, touched: true, isFormValid },
  });
};

export const UPDATE_FORM = "UPDATED_FORM";
export const RESET_FORM = "RESET_FORM";
