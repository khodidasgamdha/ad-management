import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    campaignName: Yup.string().required("Campaign Name is required."),
    targetingMethod: Yup.string().required("Targeting Method is required."),
    location: Yup.string().required("Location is required."),
    audience: Yup.string().required("Audience is required."),
    device: Yup.string().required("Device is required."),
    creativeType: Yup.string().required("Creative Type is required."),
    adName: Yup.string().required("Ad Name Type is required."),
    startDate: Yup.string().required("Start Date Type is required."),
    endDate: Yup.string().required("End Date Type is required."),
    bidAmount: Yup.string().required("Bid Amount Type is required."),
    lifeTimeBudget: Yup.string().required("Lifetime Budget Type is required."),
    optimizationGoal: Yup.string().required(
        "Optimization Goal Type is required."
    ),
    // eventType: Yup.string().required("Event Type Type is required."),
    // poxelId: Yup.string().required("Pixel Id Type is required."),
});

export default validationSchema;
