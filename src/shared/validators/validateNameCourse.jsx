export const validateNameCourse = ( nameCourse ) => {
    return nameCourse.length >= 10 && nameCourse.length <= 35
}

export const nameCourseValidationMessage = 'El nombre del curso debe contener de 10 a 15 caracteres'