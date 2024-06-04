// Validar que el campo no esté vacío
export const validateNotEmpty = (value) => {
    return value.trim() !== '';
};
export const notEmptyValidationMessage = 'Este campo no puede estar vacío.';