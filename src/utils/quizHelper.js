// ==========================================
// UROOTS HAIR ASSESSMENT FRONTEND UTILITIES
// ==========================================

export const API_ENDPOINT = "https://api.theuroots.com/api/lead";

export const PRODUCTS = {
  'minbur-5f': {
    name: 'MINBUR-5F+',
    price: 899,
    variantId: '47948889489650',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard_1_398b897e-06d0-4f59-9bc2-6198fe802a6b.jpg?v=1760611479',
    url: 'https://theuroots.com/products/minbur-5f',
    description: 'Minoxidil 5% + Finasteride topical solution'
  },
  'minbur-10f': {
    name: 'MINBUR-10F+',
    price: 1099,
    variantId: '48392555757810',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard1_fa678f6a-ce87-4e0a-a0e6-e332d56e3d10.jpg?v=1764419797',
    url: 'https://theuroots.com/products/minbur-10f',
    description: 'Minoxidil 10% + Finasteride topical solution'
  },
  'growbald': {
    name: 'Growbald',
    price: 699,
    variantId: '47573822505202',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/growbald-nutraceutical-multivitamin-beta-sitosterol-men..jpg?v=1762505728',
    url: 'https://theuroots.com/products/growbald',
    description: 'Multivitamin with Beta Sitosterol for hair growth'
  },
  'growbald-eva': {
    name: 'Growbald Eva Women',
    price: 699,
    variantId: '48263594344690',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard1_99c89efe-9b03-496d-9671-d659c1ea002e.jpg?v=1764073442',
    url: 'https://theuroots.com/products/growbald-eva-women-special',
    description: 'Multivitamin specially formulated for women'
  },
  'venfoll': {
    name: 'Venfoll Hair Serum',
    price: 1199,
    variantId: '47573820211442',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard1_85039acc-a094-4652-9457-3d4e33c4d8d8.jpg?v=1760617466',
    url: 'https://theuroots.com/products/venfoll-hair-serum',
    description: 'Advanced hair serum for thickness & volume'
  },
  'kalen-d3': {
    name: 'Vitamin D3',
    price: 299,
    variantId: '48049134665970',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard1_690484e6-db68-45a7-9231-b9d97bc98f58.jpg?v=1760618436',
    url: 'https://theuroots.com/products/gemline-d3',
    description: 'Vitamin D3 supplement for hair health'
  },
  'xtend-kz': {
    name: 'Xtend KZ Shampoo',
    price: 199,
    variantId: '47573819261170',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard1_f3a0f6b0-f3b0-4194-9b6f-07729b536487.jpg?v=1760618053',
    url: 'https://theuroots.com/products/xtend-kz-shampoo',
    description: 'Anti-dandruff ketoconazole shampoo'
  },
  'xtend-max': {
    name: 'Xtend Max 5%',
    price: 799,
    variantId: '47573822243058',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard_1_1422e892-87ef-48e4-8b4a-276cf7811041.jpg?v=1760617096',
    url: 'https://theuroots.com/products/xtend-max',
    description: 'Minoxidil 5% solution for hair regrowth'
  },
  'moisthair-shampoo': {
    name: 'Moisthair Shampoo',
    price: 349,
    variantId: '47636376158450',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/Artboard_1_a5843679-3946-4ccf-80e6-0637ee9851e4.jpg?v=1760612687',
    url: 'https://theuroots.com/products/moisthair-shampoo',
    description: 'Gentle moisturizing shampoo for daily use'
  },
  'gentle-gut': {
    name: 'Gentle Gut',
    price: 499,
    variantId: '48665368101106',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/01_d847c4b7-e0a9-4ca5-b5e4-55c3cb2193be.jpg?v=1768902046',
    url: 'https://theuroots.com/products/gentle-gut',
    description: 'Gut health supplement for better nutrient absorption'
  },
  'calm-mind': {
    name: 'Calm Mind',
    price: 499,
    variantId: '48665443107058',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/01_87862ced-057b-4494-b1e8-b7cbcc8ff180.jpg?v=1768901860',
    url: 'https://theuroots.com/products/calm-mind',
    description: 'Stress relief supplement for mental wellness'
  },
  'pure-scalp-oil': {
    name: 'Pure Scalp Oil',
    price: 399,
    variantId: '48665399886066',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/01_3a11b1a6-7cd2-419c-b5c7-79b4ce1b218a.jpg?v=1768901970',
    url: 'https://theuroots.com/products/pure-scalp-oil',
    description: 'Nourishing scalp oil for healthy hair roots'
  }
};

// ==========================================
// CAMPAIGN TRACKING
// ==========================================

export function initCampaignTracking() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const stored = JSON.parse(localStorage.getItem("campaignTracking") || "{}");

  const sourceMedium = params.get("utm_source")
    ? params.get("utm_source").toLowerCase()
    : stored.SourceMedium || "organic";

  const campaignName =
    params.get("utm_campaign") ||
    stored.mx_Campaign_id ||
    "";

  const campaignId =
    params.get("campaign_id") ||
    params.get("Campaign_id") ||
    params.get("utm_id") ||
    stored.mx_utm_campaign_id ||
    "";

  localStorage.setItem(
    "campaignTracking",
    JSON.stringify({
      SourceMedium: sourceMedium,
      mx_Campaign_id: campaignName,
      mx_utm_campaign_id: campaignId
    })
  );
}

export function getCampaignDetails() {
  if (typeof window === "undefined") return {};
  return JSON.parse(localStorage.getItem("campaignTracking") || "{}");
}

function _slugify(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 60) || 'unknown';
}

function buildUtmParams(formData, extra = {}) {
  const campaign = getCampaignDetails();
  const pattern = formData?.pattern || '';
  const gender = formData?.gender || '';

  const params = {
    utm_source: 'hair_assessment',
    utm_medium: 'assessment_form',
    utm_campaign: pattern ? _slugify(pattern) : 'hair_loss_assessment',
    utm_content: extra.content ? _slugify(extra.content) : 'assessment_results',
    ref: 'hostinger_assessment'
  };
  if (gender) params.utm_term = _slugify(gender);
  return params;
}

export function appendUtm(url, formData, opts = {}) {
  if (!url || typeof url !== 'string') return url;
  if (!/theuroots\.com/i.test(url)) return url;
  try {
    const u = new URL(url);
    const params = buildUtmParams(formData, opts);
    Object.entries(params).forEach(([k, v]) => {
      if (v && !u.searchParams.has(k)) u.searchParams.set(k, v);
    });
    return u.toString();
  } catch (e) {
    const sep = url.includes('?') ? '&' : '?';
    const params = buildUtmParams(formData, opts);
    const qs = Object.entries(params)
      .filter(([, v]) => v)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
    return url + sep + qs;
  }
}

// ==========================================
// RECOMMENDATION ENGINE
// ==========================================

export function getProductRecommendations(formData) {
  const recommendations = new Map();
  let needsConsultation = false;
  let consultationReason = '';

  const addProduct = (productKey, score = 1) => {
    if (PRODUCTS[productKey]) {
      const current = recommendations.get(productKey) || 0;
      recommendations.set(productKey, current + score);
    }
  };

  const gender = formData.gender?.toLowerCase() || '';
  const isFemale = gender === 'female';

  // Base Recommendations
  if (isFemale) {
    addProduct('growbald-eva', 9);
    addProduct('venfoll', 9);
    addProduct('kalen-d3', 5);
  } else {
    addProduct('minbur-5f', 9);
    addProduct('growbald', 9);
    addProduct('kalen-d3', 9);
    addProduct('venfoll', 5);
    addProduct('gentle-gut', 4);
    addProduct('calm-mind', 4);
    addProduct('moisthair-shampoo', 4);
  }

  // Pattern Recommendations
  const pattern = formData.pattern?.toLowerCase() || '';

  if (isFemale) {
    if (pattern.includes('patchy') || pattern.includes('bald patch')) {
      needsConsultation = true;
      consultationReason = 'Patchy hair loss requires medical evaluation to rule out Alopecia Areata';
    } else if (pattern.includes('excessive') || pattern.includes('shedding')) {
      needsConsultation = true;
      consultationReason = 'Excessive shedding needs doctor consultation';
    } else {
      addProduct('minbur-5f', 6);
      addProduct('growbald', 6);
      addProduct('kalen-d3', 6);
      addProduct('venfoll', 3);
      addProduct('moisthair-shampoo', 3);
      addProduct('gentle-gut', 3);
    }
  } else {
    if (pattern.includes('bald patch') || pattern.includes('patchy')) {
      needsConsultation = true;
      consultationReason = 'Bald patches require early medical treatment';
    } else if (pattern.includes('complete') || pattern.includes('fully bald')) {
      needsConsultation = true;
      consultationReason = 'Advanced hair loss - Hair transplant consultation recommended with Growbald support';
      addProduct('growbald', 8);
      addProduct('venfoll', 5);
      addProduct('kalen-d3', 5);
    } else {
      addProduct('minbur-5f', 8);
      addProduct('growbald', 8);
      addProduct('kalen-d3', 8);
      addProduct('venfoll', 4);
      addProduct('moisthair-shampoo', 4);
      addProduct('gentle-gut', 4);
    }
  }

  // Hair Loss Speed (Severity)
  const hairType = formData.hairType?.toLowerCase() || ''; // maps to severity
  if (hairType === 'severe' || hairType === 'significant') {
    addProduct('minbur-5f', 6);
    addProduct('growbald', 6);
    addProduct('kalen-d3', 6);
    if (hairType === 'severe') {
      needsConsultation = true;
      consultationReason = consultationReason || 'Significant/Severe hair loss - Finasteride may be prescribed by doctor';
    }
  } else {
    addProduct('growbald', 6);
    addProduct('kalen-d3', 6);
  }

  // Lifestyle / Symptoms
  const lifestyle = formData.lifestyle || [];
  lifestyle.forEach(item => {
    const s = item.toLowerCase();
    if (s.includes('stress')) {
      addProduct('minbur-5f', 7);
      addProduct('growbald', 7);
      addProduct('kalen-d3', 7);
      addProduct('calm-mind', 6);
      addProduct('gentle-gut', 6);
    }
    if (s.includes('sleep')) {
      addProduct('calm-mind', 4);
    }
    if (s.includes('hard-water')) {
      addProduct('pure-scalp-oil', 5);
      addProduct('moisthair-shampoo', 5);
    }
    if (s.includes('digestive-issues') || s.includes('diet')) {
      addProduct('gentle-gut', 6);
    }
    if (s.includes('pregnancy')) {
      recommendations.delete('minbur-5f');
      recommendations.delete('minbur-10f');
      addProduct('growbald', 5);
      addProduct('venfoll', 5);
      needsConsultation = true;
      consultationReason = 'Post-pregnancy - doctor guidance recommended for safe hair care';
    }
    if (s.includes('pcos') || s.includes('thyroid')) {
      addProduct('growbald-eva', 8);
      addProduct('venfoll', 8);
      addProduct('kalen-d3', 8);
      addProduct('gentle-gut', 5);
    }
  });

  // Goal
  const goal = formData.expectation?.toLowerCase() || '';
  if (goal.includes('stop') || goal.includes('reduce')) {
    addProduct('minbur-5f', 10);
    addProduct('growbald', 10);
    addProduct('kalen-d3', 10);
    addProduct('venfoll', 6);
  } else if (goal.includes('regrow')) {
    addProduct('minbur-5f', 10);
    addProduct('growbald', 10);
    addProduct('kalen-d3', 10);
    addProduct('venfoll', 6);
    addProduct('moisthair-shampoo', 5);
    addProduct('gentle-gut', 5);
  } else if (goal.includes('maintain')) {
    addProduct('growbald', 6);
    addProduct('venfoll', 4);
  } else if (goal.includes('stronger') || goal.includes('healthy')) {
    addProduct('growbald', 7);
    addProduct('venfoll', 7);
    addProduct('moisthair-shampoo', 5);
  }

  // Sort and limit
  const sortedProducts = Array.from(recommendations.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([key]) => {
      return { id: key, ...PRODUCTS[key] };
    });

  return {
    products: sortedProducts,
    needsConsultation,
    consultationReason
  };
}

// ==========================================
// LEAD GENERATION API INTEGRATIONS
// ==========================================

export async function submitPartialLead(formState) {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem("partialLeadSent")) return;

  const campaign = getCampaignDetails();
  const countryCode = formState.countryCode || "+91";
  const phone = `${countryCode}-${formState.phone}`;

  const payload = [
    { Attribute: "FirstName", Value: formState.firstName || "" },
    { Attribute: "Phone", Value: phone },
    { Attribute: "mx_Brand", Value: "URoots" },
    { Attribute: "mx_NDR_Reason", Value: "URoots" },
    { Attribute: "Source", Value: (campaign.SourceMedium && campaign.SourceMedium !== "organic") ? campaign.SourceMedium : "Organic" },
    { Attribute: "mx_utm_source", Value: "Hair Test" },
    { Attribute: "SourceMedium", Value: (campaign.SourceMedium && campaign.SourceMedium !== "organic") ? campaign.SourceMedium : "Hair Test" },
    { Attribute: "mx_Campaign_id", Value: campaign.mx_Campaign_id || "" },
    { Attribute: "mx_utm_campaign_id", Value: campaign.mx_utm_campaign_id || "" },
    { Attribute: "SearchBy", Value: "Phone" }
  ];

  if (formState.city) {
    payload.push({ Attribute: "mx_City", Value: formState.city });
  }

  const fd = new FormData();
  fd.append("leadPayload", JSON.stringify(payload));
  fd.append("phone", phone);

  try {
    const res = await fetch(API_ENDPOINT, { method: "POST", body: fd });
    if (res.ok) {
      sessionStorage.setItem("partialLeadSent", "true");
      console.log("Partial lead submitted successfully.");
    }
  } catch (err) {
    console.error("Error submitting partial lead:", err);
  }
}

export async function submitFullLead(formData, file = null) {
  if (typeof window === "undefined") return;

  const campaign = getCampaignDetails();
  const countryCode = formData.countryCode || "+91";
  const phone = `${countryCode}-${formData.phone}`;

  const payload = [
    { Attribute: "Phone", Value: phone }
  ];

  if (formData.firstName) payload.push({ Attribute: "FirstName", Value: formData.firstName });
  if (formData.city) payload.push({ Attribute: "mx_City", Value: formData.city });
  if (formData.age) {
    const ageNum = parseInt(formData.age, 10);
    if (!isNaN(ageNum)) {
      payload.push({ Attribute: "mx_Patient_Age", Value: ageNum });
    }
  }
  if (formData.gender) payload.push({ Attribute: "mx_Gender", Value: formData.gender });
  if (formData.duration) payload.push({ Attribute: "mx_When_did_you_notice_hair_loss", Value: formData.duration });
  if (formData.pattern) payload.push({ Attribute: "mx_Select_Hair_Loss_Pattern", Value: formData.pattern });
  if (formData.hairType) payload.push({ Attribute: "mx_Is_your_hair_loss", Value: formData.hairType });

  // Map lifestyle to conditions and symptoms
  const lifestyle = formData.lifestyle || [];
  const medicalConditions = [];
  const scalpSymptoms = [];

  const lifestyleLabels = {
    'stress': 'High stress / anxiety',
    'sleep': 'Poor sleep (< 6 hrs)',
    'protein': 'Mostly vegetarian / low protein',
    'hard-water': 'Hard or borewell water',
    'irregular-diet': 'Irregular diet / outside food',
    'heat-styling': 'Frequent heat styling or chemicals',
    'digestive-issues': 'Digestive issues',
    'pregnancy': 'Post-pregnancy (within 12 months)',
    'pcos': 'PCOS / irregular periods',
    'thyroid': 'Thyroid issues',
    'none': 'None of these'
  };

  lifestyle.forEach(item => {
    const label = lifestyleLabels[item] || item;
    if (["pregnancy", "pcos", "thyroid"].includes(item)) {
      medicalConditions.push(label);
    } else {
      scalpSymptoms.push(label);
    }
  });

  if (scalpSymptoms.length) {
    payload.push({ Attribute: "mx_ScalpSymptoms", Value: scalpSymptoms.join(";") });
  }
  if (medicalConditions.length) {
    payload.push({ Attribute: "mx_Medical_Conditions", Value: medicalConditions.join(";") });
  }

  if (formData.tried) {
    payload.push({ Attribute: "mx_Any_ongoing_hair_loss_medication", Value: formData.tried });
  }
  if (formData.expectation) {
    payload.push({ Attribute: "mx_Treatment_Goal", Value: formData.expectation });
  }

  payload.push(
    { Attribute: "mx_Brand", Value: "URoots" },
    { Attribute: "mx_NDR_Reason", Value: "URoots" },
    { Attribute: "Source", Value: (campaign.SourceMedium && campaign.SourceMedium !== "organic") ? campaign.SourceMedium : "Organic" },
    { Attribute: "SourceMedium", Value: (campaign.SourceMedium && campaign.SourceMedium !== "organic") ? campaign.SourceMedium : "Hair Test" },
    { Attribute: "mx_Campaign_id", Value: campaign.mx_Campaign_id || "" },
    { Attribute: "mx_utm_campaign_id", Value: campaign.mx_utm_campaign_id || "" },
    { Attribute: "SearchBy", Value: "Phone" }
  );

  const fd = new FormData();
  fd.append("leadPayload", JSON.stringify(payload));
  fd.append("phone", phone);

  if (file) {
    fd.append("images", file);
  }

  const res = await fetch(API_ENDPOINT, { method: "POST", body: fd });
  if (!res.ok) {
    console.error("LSQ lead submission failed:", res.status);
    throw new Error("Full lead submission failed");
  }

  // Trigger Pixels
  trackMetaLead();
  trackGoogleConversion();
  trackMetaCompleteRegistration();

  console.log("Full lead submitted successfully.");
}

// ==========================================
// TRACKING PIXEL TRIGGERS
// ==========================================

export function trackMetaLead() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq('track', 'Lead', {
      content_name: 'Hair Assessment Form',
      content_category: 'Hair Loss Assessment'
    });
  }
}

export function trackMetaCompleteRegistration() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq('track', 'CompleteRegistration', {
      content_name: 'Hair Assessment Completed',
      status: 'success'
    });
  }
}

export function trackGoogleConversion() {
  if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion();
  }
}

export async function compressImage(file) {
  return new Promise(resolve => {
    const img = new Image();
    const reader = new FileReader();

    reader.onerror = () => {
      console.warn("FileReader error, falling back to original file.");
      resolve(file);
    };

    reader.onload = e => {
      img.src = e.target.result;
    };

    img.onerror = () => {
      console.warn("Image loading error, falling back to original file.");
      resolve(file);
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      let { width, height } = img;
      const MAX_DIM = 1280;

      if (width > MAX_DIM || height > MAX_DIM) {
        if (width > height) {
          height = Math.round(height * MAX_DIM / width);
          width = MAX_DIM;
        } else {
          width = Math.round(width * MAX_DIM / height);
          height = MAX_DIM;
        }
      }

      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);

      canvas.toBlob(blob => {
        resolve(new File([blob], file.name.replace(/\..+$/, ".jpg"), {
          type: "image/jpeg",
          lastModified: Date.now()
        }));
      }, "image/jpeg", 0.8);
    };

    reader.readAsDataURL(file);
  });
}
