export const validateDescription = (descripcion) => {
    return descripcion && descripcion.length >= 10 && descripcion.length <= 200
}

export const descriptionValidateMessage = 'La descripción debe de tener entre 10 y 200 caracteres'

