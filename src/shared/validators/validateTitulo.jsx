export const validateTitle = (nameCourse) => {
    return nameCourse && nameCourse.length >= 4 && nameCourse.length <= 30;
};

export const validateTitleMessage = 'El nombre debe de tener entre 4 y 30 caracteres'