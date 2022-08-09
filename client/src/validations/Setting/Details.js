import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup.string().email().required().label("Email address"),
    name: Yup.string().required().label("Name"),
});

export default validationSchema;
