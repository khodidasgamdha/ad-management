export const CreativeUnit = [
    { label: "Display Ad", value: "Display" },
    { label: "Text", value: "Text" },
    { label: "Video", value: "Video" },
    { label: "GIF", value: "GIF" },
    { label: "Expanding", value: "Expanding" },
    { label: "HTML5", value: "HTML5" },
    { label: "Instant", value: "Instant" },
    { label: "Experience", value: "Experience" },
];

export const CreativeSizes = [
    { label: "300 x 600 (Display)", value: "Display300600" },
    { label: "728 x 90 (Display)", value: "Display728" },
    { label: "320 x 50 (Display)", value: "Display320" },
    { label: "300 x 250 (Display)", value: "Display300" },
    { label: "160 x 600 (Display)", value: "Display160" },
    { label: "320 x 100 (Display)", value: "Display320100" },
    { label: "336 x 280 (Display)", value: "Display336" },
    { label: "970 x 250 (Display)", value: "Display970" },
    { label: "100 x 100 (Native Logo)", value: "Native100" },
    { label: "627 x 627 (Native Square)", value: "Native627" },
    { label: "1200 x 627 (Native Header)", value: "Native1200" },
    { label: "1200 x 628 (Facebook Display)", value: "FacebookDisplay1200" },
    { label: "1200 x 1200 (Facebook Carousel)", value: "FacebookCarousel1200" },
    { label: "1080 x 1080 (Instagram Display)", value: "InstagramDisplay1080" },
    { label: "1080 x 1080 (Instagram Carousel)", value: "InstagramCarousel1080" },
    { label: "1920 x 1080 (Video)", value: "Video1920" },
    { label: "SRT Files (Video Captions)", value: "SRT" },
    { label: "Text (Search)", value: "Text" },
];

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
    {
        key: "TEMPLATED_APP_INSTALL_INTERSTITIAL",
        name: "Templated App Install Interstitial",
    },
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

export const BrandAwarenessOptimizationGoalOptions = [
    { value: "Impressions", key: "IMPRESSIONS" },
    { value: "Post engagement", key: "POST_ENGAGEMENT" },
    { value: "Link clicks", key: "LINK_CLICKS" },
    { value: "Reach", key: "REACH" },
];

export const LinkClicksOptimizationGoalOptions = [
    { value: "Impressions", key: "IMPRESSIONS" },
    { value: "Post engagement", key: "POST_ENGAGEMENT" },
    { value: "Offsite conversions", key: "OFFSITE_CONVERSIONS" },
    { value: "Link clicks", key: "LINK_CLICKS" },
    { value: "Reach", key: "REACH" },
    { value: "Landing Page Views", key: "LANDING_PAGE_VIEWS" },
    { value: "App Installs", key: "APP_INSTALLS" },
    { value: "Engaged Users", key: "ENGAGED_USERS" },
];

export const VideoViewsOptimizationGoalOptions = [
    { value: "Thruplay", key: "THRUPLAY" },
];

export const LeadGenerationOptimizationGoalOptions = [
    { value: "Link Clicks", key: "LINK_CLICKS" },
    { value: "Quality Lead", key: "QUALITY_LEAD" },
    { value: "Quality Call", key: "QUALITY_CALL" },
    { value: "Lead Generation", key: "LEAD_GENERATION" },
];

export const ConversionsOptimizationGoalOptions = [
    { value: "Impressions", key: "IMPRESSIONS" },
    { value: "Post engagement", key: "POST_ENGAGEMENT" },
    { value: "Offsite conversions", key: "OFFSITE_CONVERSIONS" },
    { value: "Link clicks", key: "LINK_CLICKS" },
    { value: "Reach", key: "REACH" },
    { value: "Value", key: "VALUE" },
    { value: "Landing Page Views", key: "LANDING_PAGE_VIEWS" },
    { value: "Conversations", key: "CONVERSATIONS" },
];

export const EventType = [
    { value: "Rate", key: "RATE" },
    { value: "Tutorial Completion", key: "TUTORIAL_COMPLETION" },
    { value: "Contact", key: "CONTACT" },
    { value: "Customize Product", key: "CUSTOMIZE_PRODUCT" },
    { value: "Donate", key: "DONATE" },
    { value: "Find Location", key: "FIND_LOCATION" },
    { value: "Schedule", key: "SCHEDULE" },
    { value: "Start Trial", key: "START_TRIAL" },
    { value: "Submit Application", key: "SUBMIT_APPLICATION" },
    { value: "Subscribe", key: "SUBSCRIBE" },
    { value: "Add To Cart", key: "ADD_TO_CART" },
    { value: "Add To Wishlist", key: "ADD_TO_WISHLIST" },
    { value: "Initiated Checkout", key: "INITIATED_CHECKOUT" },
    { value: "Add Payment Info", key: "ADD_PAYMENT_INFO" },
    { value: "Purchase", key: "PURCHASE" },
    { value: "Lead", key: "LEAD" },
    { value: "Complete Registration", key: "COMPLETE_REGISTRATION" },
    { value: "Content View", key: "CONTENT_VIEW" },
    { value: "Search", key: "SEARCH" },
    { value: "Service Booking Request", key: "SERVICE_BOOKING_REQUEST" },
    {
        value: "Messaging Conversation Started 7d",
        key: "MESSAGING_CONVERSATION_STARTED_7D",
    },
    { value: "Level Achieved", key: "LEVEL_ACHIEVED" },
    { value: "Achievement Unlocked", key: "ACHIEVEMENT_UNLOCKED" },
    { value: "Spent Credits", key: "SPENT_CREDITS" },
    { value: "Listing Interaction", key: "LISTING_INTERACTION" },
    { value: "D2 Retention", key: "D2_RETENTION" },
    { value: "D7 Retention", key: "D7_RETENTION" },
    { value: "Other", key: "OTHER" },
];

export const ProductcatalogsalesOptimizationGoalOptions = [
    { value: "Impressions", key: "IMPRESSIONS" },
    { value: "Post engagement", key: "POST_ENGAGEMENT" },
    { value: "Offsite conversions", key: "OFFSITE_CONVERSIONS" },
    { value: "Link clicks", key: "LINK_CLICKS" },
    { value: "Reach", key: "REACH" },
    { value: "Value", key: "VALUE" },
    { value: "Conversations", key: "CONVERSATIONS" },
];

export const CampaignBudgetOptions = [
    {
        name: "detail.campaignBudget.googleSearchAds",
        label: "Google Search Ads",
        value: "Google Search Ads",
    },
    {
        name: "detail.campaignBudget.bingSearchAds",
        label: "Bing Search Ads",
        value: "Bing Search Ads",
    },
    {
        name: "detail.campaignBudget.fbAds",
        label: "Facebook Ads",
        value: "Facebook Ads",
    },
    {
        name: "detail.campaignBudget.instaAds",
        label: "Instagram Ads",
        value: "Instagram Ads",
    },
    {
        name: "detail.campaignBudget.displayAds",
        label: "Display Ads",
        value: "Display Ads",
    },
    {
        name: "detail.campaignBudget.twitterAds",
        label: "Twitter Ads",
        value: "Twitter Ads",
    },
    {
        name: "detail.campaignBudget.nativeAds",
        label: "Native Ads",
        value: "Native Ads",
    },
    {
        name: "detail.campaignBudget.spotifyAudioAds",
        label: "Spotify Audio Ads",
        value: "Spotify Audio Ads",
    },
    {
        name: "detail.campaignBudget.pinterestAds",
        label: "Pinterest Ads",
        value: "Pinterest Ads",
    },
    {
        name: "detail.campaignBudget.quoraAds",
        label: "Quora Ads",
        value: "Quora Ads",
    },
    {
        name: "detail.campaignBudget.displayVideo",
        label: "Video (Display)",
        value: "Video (Display)",
    },
    {
        name: "detail.campaignBudget.youtubeVideo",
        label: "Video (YouTube)",
        value: "Video (YouTube)",
    },
    {
        name: "detail.campaignBudget.fbVideo",
        label: "Video (Facebook)",
        value: "Video (Facebook)",
    },
    {
        name: "detail.campaignBudget.instaVideo",
        label: "Video (Instagram)",
        value: "Video (Instagram)",
    },
    {
        name: "detail.campaignBudget.overTheTop",
        label: "Over The Top",
        value: "Over The Top",
    },
    {
        name: "detail.campaignBudget.retargetting.googleSearchRt",
        label: "Google Search RT",
        value: "Google Search RT",
    },
    {
        name: "detail.campaignBudget.retargetting.bingSearchRt",
        label: "Bing Search RT",
        value: "Bing Search RT",
    },
    {
        name: "detail.campaignBudget.retargetting.fbRt",
        label: "Facebook RT",
        value: "Facebook RT",
    },
    {
        name: "detail.campaignBudget.retargetting.instaRt",
        label: "Instagram RT",
        value: "Instagram RT",
    },
    {
        name: "detail.campaignBudget.retargetting.displayRt",
        label: "Display RT",
        value: "Display RT",
    },
    {
        name: "detail.campaignBudget.retargetting.linkedinRt",
        label: "Linkedin RT",
        value: "Linkedin RT",
    },
    {
        name: "detail.campaignBudget.retargetting.nativeRt",
        label: "Native RT",
        value: "Native RT",
    },
    {
        name: "detail.campaignBudget.retargetting.pinterestRt",
        label: "Pinterest RT",
        value: "Pinterest RT",
    },
    {
        name: "detail.campaignBudget.retargetting.videoRt",
        label: "Video RT",
        value: "Video RT",
    },
    {
        name: "detail.campaignBudget.other.hotelAds",
        label: "Hotel Ads",
        value: "Hotel Ads",
    },
    {
        name: "detail.campaignBudget.other.travelAds",
        label: "Travel Ads",
        value: "Travel Ads",
    },
    {
        name: "detail.campaignBudget.other.shoppingAds",
        label: "Shopping Ads",
        value: "Shopping Ads",
    },
    {
        name: "detail.campaignBudget.other.fbEvents",
        label: "Facebook Events",
        value: "Facebook Events",
    },
    {
        name: "detail.campaignBudget.other.fbLookalike",
        label: "Facebook Lookalike",
        value: "Facebook Lookalike",
    },
    {
        name: "detail.campaignBudget.other.instaLookalike",
        label: "Instagram Lookalike",
        value: "Instagram Lookalike",
    },
    {
        name: "detail.campaignBudget.other.displayList",
        label: "Display List",
        value: "Display List",
    },
    {
        name: "detail.campaignBudget.other.fbList",
        label: "Facebook List",
        value: "Facebook List",
    },
    {
        name: "detail.campaignBudget.other.instaList",
        label: "Instagram List",
        value: "Instagram List",
    },
    {
        name: "detail.campaignBudget.other.weatherAds",
        label: "Weather Ads",
        value: "Weather Ads",
    },
    {
        name: "detail.campaignBudget.other.linkedinInmail",
        label: "Linkedin InMail",
        value: "Linkedin InMail",
    },
    {
        name: "detail.campaignBudget.other.linkedinSponsored",
        label: "Linkedin Sponsored",
        value: "Linkedin Sponsored",
    },
    {
        name: "detail.campaignBudget.other.fbLead",
        label: "Facebook Lead",
        value: "Facebook Lead",
    },
    {
        name: "detail.campaignBudget.other.instaLead",
        label: "Instagram Lead",
        value: "Instagram Lead",
    },
    {
        name: "detail.campaignBudget.other.instantExperience",
        label: "Instant Experience",
        value: "Instant Experience",
    },
];

export const FacebookAdSize = [
    { label: "320X100", value: "D320X100" },
    { label: "320X50", value: "D320X50" },
    { label: "300X250", value: "D300X250" },
    { label: "970X250", value: "D970X250" },
    { label: "728X90", value: "D728X90" },
    { label: "336X280", value: "D336X280" },
    { label: "300X600", value: "D300X600" },
    { label: "160X600", value: "D160X600" },
];
