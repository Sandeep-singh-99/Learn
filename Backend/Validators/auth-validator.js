const {z} = require("zod")

// creating an object schema

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"}).trim().min(3, {
        message: "Name must be at least of 3 character"
    })
    .max(255, {message: "Name must not be more than 255 character"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(7, {
        message: "email must be at least of 7 character"
    })
    .max(255,{message: "email must not be more than 255 character"}),

    phone: z
    .string({required_error: "Phone no is required"})
    .trim()
    .min(10, {
        message: "phone must be at least of 10 character"
    })
    .max(20, {message: "phone must not be more than 20 character"}),

    password: z
    .string({required_error: "password is required"})
    .trim()
    .min(7, {
        message: "password must be at least of 7 character"
    })
    .max(20, {message: "password must not be more than 20 character"}),
})

module.exports = signupSchema