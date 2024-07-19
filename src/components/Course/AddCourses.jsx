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
        <div className="flex flex-col md:flex-row justify-center items-center p-5 space-y-5 md:space-y-0 md:space-x-5 mt-[7rem]">
            <div className="w-full md:w-1/4">
                <img src="https://i.postimg.cc/8cbFKHwn/img-Logo-Carrer-L.png" alt="" />
            </div>
            <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg border-none">
                    <form className="space-y-4">
                        <Input
                            field="img"
                            label="Imagen:"
                            value={formState.img.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.img.showError}
                            validationMessage={imaValidationMessage}
                            placeholder={"Ingrese el link de su imagen"}
                            className=""
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
                            placeholder={"Ingrese el nombre de su curso"}
                            className=""
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
                            placeholder={"Descripcion"}
                            className=""
                        />
                        <button
                            onClick={handleAddCourse}
                            disabled={isSubmitButtonDisabled}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Agregar Curso
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}
