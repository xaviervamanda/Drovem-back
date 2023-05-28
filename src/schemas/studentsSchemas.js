import joi from "joi";

export const registerStudentSchema = joi.object({
    name: joi.string().required(),
    cpf: joi.string().regex(/^[0-9]{11}$/)
    .messages({'string.pattern.base': `CPF must be a string with 11 numeric digits.`}).required(),
    email: joi.string().email({ tlds: { allow: false } }).required(),
    image: joi.string().uri().required(),
    className: joi.string().required()
})