import joi from "joi";

export const projectDeliverySchema = joi.object({
    className: joi.string().required(),
    studentName: joi.string().required(),
    projectName: joi.string().required(),
    link: joi.string().uri().required()
})