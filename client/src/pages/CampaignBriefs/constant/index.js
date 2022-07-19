export const initialValue = (data) => ({
  name: data?.name || '',
  startDate: '',
  endDate: '',
  detail: {
    industryBasic: {
      companyName: data?.detail?.companyName || '',
      phone: data?.detail?.phone || '',
      contactName: data?.detail?.contactName || '',
      email: data?.detail?.email || '',
      address: data?.detail?.address || '',
      productAndServices: data?.detail?.productAndServices || '',
      industry: data?.detail?.industry || '',
      industryType: data?.detail?.industryType || '',
    },
    campaignBasic: {
      campaignName: '',
      startDate: '',
      endDate: '',
      duration: '',
      websiteUrl: '',
      landingPageDocLink: '',
      landingPageMobileLink: '',
      thankYouLink: '',
    },
    campaignBudget: {
      googleSearchAds: '',
      bingSearchAds: '',
      fbAds: '',
      instaAds: '',
      displayAds: '',
      twitterAds: '',
      nativeAds: '',
      spotifyAudioAds: '',
      pinterestAds: '',
      quoraAds: '',
      displayVideo: '',
      youtubeVideo: '',
      fbVideo: '',
      instaVideo: '',
      overTheTop: '',
      retargetting: {
        googleSearchRt: '',
        bingSearchRt: '',
        fbRt: '',
        instaRt: '',
        displayRt: '',
        linkedinRt: '',
        nativeRt: '',
        pinterestRt: '',
        videoRt: '',
      },
      other: {
        hotelAds: '',
        travelAds: '',
        shoppingAds: '',
        fbEvents: '',
        fbLookalike: '',
        instaLookalike: '',
        displayList: '',
        fbList: '',
        instaList: '',
        weatherAds: '',
        linkedinInmail: '',
        linkedinSponsored: '',
        fbLead: '',
        instaLead: '',
        instantExperience: '',
      },
      custom: '',
      total: '',
      budgetAddOn: '',
      isMonthly: 'Yes',
    },
    priceModel: [],
    Kpis: [],
    customMetricsAndGoals: '',
    campaignConverters: [],
    campaignConverterNotes: '',
    objective: '',
    conversionMeasurement: '',
    demographyDetails: {
      gender: [],
      ageGroup: [],
      other: '',
      isRequired: 'Yes',
    },
    families: [],
    familiesCustom: '',
    householdIncomeDetailsfb: [],
    householdIncomeDetailsSearchDisplay: [],
    audienceTargetting: {
      behavior: {
        affinity: [],
        automotive: [],
        businessToBusiness: [],
        charitableDonations: [],
        digitalActivities: [],
        expats: [],
        financial: [],
        inMarket: [],
        jobRole: [],
        media: [],
        mobileDeviceUser: [],
        purchaseBehavior: [],
        residentialProfiles: [],
        seasonalAndEvents: [],
        travel: [],
      },
      interest: {
        businessAndIndustry: [],
        education: [],
        entertainment: [],
        familyAndRelationship: [],
        fieldOfStudy: [],
        fitnessAndWellness: [],
        foodAndDrink: [],
        hobbiesAndActivities: [],
        relationshipGender: [],
        relationshipType: [],
        school: [],
        shoppingAndFashion: [],
        sportsAndOutdoors: [],
        technology: [],
        undergradYears: [],
        work: [],
        workJobTitle: [],
      },
      contextual: [],
    },
    competitorLinks: '',
    targettingType: [],
    audienceNames: '',
    keywordListLink: '',
    geography: '',
    location: [],
    radius: [],
    devices: [],
    language: '',
    tactics: '',
    dayPartingRequirements: '',
    frequencyCapping: '',
    optimizationExclusions: '',
    // Remaining fields
    inventoryRestrictions: [],
    whitelist: '',
    blacklist: '',
    creativeUnit: [],
    linkToAdServing: '',
    creativeSize: [],
    numberOfCreativeExecutions: '',
    canPixelLandingPage: '',
    googleTagManager: '',
    numUniquePageViews: '',
    socialPage: '',
    briefDueDate: '',
    specialRequirements: '',
    numberOfReports: '',
    bookingEngineName: '',
    analytics: '',
    partnerWithCompeting: '',
    specialTargetRequest: '',
    extraNotes: '',
    addedOn: '',
    updatedOn: '',
    status: '',
  },
})