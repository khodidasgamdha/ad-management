import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    campaignName: Yup.string().required("Campaign Name is required."),
    targetingMethod: Yup.string().required("Targeting Method is required."),
    creativeType: Yup.string().required("Creative Type is required."),
    campaignGoalType: Yup.string().required("Creative Goal is required."),
    performanceGoalType: Yup.string().required("Performance Goal is required."),
    startDate: Yup.string().required("Start Date is required."),
    endDate: Yup.string().required("End Date is required."),
});

export default validationSchema;
