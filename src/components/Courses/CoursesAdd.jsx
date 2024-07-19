import { useCourses } from "../../shared/hooks";
import {
    validateDescription,
    descriptionValidateMessage,
    validateNameCourse,
    nameCourseValidationMessage, validationAvatarUrl,
    avatarUrlValidationMessage
} from "../../shared/validators";
import { Input } from '../input/Input'
import { useState } from "react";

export const CoursesAdd = () => {
    const { post, loading } = useCourses()
    const [formState, setFormState] = useState( {
        nameCourse: {
            value: '',
            isValid: false,
            showError: false,
        },
        descripcion: {
            value: '',
            isValid: false,
            showError: false,
        },
        img: {
            value: '',
            isValid: false,
            showError: false,
        }
    } )


    const handleInputValueChange = ( value, field ) => {
        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        } ) );
    };

    const handleInputValidationOnBlur = ( value, field ) => {
        let isValid = false;
        switch ( field ) {
            case 'nameCourse':
                isValid = validateNameCourse( value );
                break;
            case 'descripcion':
                isValid = validateDescription( value );
                break;
            case 'img':
                isValid = validationAvatarUrl( value );
                break;
            default:
                break;
        }

        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        } ) );
    }

    const handleCourseAdd = ( event ) => {
        event.preventDefault();
        const nuevoCurso = {
            nameCourse: formState.nameCourse.value,
            descripcion: formState.descripcion.value,
            img: formState.img.value
        }
        post( nuevoCurso )
    }

    const isSubmitButtonDisabled = loading ||
        !formState.nameCourse.isValid ||
        !formState.descripcion.isValid ||
        !formState.img.isValid;

    return (
        <>
            <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Agregar Cursos</h1>
                <form onSubmit={handleCourseAdd} className="flex flex-col">
                    <div className="flex flex-col mb-4">
                        <Input
                            field="nameCourse"
                            label="Nombre del Curso"
                            placeholder='Curso 123'
                            value={formState.nameCourse.value || ''}
                            onChangeHandler={handleInputValueChange}
                            onBlurHandler={handleInputValidationOnBlur}
                            validationMessage={nameCourseValidationMessage}
                            type='text'
                            showErrorMessage={false}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <Input
                            field="descripcion"
                            label="Descripción"
                            placeholder='Lorem ipsum dolor sit amet'
                            value={formState.descripcion.value || ''}
                            onChangeHandler={handleInputValueChange}
                            onBlurHandler={handleInputValidationOnBlur}
                            validationMessage={descriptionValidateMessage}
                            type='text'
                            showErrorMessage={false}
                            textarea={true}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <Input
                            field="img"
                            label="Imágen del Curso"
                            placeholder='https://www.google.com'
                            value={formState.img.value || ''}
                            onChangeHandler={handleInputValueChange}
                            onBlurHandler={handleInputValidationOnBlur}
                            validationMessage={avatarUrlValidationMessage}
                            type='text'
                            showErrorMessage={false}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitButtonDisabled}
                        className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? 'Procesando...' : 'Curso Agregado'}
                    </button>
                </form>
            </div>
        </>
    )

}

