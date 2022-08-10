import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email().required().label("Email address"),
    roles: Yup.array().required().min(1).label("Roles"),
    clients: Yup.array().min(1).label("Clients"),
});

export default validationSchema;
