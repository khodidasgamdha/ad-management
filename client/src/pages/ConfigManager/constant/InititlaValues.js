export const configModelInitialValues = {
    key: "",
    value: "",
};

export const clientDetaiInitialValues = (data) => ({
    key: data?.key || "",
    value: JSON.stringify(data?.value) || "",
    state: data?.state || "",
});
