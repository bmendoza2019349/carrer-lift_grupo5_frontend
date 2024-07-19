import { useState } from "react";
import { Input } from "../Input";

import { validateCodigo, validateCodigodMessage } from "../../shared/validators";

import { useAssignCourse } from "../../shared/hooks";

export const AssingCourse = ({ switchPublicHandler }) => {
    const { assignCourse, isLoading } = useAssignCourse();

    const [formState, setFormState] = useState({
        codigo: {
            value: "",
            isValid: false,
            showError: false,
        },
    })

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
            case "codigo":
                isValid = validateCodigo(value);
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

    const handleAssingCourses = (event) => {
        event.preventDefault();
        assignCourse(formState.codigo.value);
    };

    const isSubmitButtonDisabled =
        isLoading || !formState.codigo.isValid;


    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-5 space-y-5 md:space-y-0 md:space-x-5 mt-[7rem]">
            <div className="w-full md:w-1/4">
                <img src="../public/imgLogoCarr.png" alt="" />
            </div>
            <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg border-none">
                    <form className="space-y-4">
                        <Input
                            field="codigo"
                            label="Codigo:"
                            value={formState.codigo.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.codigo.showError}
                            validationMessage={validateCodigodMessage}
                            className="" // Remover bordes aquí
                            placeholder={"Ingrese el codigo de asignatura"}
                        />
                        <button
                            onClick={handleAssingCourses}
                            disabled={isSubmitButtonDisabled}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Asignarse al curso
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
