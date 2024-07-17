export const validateName = ( name ) => {
    const regex = /^\S{3,20}$/
    return regex.test( name )
}

export const nameValidationMessage = 'Por favor ingresa un nombre'