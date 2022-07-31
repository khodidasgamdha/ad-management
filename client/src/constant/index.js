import { v4 as uuidv4 } from 'uuid'

export const Roles = [
  {
    id: uuidv4(),
    title: 'Admin',
    value: 'Admin',
  },
  {
    id: uuidv4(),
    title: 'Campaign Manager',
    value: 'CampaignManager',
  },
  {
    id: uuidv4(),
    title: 'Client',
    value: 'Client',
  },
  {
    id: uuidv4(),
    title: 'Account Manager',
    value: 'AccountManager',
  },
]

export const States = [
  {
    id: uuidv4(),
    title: 'Active',
    value: 'ACTIVE',
  },
  {
    id: uuidv4(),
    title: 'Inactive',
    value: 'INACTIVE',
  },
  {
    id: uuidv4(),
    title: 'On Hold',
    value: 'ON_HOLD',
  },
]

export const CAMPAIGN_BRIEFS_TABS = [
  {
    id: uuidv4(),
    title: 'Details',
  },
  {
    id: uuidv4(),
    title: 'FB Campaign',
  },
  {
    id: uuidv4(),
    title: 'FB Ad Sets',
  },
  {
    id: uuidv4(),
    title: 'DV360 Campaign',
  },
  {
    id: uuidv4(),
    title: 'DV360 IOs',
  },
//   {
//     id: uuidv4(),
//     title: 'Comments',
//   },
  {
    id: uuidv4(),
    title: 'AD uploads',
  },
  {
    id: uuidv4(),
    title: 'Audit logs',
  },
]

export const CampaignPriceModel = [
  { value: 'CostPerClick', label: 'Cost per Click (CPC)' },
  { value: 'CostPer1000', label: 'Cost per Thousand (CPM)' },
  { value: 'CostPerEngage', label: 'Cost per Engagement (CPE)' },
  { value: 'CostPerView', label: 'Cost per View (CPV)' },
]

export const CampaignKPI = [
  { value: 'Reach', label: 'Reach' },
  { value: 'CTR', label: 'CTR' },
  { value: 'CPM', label: 'CPM' },
  { value: 'CPC', label: 'CPC' },
  { value: 'CPA', label: 'CPA' },
]

export const CampaignObjective = [
  { value: 'BRAND_AWARENESS', label: 'Brand Awareness' },
  { value: 'REACH', label: 'Reach' },
  { value: 'LINK_CLICKS', label: 'Link Clicks' },
  { value: 'POST_ENGAGEMENT', label: 'Post engagement' },
  { value: 'VIDEO_VIEWS', label: 'Video views' },
  { value: 'LEAD_GENERATION', label: 'Lead generation' },
  { value: 'CONVERSIONS', label: 'Conversions' },
  { value: 'PRODUCT_CATALOG_SALES', label: 'Product catalog sales' },
]

export const CAMPAIGN_BUDGET = [
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.googleSearchAds',
    placeholder: 'Google Search Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.bingSearchAds',
    placeholder: 'Bing Search Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.fbAds',
    placeholder: 'Facebook Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.instaAds',
    placeholder: 'Instagram Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.displayAds',
    placeholder: 'Display Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.twitterAds',
    placeholder: 'Twitter Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.nativeAds',
    placeholder: 'Native Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.spotifyAudioAds',
    placeholder: 'Spotify Audio Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.pinterestAds',
    placeholder: 'Pinterest Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.quoraAds',
    placeholder: 'Quora Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.displayVideo',
    placeholder: 'Video (Display)',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.youtubeVideo',
    placeholder: 'Video (YouTube)',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.fbVideo',
    placeholder: 'Video (Facebook)',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.instaVideo',
    placeholder: 'Video (Instagram)',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.overTheTop',
    placeholder: 'Over The Top',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.googleSearchRt',
    placeholder: 'Google Search RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.bingSearchRt',
    placeholder: 'Bing Search RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.fbRt',
    placeholder: 'Facebook RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.instaRt',
    placeholder: 'Instagram RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.displayRt',
    placeholder: 'Display RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.linkedinRt',
    placeholder: 'Linkedin RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.nativeRt',
    placeholder: 'Native RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.pinterestRt',
    placeholder: 'Pinterest RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.retargetting.videoRt',
    placeholder: 'Video RT',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.hotelAds',
    placeholder: 'Hotel Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.travelAds',
    placeholder: 'Travel Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.shoppingAds',
    placeholder: 'Shopping Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.fbEvents',
    placeholder: 'Facebook Events',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.fbLookalike',
    placeholder: 'Facebook Lookalike',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.instaLookalike',
    placeholder: 'Instagram Lookalike',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.displayList',
    placeholder: 'Display List',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.fbList',
    placeholder: 'Facebook List',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.instaList',
    placeholder: 'Instagram List',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.weatherAds',
    placeholder: 'Weather Ads',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.linkedinInmail',
    placeholder: 'Linkedin InMail',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.linkedinSponsored',
    placeholder: 'Linkedin Sponsored',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.fbLead',
    placeholder: 'Facebook Lead',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.instaLead',
    placeholder: 'Instagram Lead',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.other.instantExperience',
    placeholder: 'Instant Experience',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.custom',
    placeholder: 'Custom',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.total',
    placeholder: 'Total',
  },
  {
    id: uuidv4(),
    name: 'detail.campaignBudget.budgetAddOn',
    placeholder: 'Budget Add On',
  },
]

export const CampaignAgeGroup = [
  { value: 'Eighteen', label: '18-24' },
  { value: 'TwentyFive', label: '25-34' },
  { value: 'ThirtyFive', label: '35-44' },
  { value: 'FortyFive', label: '45-54' },
  { value: 'FiftyFive', label: '55-64' },
  { value: 'SixtyFive', label: '65+' },
  { value: 'Unknown', label: 'Unknown' },
]

export const FamilyOption = [
  { value: 'Parent', label: 'Parent' },
  { value: 'NoParent', label: 'Not a parent' },
  { value: 'Unknown', label: 'Unknown' },
  { value: 'NA', label: 'n/a' },
]

export const IncomeOptionFbInstaUS = [
  { value: 'FiftyKMinus', label: '$50K-' },
  { value: 'FiftyKPlus', label: '$50K+' },
  { value: 'SeventyFiveKPlus', label: '$75K+' },
  { value: 'HundredKPlus', label: '$100K+' },
  { value: 'NA', label: 'n/a' },
]

export const IncomeOptionSearchDisplay = [
  { value: 'Top10', label: 'Top 10%' },
  { value: 'Eleven', label: '11-20%' },
  { value: 'TwentyOne', label: '21-30%' },
  { value: 'ThirtyOne', label: '31-40%' },
  { value: 'FortyOne', label: '41-50%' },
  { value: 'Lower50', label: 'Lower50%' },
]

export const TargettingOptionAffinity = [
  { value: 'Arts', label: 'Art & Theater Aficionados' },
  { value: 'Auto', label: 'Auto Enthusiasts' },
  { value: 'Avid', label: 'Avid Investors' },
  { value: 'Beauty', label: 'Beauty Mavens' },
  { value: 'Business', label: 'Business Professionals' },
  { value: 'Comics', label: 'Comics & Animation Fans' },
  { value: 'Cooking', label: 'Cooking Enthusiasts' },
  { value: 'DIY', label: 'Do-It-Yourselfers' },
  { value: 'Family', label: 'Family-Focussed' },
  { value: 'Fashion', label: 'Fashionistas' },
  { value: 'FastFood', label: 'Fast Food Cravers' },
  { value: 'Foodies', label: 'Foodies' },
  { value: 'Gamers', label: 'Gamers' },
  { value: 'Green', label: 'Green Living Enthusiasts' },
  { value: 'Health', label: 'Health & Fitness Buffs' },
  { value: 'Home', label: 'Home Decor Enthusiasts' },
  { value: 'Mobile', label: 'Mobile Enthusiasts' },
  { value: 'Movie', label: 'Movie Lovers' },
  { value: 'Music', label: 'Music Lovers' },
  { value: 'News', label: 'News Junkies & Avid Readers' },
  { value: 'Nightlife', label: 'Nightlife Enthusiasts' },
  { value: 'Outdoor', label: 'Outdoor Enthusiasts' },
  { value: 'Pet', label: 'Pet Lovers' },
  { value: 'Political', label: 'Political Junkies' },
  { value: 'Shoppers', label: 'Shoppers' },
  { value: 'Shutterbugs', label: 'Shutterbugs' },
  { value: 'Social', label: 'Social Media Enthusiasts' },
  { value: 'Sports', label: 'Sports Fans' },
  { value: 'TV', label: 'TV Lovers' },
  { value: 'Technophiles', label: 'Technophiles' },
  { value: 'Thrill', label: 'Thrill Seekers' },
  { value: 'Travel', label: 'Travel Buffs' },
]

export const TargettingOptionInMarket = [
  { value: 'Apparel', label: 'Apparel & Accessories' },
  { value: 'Autos', label: 'Autos & Vehicles' },
  { value: 'Baby', label: 'Baby & Children’s Products' },
  { value: 'Beauty', label: 'Beauty Products & Services' },
  { value: 'Business', label: 'Business Services' },
  { value: 'Computers', label: 'Computers & Peripherals' },
  { value: 'Consumer', label: 'Consumer Electronics' },
  { value: 'Dating', label: 'Dating Services' },
  { value: 'Education', label: 'Education' },
  { value: 'Employment', label: 'Employment' },
  { value: 'Financial', label: 'Financial Services' },
  { value: 'Gifts', label: 'Gifts & Occasions' },
  { value: 'Home', label: 'Home & Garden' },
  { value: 'Real', label: 'Real Estate' },
  { value: 'Software', label: 'Software' },
  { value: 'Sports', label: 'Sports & Fitness' },
  { value: 'Telecom', label: 'Telecom' },
  { value: 'Travel', label: 'Travel' },
]

export const TargettingOptionAutomative = [
  { value: 'Motorcycle', label: 'Motorcycle' },
  { value: 'Owners', label: 'Owners' },
  { value: 'Purchase', label: 'Purchase Type' },
  { value: 'NewBuyer', label: 'New Vehicle Buyers (near market)' },
  { value: 'NewShopper', label: 'New Vehicle Shoppers (in market)' },
  { value: 'UsedBuyer', label: 'Used Vehicle Buyers (in market)' },
]

export const TargettingOptionCharitable = [
  { value: 'All', label: 'All Charitable Donations' },
  { value: 'Animal', label: 'Animal Welfare' },
  { value: 'Arts', label: 'Arts & Culture' },
  { value: 'Cancer', label: 'Cancer Causess' },
  { value: 'Children', label: "Children's Causess" },
  { value: 'Environment', label: 'Environmental & Wildlife' },
  { value: 'Health', label: 'Health' },
  { value: 'Political', label: 'Political' },
  { value: 'Religious', label: 'Religious' },
  { value: 'Veterans', label: 'Veterans' },
  { value: 'World', label: 'World Relief' },
]

export const TargettingOptionExpat = [
  { value: 'Multiple', label: 'Multiple Countries' },
]

export const TargettingOptionJobRole = [
  { value: 'Corporate', label: 'Corporate Executives' },
  { value: 'Financial', label: 'Financial Professionals' },
  { value: 'Farmers', label: 'Farmers' },
]

export const TargettingOptionMobile = [
  { value: 'AllBrand', label: 'All Mobile Devices by Brand' },
  { value: 'AllOS', label: 'All Mobie Devices by OS' },
  { value: 'All', label: 'All Mobile Devices' },
  { value: 'Feature', label: 'Feature Phones' },
  { value: 'Network', label: 'Network Connection' },
  { value: 'New', label: 'New Smartphone & Tablet Owners' },
  { value: 'SmartphoneTabletOwner', label: 'Smartphone & Tablet Owners' },
  { value: 'SmartphoneOwners', label: 'Smartphone Owners' },
  { value: 'SmartphoneTablet', label: 'Smartphones & Tablets' },
  { value: 'Tablet', label: 'Tablet Owners' },
]

export const TargettingOptionTravel = [
  { value: 'All', label: 'All Frequent Travelers' },
  { value: 'Business', label: 'Business Travelers' },
  { value: 'Casino', label: 'Casino Vacations' },
  { value: 'Commuters', label: 'Commuters' },
  { value: 'Cruises', label: 'Cruises' },
  { value: 'Current', label: 'Currently Travelling' },
  { value: 'Family', label: 'Family Vacations' },
  { value: 'Frequent', label: 'Frequent International Travelers' },
  { value: 'Leisure', label: 'Leisure Travelers' },
  { value: 'Personal', label: 'Personal Travelers' },
  { value: 'Returned', label: 'Returned from Trip (1-2 weeks ago)' },
  { value: 'Timeshares', label: 'Timeshares' },
  { value: 'TravelApp', label: 'User Travel app (2 weeks - 1 month ago)' },
]

export const TargettingOptionB2B = [
  { value: 'Seniority', label: 'Seniority' },
  { value: 'Industry', label: 'Industry' },
  { value: 'Company', label: 'Company Size' },
]

export const TargettingOptionDigital = [
  { value: 'Operation', label: 'Operation System Used' },
  { value: 'Canvas', label: 'Canvas Gaming' },
  { value: 'Console', label: 'Console Gamers' },
  { value: 'Event', label: 'Event Creators' },
  { value: 'FacebookPay', label: 'Facebook Payments' },
  { value: 'FacebookPage', label: 'Facebook Page Admins' },
  { value: 'Internet', label: 'Internet Browsers Used' },
  { value: 'OS', label: 'Operating Systems Used' },
  { value: 'Photo', label: 'Photo Uploaders' },
  { value: 'Primary', label: 'Primary Email Domain' },
  { value: 'Small', label: 'Small Business Owners' },
  { value: 'Technology', label: 'Technology ADopters (early, late)' },
  { value: 'Unity', label: 'Unity Plugin' },
]

export const TargettingOptionFinancial = [
  { value: 'Banking', label: 'Banking' },
  { value: 'Investments', label: 'Investments' },
  { value: 'Spending', label: 'Spending Methods (line of credit)' },
]

export const TargettingOptionMedia = [
  { value: 'Radio', label: 'Radio' },
  { value: 'TV', label: 'Television' },
]

export const TargettingOptionPurchase = [
  { value: 'Business', label: 'Business Products' },
  { value: 'Buyer', label: 'Buyer Profiles' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Food', label: 'Food & Drink' },
  { value: 'Health', label: 'Health & Beauty' },
  { value: 'Home', label: 'Home & Garden' },
  { value: 'Household', label: 'Household Products' },
  { value: 'Kids', label: 'Kids Products' },
  { value: 'Pet', label: 'Pet Products' },
  { value: 'Habits', label: 'Purchase Habits' },
  { value: 'Types', label: 'Purchase Types' },
  { value: 'Sports', label: 'Sports & Outdoors' },
  { value: 'Store', label: 'Store Types' },
  { value: 'Subscription', label: 'Subscription Services' },
  { value: 'Technology', label: 'Technology' },
]

export const TargettingOptionResidential = [
  { value: 'Length', label: 'Length of Residence' },
  { value: 'Likely', label: 'Likely to Move' },
  { value: 'New', label: 'New Mover' },
  { value: 'RecentBuyer', label: 'Recent Home Buyer' },
  { value: 'RecentMortage', label: 'Recent Mortage Borrower' },
]

export const TargettingOptionSeasonal = [
  { value: 'Baseball', label: 'Baseball' },
  { value: 'College', label: 'College Football' },
  { value: 'Cricket', label: 'Cricket' },
  { value: 'Fall', label: 'Fall Football' },
  { value: 'Professional', label: 'Professional Football' },
  { value: 'Rugby', label: 'Rugby' },
]

export const TargettingOptionBusiness = [
  { value: 'Advertising', label: 'Advertising' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Architecture', label: 'Architecture' },
  { value: 'Aviation', label: 'Aviation' },
  { value: 'Banking', label: 'Banking' },
  { value: 'Business', label: 'Business' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Design', label: 'Design' },
  { value: 'Economics', label: 'Economics' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Entrepreneurship', label: 'Entrepreneurship' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'HigherEducation', label: 'Higher Education' },
  { value: 'Management', label: 'Management' },
  { value: 'Marketting', label: 'Marketting' },
  { value: 'Nursing', label: 'Nursing' },
  { value: 'Online', label: 'Online' },
  { value: 'PersonalFinance', label: 'Personal Finance' },
  { value: 'RealEstate', label: 'Real Estate' },
  { value: 'Retail', label: 'Retail' },
]

export const TargettingOptionEntertainment = [
  { value: 'Games', label: 'Games' },
  { value: 'LiveEvents', label: 'Live Events' },
  { value: 'Movies', label: 'Movies' },
  { value: 'Music', label: 'Music' },
  { value: 'Reading', label: 'Reading' },
  { value: 'TV', label: 'TV' },
]

export const TargettingOptionFamily = [
  { value: 'Family', label: 'Family' },
  { value: 'Fatherhood', label: 'Fatherhood' },
  { value: 'Motherhood', label: 'Motherhood' },
  { value: 'Friendship', label: 'Friendship' },
  { value: 'Dating', label: 'Dating' },
  { value: 'Marriage', label: 'Marriage' },
  { value: 'Weddings', label: 'Weddings' },
  { value: 'Parenting', label: 'Parenting' },
]

export const TargettingOptionFitness = [
  { value: 'Bodybuilding', label: 'Bodybuilding' },
  { value: 'Dieting', label: 'Dieting' },
  { value: 'Gyms', label: 'Gyms' },
  { value: 'Meditation', label: 'Meditation' },
  { value: 'Nutrition', label: 'Nutrition' },
  { value: 'PhysicalExercise', label: 'Physical Exercise' },
  { value: 'PhysicalFitness', label: 'Physical Fitness' },
  { value: 'Running', label: 'Running' },
  { value: 'WeightTraining', label: 'Weight Training' },
  { value: 'Yoga', label: 'Yoga' },
  { value: 'Zumba', label: 'Zumba' },
]

export const TargettingOptionFood = [
  { value: 'AlcoholicBeverages', label: 'Alcoholic Beverages' },
  { value: 'Beverages', label: 'Beverages' },
  { value: 'Cooking', label: 'Cooking' },
  { value: 'Cuisine', label: 'Cuisine' },
  { value: 'Food', label: 'Food' },
  { value: 'Restaurants', label: 'Restaurants' },
]

export const TargettingOptionHobby = [
  { value: 'Arts', label: 'Arts & Music' },
  { value: 'Current', label: 'Current Events' },
  { value: 'Home', label: 'Home & Garden' },
  { value: 'Pets', label: 'Pets' },
  { value: 'Politics', label: 'Politics & Social Issues' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Vehicles', label: 'Vehicles' },
]

export const TargettingOptionShopping = [
  { value: 'Beauty', label: 'Beauty' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Fashion', label: 'Fashion Accessories' },
  { value: 'Shopping', label: 'Shopping' },
  { value: 'Toys', label: 'Toys' },
]

export const TargettingOptionSports = [
  { value: 'Outdoor', label: 'Outdoor Recreation' },
  { value: 'Sports', label: 'Sports' },
]

export const TargettingOptionTechnology = [
  { value: 'Computers', label: 'Computers' },
  { value: 'Consumer', label: 'Consumer Electronics' },
]

export const TargettingOptionEducation = [
  { value: 'High', label: 'In high school' },
  { value: 'HighGrad', label: 'High School Grad' },
  { value: 'College', label: 'In College' },
  { value: 'CollegeSome', label: 'Some College' },
  { value: 'CollegeGrad', label: 'College Grad' },
  { value: 'Associate', label: 'Associate Degree' },
  { value: 'Professional', label: 'Professional Degree' },
  { value: 'Grad', label: 'In Grad School' },
  { value: 'Master', label: 'Master’s Degree' },
  { value: 'Doctorate', label: 'Doctorate Degree' },
  { value: 'Unspecified', label: 'Unspecified' },
]

export const TargettingOptionRelationshipGender = [
  { value: 'Men', label: 'Men' },
  { value: 'Women', label: 'Women' },
  { value: 'MenWomen', label: 'Men & Women' },
  { value: 'Unspecified', label: 'Unspecified' },
]

export const TargettingOptionRelationshipType = [
  { value: 'Single', label: 'Single' },
  { value: 'Relationship', label: 'In a Relationship' },
  { value: 'Married', label: 'Married' },
  { value: 'Engaged', label: 'Engaged' },
  { value: 'Complicated', label: 'Complicated' },
  { value: 'Open', label: 'Open Relationship' },
  { value: 'Domestic', label: 'Domestic Relationship' },
  { value: 'Separated', label: 'Separated' },
  { value: 'Divorced', label: 'Divorced' },
  { value: 'Widowed', label: 'Widowed' },
  { value: 'Unspecified', label: 'Unspecified' },
]

export const TargettingOptionWork = [
  { value: 'Administrative', label: 'Administrative' },
  { value: 'Architecture', label: 'Architecture & Engineering' },
  { value: 'Arts', label: 'Arts, Entertainment, Sport & Media' },
  { value: 'Business', label: 'Business & Financial' },
  { value: 'Operations', label: 'Operations' },
  { value: 'Cleaning', label: 'Cleaning & Maintenance' },
  { value: 'Community', label: 'Community & Mathematics' },
  { value: 'Construction', label: 'Construction & Extraction' },
  { value: 'Education', label: 'Education Library' },
  { value: 'Farming', label: 'Farming, Fishing & Forestry' },
  { value: 'Food', label: 'Food Preparation & Services' },
  { value: 'Government', label: 'Government Employees' },
  { value: 'Healthcare', label: 'Healthcare & Medical' },
  { value: 'IT', label: 'IT & Technical' },
  { value: 'Installation', label: 'Installation & Repair' },
  { value: 'Legal', label: 'Legal' },
  { value: 'Life', label: 'Life & Social Science' },
  { value: 'Management', label: 'Management' },
  { value: 'Military', label: 'Military' },
  { value: 'Nurses', label: 'Nurses' },
  { value: 'Personal', label: 'Personal Care' },
  { value: 'Production', label: 'Production' },
  { value: 'Protective', label: 'Protective Service' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Sales', label: 'Sales' },
  { value: 'Temporary', label: 'Temporary & Seasonal' },
  { value: 'Transporation', label: 'Transporation & Moving' },
  { value: 'Veterans', label: 'Veterans' },
]

export const TargettingOptionContext = [
  { value: 'Arts', label: 'Arts & Entertainment' },
  { value: 'Autos', label: 'Autos & Vehicles' },
  { value: 'Beauty', label: 'Beauty & Fitness' },
  { value: 'Books', label: 'Books & Literature' },
  { value: 'Business', label: 'Business & Industrial' },
  { value: 'Computers', label: 'Computers & Electronics' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Food', label: 'Food & Drink' },
  { value: 'Games', label: 'Games' },
  { value: 'Health', label: 'Health' },
  { value: 'Hobbies', label: 'Hobbies & Leisure' },
  { value: 'Home', label: 'Home & Garden' },
  { value: 'Internet', label: 'Internet & Telecom' },
  { value: 'Jobs', label: 'Jobs & Education' },
  { value: 'Law', label: 'Law & Government' },
  { value: 'News', label: 'News' },
  { value: 'Online', label: 'Online Communities' },
  { value: 'People', label: 'People & Society' },
  { value: 'Pets', label: 'Pets & Animals' },
  { value: 'Real', label: 'Real Estate' },
  { value: 'Reference', label: 'Reference' },
  { value: 'Science', label: 'Science' },
  { value: 'Shopping', label: 'Shopping' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Travel', label: 'Travel' },
  { value: 'World', label: 'World Localities' },
]

export const TagettingType = [
  { value: 'And', label: 'And' },
  { value: 'Or', label: 'Or' },
]

export const TargettingLocationOptions = [
  { value: 'Everyone', label: 'Everyone In This Location' },
  { value: 'PeopleRecent', label: 'People Recently In This Locations' },
  { value: 'PeopleTravel', label: 'People Travelling In This Location' },
]

export const TargettingLocationRadius = [
  { value: 'Miles10', label: '10 Miles' },
  { value: 'Miles20', label: '20 Miles' },
  { value: 'Miles30', label: '30 Miles' },
  { value: 'Miles40', label: '40 Miles' },
  { value: 'Miles50', label: '50 Miles' },
]

export const TargettingOptionDevices = [
  { value: 'Mobile', label: 'Mobile' },
  { value: 'Desktop', label: 'Desktop' },
  { value: 'Tablet', label: 'Tablet' },
]

export const CampaignInventoryRestriction = [
  { value: 'Derogatory', label: 'Derogatory Suggestive' },
  { value: 'Downloads', label: 'Downloads & Sharing Profanity' },
  { value: 'Weapons', label: 'Weapons Alcohol' },
  { value: 'Gambling', label: 'Gambling Drugs' },
  { value: 'Violence', label: 'Violence Tobacco' },
  { value: 'General', label: 'General Audiences' },
  { value: 'Political', label: 'Political n/a' },
  { value: 'Audience', label: 'Audience with PG' },
  { value: 'Teen', label: 'Teen and Older Audiences' },
  { value: 'Mature', label: 'Mature Audiences' },
  { value: 'Not', label: 'Not Yet Labeled' },
  { value: 'NA', label: 'n/a' },
]

export const CampaignCreativeUnit = [
  { value: 'Display', label: 'Display Ad' },
  { value: 'Text', label: 'Text' },
  { value: 'Video', label: 'Video' },
  { value: 'GIF', label: 'GIF' },
  { value: 'Expanding', label: 'Expanding' },
  { value: 'HTML5', label: 'HTML5' },
  { value: 'Instant', label: 'Instant' },
  { value: 'Experience', label: 'Experience' },
]

export const CampaignCreativeSize = [
  { value: 'Display300', label: '300 x 600 (Display)' },
  { value: 'Display728', label: '728 x 90 (Display)' },
  { value: 'Display320', label: '320 x 50 (Display)' },
  { value: 'Display300600', label: '300 x 250 (Display)' },
  { value: 'Display160', label: '160 x 600 (Display)' },
  { value: 'Display320100', label: '320 x 100 (Display)' },
  { value: 'Display336', label: '336 x 280 (Display)' },
  { value: 'Display970', label: '970 x 250 (Display)' },
  { value: 'Native100', label: '100 x 100 (Native Logo)' },
  { value: 'Native627', label: '627 x 627 (Native Square)' },
  { value: 'Native1200', label: '1200 x 627 (Native Header)' },
  { value: 'FacebookDisplay1200', label: '1200 x 628 (Facebook Display)' },
  { value: 'FacebookCarousel1200', label: '1200 x 1200 (Facebook Carousel)' },
  { value: 'InstagramDisplay1080', label: '1080 x 1080 (Instagram Display)' },
  { value: 'InstagramCarousel1080', label: '1080 x 1080 (Instagram Carousel)' },
  { value: 'Video1920', label: '1920 x 1080 (Video)' },
  { value: 'SRT', label: 'SRT Files (Video Captions)' },
  { value: 'Text', label: 'Text (Search)' },
]

export const BEHAVIOR = [
  {
    id: uuidv4(),
    label: 'Affinity',
    name: 'detail.audienceTargetting.behavior.affinity',
    options: TargettingOptionAffinity,
  },
  {
    id: uuidv4(),
    label: 'In-Market',
    name: 'detail.audienceTargetting.behavior.inMarket',
    options: TargettingOptionInMarket,
  },
  {
    id: uuidv4(),
    label: 'Automotive',
    name: 'detail.audienceTargetting.behavior.automotive',
    options: TargettingOptionAutomative,
  },
  {
    id: uuidv4(),
    label: 'Charitable Donations',
    name: 'detail.audienceTargetting.behavior.charitableDonations',
    options: TargettingOptionCharitable,
  },
  {
    id: uuidv4(),
    label: 'Expats',
    name: 'detail.audienceTargetting.behavior.expats',
    options: TargettingOptionExpat,
  },
  {
    id: uuidv4(),
    label: 'Job Role',
    name: 'detail.audienceTargetting.behavior.jobRole',
    options: TargettingOptionJobRole,
  },
  {
    id: uuidv4(),
    label: 'Mobile Device User',
    name: 'detail.audienceTargetting.behavior.mobileDeviceUser',
    options: TargettingOptionMobile,
  },
  {
    id: uuidv4(),
    label: 'Travel',
    name: 'detail.audienceTargetting.behavior.travel',
    options: TargettingOptionTravel,
  },
  {
    id: uuidv4(),
    label: 'Business-to-Business',
    name: 'detail.audienceTargetting.behavior.businessToBusiness',
    options: TargettingOptionB2B,
  },
  {
    id: uuidv4(),
    label: 'Digital Activities',
    name: 'detail.audienceTargetting.behavior.digitalActivities',
    options: TargettingOptionDigital,
  },
  {
    id: uuidv4(),
    label: 'Financial',
    name: 'detail.audienceTargetting.behavior.financial',
    options: TargettingOptionFinancial,
  },
  {
    id: uuidv4(),
    label: 'Media',
    name: 'detail.audienceTargetting.behavior.media',
    options: TargettingOptionMedia,
  },
  {
    id: uuidv4(),
    label: 'Purchase Behaviour',
    name: 'detail.audienceTargetting.behavior.purchaseBehavior',
    options: TargettingOptionPurchase,
  },
  {
    id: uuidv4(),
    label: 'Residential Profiles',
    name: 'detail.audienceTargetting.behavior.residentialProfiles',
    options: TargettingOptionResidential,
  },
  {
    id: uuidv4(),
    label: 'Seasonal & Events',
    name: 'detail.audienceTargetting.behavior.seasonalAndEvents',
    options: TargettingOptionSeasonal,
    colSpan: 2,
  },
]

export const INTEREST_TOPIC_TARGETING = [
  {
    id: uuidv4(),
    label: 'Business & Industry',
    name: 'detail.audienceTargetting.interest.businessAndIndustry',
    options: TargettingOptionBusiness,
  },
  {
    id: uuidv4(),
    label: 'Entertainment',
    name: 'detail.audienceTargetting.interest.entertainment',
    options: TargettingOptionEntertainment,
  },
  {
    id: uuidv4(),
    label: 'Family & Relationship',
    name: 'detail.audienceTargetting.interest.familyAndRelationship',
    options: TargettingOptionFamily,
  },
  {
    id: uuidv4(),
    label: 'Fitness & Wellness',
    name: 'detail.audienceTargetting.interest.fitnessAndWellness',
    options: TargettingOptionFitness,
  },
  {
    id: uuidv4(),
    label: 'Food & Drink',
    name: 'detail.audienceTargetting.interest.foodAndDrink',
    options: TargettingOptionFood,
  },
  {
    id: uuidv4(),
    label: 'Hobbies & Activities',
    name: 'detail.audienceTargetting.interest.hobbiesAndActivities',
    options: TargettingOptionHobby,
  },
  {
    id: uuidv4(),
    label: 'Shopping & Fashion',
    name: 'detail.audienceTargetting.interest.shoppingAndFashion',
    options: TargettingOptionShopping,
  },
  {
    id: uuidv4(),
    label: 'Sports & Outdoors',
    name: 'detail.audienceTargetting.interest.sportsAndOutdoors',
    options: TargettingOptionSports,
  },
  {
    id: uuidv4(),
    label: 'Technology',
    name: 'detail.audienceTargetting.interest.technology',
    options: TargettingOptionTechnology,
  },
  {
    id: uuidv4(),
    label: 'Education',
    name: 'detail.audienceTargetting.interest.education',
    options: TargettingOptionEducation,
  },
  {
    id: uuidv4(),
    label: 'Relationship - Interest',
    name: 'detail.audienceTargetting.interest.relationshipGender',
    options: TargettingOptionRelationshipGender,
  },
  {
    id: uuidv4(),
    label: 'Relationship',
    name: 'detail.audienceTargetting.interest.relationshipType',
    options: TargettingOptionRelationshipType,
  },
  {
    id: uuidv4(),
    label: 'Work',
    name: 'detail.audienceTargetting.interest.work',
    options: TargettingOptionWork,
    colSpan: 2,
  },
]

export const ADDITIONAL_QUESTIONS = [
  {
    id: uuidv4(),
    label: 'Brief Due Date',
    name: 'detail.briefDueDate',
  },
  {
    id: uuidv4(),
    label: 'Special Requirements?',
    name: 'detail.specialRequirements',
  },
  {
    id: uuidv4(),
    label: 'Number of Reports?',
    name: 'detail.numberOfReports',
  },
  {
    id: uuidv4(),
    label: 'Booking Engine Name',
    name: 'detail.bookingEngineName',
  },
  {
    id: uuidv4(),
    label: 'Analytics',
    name: 'detail.analytics',
  },
  {
    id: uuidv4(),
    label: 'Is the partner running with competing networks?',
    name: 'detail.partnerWithCompeting',
  },
  {
    id: uuidv4(),
    label: 'Are there any other targeting requests?',
    name: 'detail.specialTargetRequest',
  },
  {
    id: uuidv4(),
    label: 'Notes',
    name: 'detail.extraNotes',
  },
]
