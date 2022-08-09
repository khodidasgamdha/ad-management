import * as Yup from "yup";

const validationSchema = Yup.object({
    newPassword: Yup.string().required().label("New Password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required()
        .label("Confirm Password"),
});

export default validationSchema;
