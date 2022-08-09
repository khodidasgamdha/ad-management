import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    campaignName: Yup.string().required("Campaign Name is required."),
    targetingMethod: Yup.string().required("Targeting Method is required."),
    creativeType: Yup.string().required("Creative Type is required."),
});

export default validationSchema;
