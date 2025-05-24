const Joi = require("joi");

// Schema for validating listing input
module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required().messages({
            'string.empty': 'Title is required.',
        }),
        description: Joi.string().required().messages({
            'string.empty': 'Description is required.',
        }),
        location: Joi.string().required().messages({
            'string.empty': 'Location is required.',
        }),
        country: Joi.string().required().messages({
            'string.empty': 'Country is required.',
        }),
        // image: Joi.object({
        //     filename: Joi.string().required().messages({
        //         'string.empty': 'Image filename is required.',
        //     }),
        //     url: Joi.string().required().uri().messages({
        //         'string.empty': 'Image URL is required.',
        //         'string.uri': 'Image URL must be a valid URI.',
        //     }),
        // }).required().messages({
        //     'any.required': 'Image is required.',
        // }),
        price: Joi.number().required().min(0).messages({
            'number.base': 'Price must be a number.',
            'number.min': 'Price cannot be negative.',
            'any.required': 'Price is required.',
        }),
    }).required()
});

// Schema for validating review input
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5).messages({
            'number.base': 'Rating must be a number.',
            'number.min': 'Rating must be at least 1.',
            'number.max': 'Rating cannot exceed 5.',
            'any.required': 'Rating is required.',
        }),
        comment: Joi.string().required().messages({
            'string.empty': 'Comment is required.',
        }),
    }).required()
});
