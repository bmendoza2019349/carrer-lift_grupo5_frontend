export const validateCodigo = (codigo) => {
    const regex = /^\S{6,6}$/

    return regex.test(codigo)
}

export const validateCodigodMessage = 'El codigo debe contener 6 caracteres sin espacios'