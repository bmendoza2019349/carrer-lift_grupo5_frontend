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
        <div className="mini-ventana">
            <form>
                <Input
                    field="codigo"
                    label="Codigo:"
                    value={formState.codigo.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.codigo.showError}
                    validationMessage={validateCodigodMessage}
                />
                <button onClick={handleAssingCourses} disabled={isSubmitButtonDisabled}>
                    Asignarse al curso
                </button>
            </form>
        </div>
    )
}
