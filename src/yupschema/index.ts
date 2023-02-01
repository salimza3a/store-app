import * as yup from 'yup'

// const passwordSchema = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\\^&\\*])(?=.{5,16})/;
export const signInSchema = yup.object().shape({
    username: yup.string().required('Required'),
    password: yup.string().required('Required')
})


export const signUpSchema = yup.object().shape({
    firstName: yup.string().required('Required').min(5),
    lastName: yup.string().required('Required').min(5),
    username: yup.string().required('Required'),
    password: yup.string().required('Required')

})