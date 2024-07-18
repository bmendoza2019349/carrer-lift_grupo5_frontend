export const validateUsername = (username) => {
    return username && username.length >= 4 && username.length <= 20
}

export const validateUsernameMessage = 'El nombre debe tener entre 4 y 8 caracteres sin espacios.'