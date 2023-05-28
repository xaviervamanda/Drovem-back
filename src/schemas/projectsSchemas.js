import joi from "joi";

export const projectDeliverySchema = joi.object({
    link: joi.string().uri().required()
})