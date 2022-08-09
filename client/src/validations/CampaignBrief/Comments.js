import * as Yup from "yup";

const validationSchema = Yup.object({
    comment: Yup.string().required().label("Comment"),
});

export default validationSchema;
