import React, { useState } from 'react';
import { Input } from "../Input";
import { useCreateModule } from '../../shared/hooks/useCreateModule';
import { toast } from 'react-hot-toast';

import {
  validateDescription,
  validateTitle,
  descriptionValidateMessage,
  validateTitleMessage,
} from "../../shared/validators";

import { Navigate, useParams } from "react-router-dom";

export const CreateModule = () => {
  const { postModule, isLoading } = useCreateModule()

  const { id } = useParams();

  const [formState, setFormState] = useState({
    nameModule: {
      value: "",
      isValid: false,
      showError: false,
    },
    descriptionModule: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  }

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "nameModule":
        isValid = validateTitle(value);
        break;
      case "descriptionModule":
        isValid = validateDescription(value);
        break;
      default:
        break;
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));

  };

  const handleAddModule = (event) => {
    event.preventDefault();
    postModule(id, formState.nameModule.value, formState.descriptionModule.value,);
  }

  const isSubmitButtonDisabled =
    isLoading || !formState.nameModule.isValid || !formState.descriptionModule.isValid


  return (
    <div className="mini-ventana">
      {isLoading == true ? (<h1>cargando....</h1>) : (
        <form>
          <Input
            field="nameModule"
            label="Name Module"
            value={formState.nameModule.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.nameModule.showError}
            validationMessage={descriptionValidateMessage}
          />
          <Input
            field="descriptionModule"
            label="Descripcion"
            value={formState.descriptionModule.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.descriptionModule.showError}
            validationMessage={validateTitleMessage}
          />
          <button onClick={handleAddModule} id="id" disabled={isSubmitButtonDisabled}>
            Agregar Modulo
          </button>
        </form>
      )}

    </div>
  );
};