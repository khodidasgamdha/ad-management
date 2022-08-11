export const Months = [
    { value: "Jan", key: "Jan" },
    { value: "Feb", key: "Feb" },
    { value: "Mar", key: "Mar" },
    { value: "Apr", key: "Apr" },
    { value: "May", key: "May" },
    { value: "Jun", key: "Jun" },
    { value: "Jul", key: "Jul" },
    { value: "Aug", key: "Aug" },
    { value: "Sep", key: "Sep" },
    { value: "Oct", key: "Oct" },
    { value: "Nov", key: "Nov" },
    { value: "Dec", key: "Dec" },
];

export const AdCategory = [
    { value: "Stories", key: "STORIES" },
    { value: "Weather", key: "WEATHER" },
    { value: "In Stream", key: "IN_STREAM" },
    { value: "Bumper", key: "BUMPER" },
    { value: "Discovery", key: "DISCOVERY" },
    { value: "Flight", key: "FLIGHT" },
    { value: "OTA", key: "OTA" },
    { value: "Sequence", key: "SEQUENCE" },
];

export const TargetingMethod = [
    { value: "Audience", key: "AUDIENCE" },
    { value: "List", key: "LIST" },
    { value: "Lookalike", key: "LOOKALIKE" },
    { value: "Retargeting", key: "RETARGETING" },
    { value: "Dynamic Retargeting", key: "DYNAMIC_RETARGETING" },
    { value: "Placement", key: "PLACEMENT" },
    { value: "Keyword", key: "KEYWORD" },
];

export const CreativeType = [
    { value: "Static", key: "STATIC" },
    { value: "Carousel", key: "CAROUSEL" },
    { value: "Video", key: "VIDEO" },
    { value: "Cinemagraph", key: "CINEMAGRAPH" },
    { value: "Text", key: "TEXT" },
    { value: "Dynamic Static", key: "DYNAMIC_STATIC" },
    { value: "Dynamic Video", key: "DYNAMIC_VIDEO" },
    { value: "HTML", key: "HTML" },
    { value: "GIF", key: "GIF" },
    { value: "Audio", key: "AUDIO" },
];

export const CreativeGoal = [
    { value: "Unspecified", key: "CAMPAIGN_GOAL_TYPE_UNSPECIFIED" },
    { value: "App Install", key: "CAMPAIGN_GOAL_TYPE_APP_INSTALL" },
    { value: "Brand Awareness", key: "CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS" },
    { value: "Offline Action", key: "CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION" },
    { value: "Online Action", key: "CAMPAIGN_GOAL_TYPE_ONLINE_ACTION" },
];

export const PerformanceGoal = [
    { value: "CPM", key: "PERFORMANCE_GOAL_TYPE_CPM" },
    { value: "CPC", key: "PERFORMANCE_GOAL_TYPE_CPC" },
    { value: "CPA", key: "PERFORMANCE_GOAL_TYPE_CPA" },
    { value: "CPIAVC", key: "PERFORMANCE_GOAL_TYPE_CPIAVC" },
    { value: "CTR", key: "PERFORMANCE_GOAL_TYPE_CTR" },
    { value: "Viewability", key: "PERFORMANCE_GOAL_TYPE_VIEWABILITY" },
    { value: "Other", key: "PERFORMANCE_GOAL_TYPE_OTHER" },
];

export const creativeTypes = [
    { key: "UNSPECIFIED", name: "Unspecified" },
    { key: "STANDARD", name: "Standard" },
    { key: "EXPANDABLE", name: "Expandable" },
    { key: "VIDEO", name: "Video" },
    { key: "NATIVE", name: "Native" },
    { key: "TEMPLATED_APP_INSTALL", name: "Templated App Install" },
    { key: "NATIVE_SITE_SQUARE", name: "Native Site Square" },
    { key: "TEMPLATED_APP_INSTALL_INTERSTITIAL", name: "Templated App Install Interstitial" },
    { key: "LIGHTBOX", name: "Lightbox" },
    { key: "NATIVE_APP_INSTALL", name: "Native App Install" },
    { key: "NATIVE_APP_INSTALL_SQUARE", name: "Native App Install Square" },
    { key: "AUDIO", name: "Audio" },
    { key: "PUBLISHER_HOSTED", name: "Publisher Hosted" },
    { key: "NATIVE_VIDEO", name: "Native Video" },
    { key: "TEMPLATED_APP_INSTALL_VIDEO", name: "Templated App Install Video" },
];

export const hostingSource = [
    { key: "UNSPECIFIED", name: "Unspecified" },
    { key: "CM", name: "Cm" },
    { key: "THIRD_PARTY", name: "Third Party" },
    { key: "HOSTED", name: "Hosted" },
    { key: "RICH_MEDIA", name: "Rich Media" },
];

export const facebookAccountIds = [
    { key: "SHOP_NOW", name: "Shop now" },
    { key: "BOOK_TRAVEL", name: "Book travel" },
    { key: "LEARN_MORE", name: "Learn more" },
    { key: "SIGN_UP", name: "Sign up" },
    { key: "DOWNLOAD", name: "Download" },
    { key: "WATCH_MORE", name: "Watch more" },
    { key: "CALL_NOW", name: "Call now" },
    { key: "APPLY_NOW", name: "Apply now" },
    { key: "GET_OFFER", name: "Get offer" },
    { key: "BUY_TICKETS", name: "Buy tickets" },
    { key: "SUBSCRIBE", name: "Subscribe" },
    { key: "GET_QUOTE", name: "Get quote" },
    { key: "CONTACT_US", name: "Contact us" },
    { key: "ORDER_NOW", name: "Order now" },
    { key: "REQUEST_TIME", name: "Request time" },
    { key: "GET_SHOWTIMES", name: "Get showtimes" },
    { key: "LISTEN_NOW", name: "Listen now" },
    { key: "WHATSAPP_MESSAGE", name: "Whatsapp message" },
    { key: "SEE_MORE", name: "See more" },
    { key: "PAY_TO_ACCESS", name: "Pay to access" },
];

export const DeviceOptions = [
    { value: "Mobile", key: "MOBILE" },
    { value: "Desktop", key: "DESKTOP" },
    { value: "Both Device", key: "BITH_DEVICE" },
    { value: "Connect TV", key: "CONNECT_TV" },
];

export const OptimizationGoalOptions = [
    { value: "Impressions", key: "IMPRESSIONS" },
    { value: "Post engagement", key: "POST_ENGAGEMENT" },
    { value: "Link clicks", key: "LINK_CLICKS" },
    { value: "Reach", key: "REACH" },
];
