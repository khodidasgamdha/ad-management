export const clientDetails = (data) => ({
    companyName: data?.detail?.companyName || "",
    contactName: data?.detail?.contactName || "",
    email: data?.detail?.email || "",
    description: data?.description || "",
    phone: data?.detail?.phone || "",
    industry: data?.detail?.industry || "",
    address: data?.detail?.address || "",
    productAndServices: data?.detail?.productAndServices || "",
    facebookAccountId: data?.fb_config?.fb_account_id || "",
    facebookPageId: data?.fb_config?.fb_page_id || "",
});
