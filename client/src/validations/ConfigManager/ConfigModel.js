import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    key: Yup.string().required().label("Key"),
    value: Yup.string().required().label("Value"),
});

export default validationSchema;
