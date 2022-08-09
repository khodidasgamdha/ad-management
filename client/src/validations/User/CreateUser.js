import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email().required().label("Email address"),
    password: Yup.string().required().label("Password"),
    roles: Yup.array().required().label("Roles"),
    clients: Yup.array().label("Clients"),
});

export default validationSchema;
