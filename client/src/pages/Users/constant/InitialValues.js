export const userModelInitialValues = {
    name: "",
    email: "",
    password: "",
    roles: [],
    clients: [],
};

export const passwordInitialValues = {
    newPassword: "",
    confirmPassword: "",
};

export const userDetailInitialValues = (data) => ({
    name: data?.name || "",
    email: data?.email || "",
    password: data?.password || "",
    roles: data?.access_info.roles || "",
    state: data?.state || "",
    clients: data?.access_info.clients.map((c) => c.id) || "",
});