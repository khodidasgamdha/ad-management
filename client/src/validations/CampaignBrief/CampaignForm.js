import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required().label("Name"),
    startDate: Yup.string().required().label("Start date"),
    endDate: Yup.string().required().label("End date"),
    detail: Yup.object({
        industryBasic: Yup.object({
            companyName: Yup.string().required().label("Company name"),
            phone: Yup.string()
                .required()
                .min(10)
                .max(13)
                .label("Phone number"),
        })
            .required()
            .label("Industry Basic"),
    })
        .required()
        .label("Details"),
});

export default validationSchema;
