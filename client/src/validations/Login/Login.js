import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup.string().email().required().label("Email address"),
    password: Yup.string().min(3).max(20).required().label("Password"),
});

export default validationSchema;
