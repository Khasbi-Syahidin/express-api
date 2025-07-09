import { body } from "express-validator";

export const validatorCreateUser = [
    body('name')
        .notEmpty().withMessage('name wajib diisi')
        .isLength({ max: 50 }).withMessage('name maksimal 50 karakter'),

    body('email')
        .notEmpty().withMessage('email wajib diisi')
        .isEmail().withMessage('email tidak valid'),

    body('age')
        .optional()
        .isInt({ min: 0 }).withMessage('age harus berupa angka positif'),

    body('photo')
        .optional()
        .isString().withMessage('photo harus berupa teks'),
];

export const validatorUpdateUser = [
    body('name')
        .optional()
        .isLength({ max: 50 }).withMessage('name maksimal 50 karakter'),

    body('email')
        .optional()
        .isEmail().withMessage('email tidak valid'),

    body('age')
        .optional()
        .isInt({ min: 0 }).withMessage('age harus berupa angka positif'),

    body('photo')
        .optional()
        .isString().withMessage('photo harus berupa teks'),
];
