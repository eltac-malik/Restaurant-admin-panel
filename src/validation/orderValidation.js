import {object,string} from 'yup';

let validation = object({
    table: string().required(),
    employee: string().required()
})  

export default validation;