import * as Yup from "yup";

const validationSchema = Yup.object({
    currentPassword: Yup.string().required().label("Current Password"),
    newPassword: Yup.string().min(5).max(20).required().label("New Password"),
    confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .min(5)
        .max(20)
        .required()
        .label("New Password"),
});

export default validationSchema;
