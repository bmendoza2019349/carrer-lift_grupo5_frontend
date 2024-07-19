import { useState } from "react";
import { Input } from "../Input";

import {
    validateDescription,
    validateTitle,
    descriptionValidateMessage,
    validateTitleMessage,
    validationIma,
    imaValidationMessage
} from "../../shared/validators";

import { useAddCourse } from "../../shared/hooks";

import React from 'react'

export const AddCourses = ({ switchPublicHandler }) => {

    const { postCourses, isLoading } = useAddCourse();

    const [formState, setFormState] = useState({
        img: {
            value: "",
            isValid: false,
            showError: false,
        },
        nameCourse: {
            value: "",
            isValid: false,
            showError: false,
        },
        descripcion: {
            value: "",
            isValid: false,
            showError: false,
        }
    });
    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "img":
                isValid = validationIma(value);
                break;
            case "nameCourse":
                isValid = validateTitle(value);
                break;
            case "descripcion":
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

    const handleAddCourse = (event) => {
        event.preventDefault();
        postCourses(formState.img.value, formState.nameCourse.value, formState.descripcion.value);
    };

    const isSubmitButtonDisabled =
        isLoading || !formState.img.isValid || !formState.nameCourse.isValid || !formState.descripcion.isValid;

    return (
<div className="mini-ventana">
      <form>
        <Input
          field="img"
          label="Imagen:"
          value={formState.img.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.img.showError}
          validationMessage={imaValidationMessage}
        />
        <Input
          field="nameCourse"
          label="Nombre Curso"
          value={formState.nameCourse.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.nameCourse.showError}
          validationMessage={validateTitleMessage}
        />
        <Input
          field="descripcion"
          label="Descripcion"
          value={formState.descripcion.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.descripcion.showError}
          validationMessage={descriptionValidateMessage}
        />
        <button onClick={handleAddCourse} disabled={isSubmitButtonDisabled}>
          Agregar Curso
        </button>
      </form>
    </div>
  );
}
