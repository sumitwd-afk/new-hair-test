// ==========================================
// UROOTS HAIR ASSESSMENT FRONTEND UTILITIES
// ==========================================

export const API_ENDPOINT = "https://api.theuroots.com/api/lead";

export const PRODUCTS = {
  'minbur-5f': {
    name: 'URoots 5F+ Daily Scalp Care Solution',
    price: 899,
    variantId: '49691405943026',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_2e32c442-2c8f-469e-8304-b81a15c9ef77.webp?v=1783743174',
    url: 'https://theuroots.com/products/uroots-5f-daily-scalp-care-solution',
    description: 'Daily scalp care solution for hair wellness'
  },
  'minbur-10f': {
    name: 'URoots 5F+ Daily Scalp Care Solution',
    price: 899,
    variantId: '49691405943026',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_2e32c442-2c8f-469e-8304-b81a15c9ef77.webp?v=1783743174',
    url: 'https://theuroots.com/products/uroots-5f-daily-scalp-care-solution',
    description: 'Daily scalp care solution for hair wellness'
  },
  'growbald': {
    name: 'URoots Hair Supplement',
    price: 699,
    variantId: '49240873074930',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_4e3b858d-5a27-4826-8067-de452dbbabf5.webp?v=1782832126',
    url: 'https://theuroots.com/products/uroots-hair-supplement',
    description: 'Hair supplement with Beta Sitosterol for men'
  },
  'growbald-eva': {
    name: 'URoots Hair Supplement',
    price: 699,
    variantId: '49240873074930',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_4e3b858d-5a27-4826-8067-de452dbbabf5.webp?v=1782832126',
    url: 'https://theuroots.com/products/uroots-hair-supplement',
    description: 'Hair supplement for women'
  },
  'venfoll': {
    name: 'URoots Hair Serum',
    price: 1199,
    variantId: '49240867045618',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_1ea3fe27-8d45-4014-86c9-a94195b53d93.webp?v=1782833030',
    url: 'https://theuroots.com/products/uroots-hair-serum-for-fuller-looking-hair-daily-scalp-care',
    description: 'Advanced hair serum for thickness & volume'
  },
  'kalen-d3': {
    name: 'URoots Finasteride Tablets 1mg',
    price: 240,
    variantId: '49240872583410',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_670f0685-5d7b-426b-9349-09784bb90a55.webp?v=1782821869',
    url: 'https://theuroots.com/products/uroots-finasteride-tablets-ip-1mg',
    description: 'Finasteride 1mg tablets for men (prescription)'
  },
  'xtend-kz': {
    name: 'URoots Daily Hydrating Shampoo',
    price: 249,
    variantId: '49691413283058',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_2462a14a-db1b-4418-9bee-1397054e8855.webp?v=1783743082',
    url: 'https://theuroots.com/products/uroots-daily-hydrating-shampoo-for-men-women',
    description: 'Daily hydrating shampoo for men & women'
  },
  'xtend-max': {
    name: 'URoots Daily Hydrating Shampoo',
    price: 249,
    variantId: '49691413283058',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_2462a14a-db1b-4418-9bee-1397054e8855.webp?v=1783743082',
    url: 'https://theuroots.com/products/uroots-daily-hydrating-shampoo-for-men-women',
    description: 'Daily hydrating shampoo for men & women'
  },
  'moisthair-shampoo': {
    name: 'URoots Daily Hydrating Shampoo',
    price: 249,
    variantId: '49691413283058',
    image: 'https://cdn.shopify.com/s/files/1/0757/6554/7250/files/1_2462a14a-db1b-4418-9bee-1397054e8855.webp?v=1783743082',
    url: 'https://theuroots.com/products/uroots-daily-hydrating-shampoo-for-men-women',
    description: 'Daily hydrating shampoo for men & women'
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

  // Sort, de-duplicate by name, and limit to 4
  const seenNames = new Set();
  const sortedProducts = [];
  const rawSorted = Array.from(recommendations.entries())
    .sort((a, b) => b[1] - a[1]);

  for (const [key] of rawSorted) {
    const product = PRODUCTS[key];
    if (product && !seenNames.has(product.name)) {
      seenNames.add(product.name);
      sortedProducts.push({ id: key, ...product });
      if (sortedProducts.length === 4) break;
    }
  }

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
    // Send age group label directly to mx_Patient_Age_Group (LSQ Dropdown field)
    // e.g. "18–24Y", "25–34Y", "35–44Y", "45–54Y", "55Y+"
    payload.push({ Attribute: "mx_Patient_Age_Group", Value: formData.age });

    // Also keep the numeric age for mx_Patient_Age (existing field)
    const ageNum = parseInt(formData.age, 10);
    if (!isNaN(ageNum)) {
      payload.push({ Attribute: "mx_Patient_Age", Value: ageNum });
    }
  }
  if (formData.gender) payload.push({ Attribute: "mx_Gender", Value: formData.gender });
  if (formData.duration) payload.push({ Attribute: "mx_When_did_you_notice_hair_loss", Value: formData.duration });
  if (formData.pattern) payload.push({ Attribute: "mx_Stages_looks_closest_to_your_current_pattern", Value: formData.pattern });
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

  // Map new assessment questionnaire results to exact LSQ schema names verified from live query
  if (formData.familyHistory) {
    payload.push({ Attribute: "mx_Does_thinning_run_in_your_family", Value: formData.familyHistory });
  }
  if (formData.triggers) {
    payload.push({ Attribute: "mx_In_the_last_12_months_have_any_of_these_affected", Value: formData.triggers });
  }
  if (formData.scalpFlaking) {
    payload.push({ Attribute: "mx_How_would_you_describe_your_scalp_flaking", Value: formData.scalpFlaking });
  }
  if (formData.sleepPattern) {
    payload.push({ Attribute: "mx_Hows_your_sleep_most_nights", Value: formData.sleepPattern });
  }
  if (formData.stressLevel) {
    payload.push({ Attribute: "mx_Whats_your_typical_stress_level_these_days", Value: formData.stressLevel });
  }
  if (formData.healthConditions) {
    payload.push({ Attribute: "mx_Are_you_managing_any_of_these_right_now", Value: formData.healthConditions });
  }
  if (formData.bowelMovements) {
    payload.push({ Attribute: "mx_How_regular_are_your_bowel_movements", Value: formData.bowelMovements });
  }
  if (formData.acidityBloating) {
    payload.push({ Attribute: "mx_Do_you_get_gas_acidity_or_bloating", Value: formData.acidityBloating });
  }
  if (formData.energyLevels) {
    payload.push({ Attribute: "mx_How_does_your_energy_hold_up_through_the_day", Value: formData.energyLevels });
  }
  if (formData.takingSupplements) {
    payload.push({ Attribute: "mx_Currently_taking_any_hair_supplements_or_vitamins", Value: formData.takingSupplements });
  }

  payload.push(
    { Attribute: "mx_Brand", Value: "URoots" },
    { Attribute: "mx_NDR_Reason", Value: "URoots" },
    { Attribute: "Source", Value: (campaign.SourceMedium && campaign.SourceMedium !== "organic") ? campaign.SourceMedium : "Organic" },
    { Attribute: "mx_utm_source", Value: "Hair Test" },
    { Attribute: "SourceMedium", Value: (campaign.SourceMedium && campaign.SourceMedium !== "organic") ? campaign.SourceMedium : "Hair Test" },
    { Attribute: "mx_Campaign_id", Value: campaign.mx_Campaign_id || "" },
    { Attribute: "mx_utm_campaign_id", Value: campaign.mx_utm_campaign_id || "" },
    { Attribute: "SearchBy", Value: "Phone" }
  );

  const fd = new FormData();
  fd.append("leadPayload", JSON.stringify(payload));
  fd.append("phone", phone);

  // Support both single file and array of files
  const files = Array.isArray(file) ? file : (file ? [file] : []);
  for (const f of files) {
    fd.append("images", f);
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
  const MAX_SIZE_BYTES = 1 * 1024 * 1024; // 1 MB hard limit

  return new Promise(resolve => {
    const img = new window.Image();
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

      // Resize dimensions if needed
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

      // Iteratively reduce quality until file is under 1MB
      const tryCompress = (quality) => {
        canvas.toBlob(blob => {
          if (!blob) {
            resolve(file); // fallback
            return;
          }
          if (blob.size <= MAX_SIZE_BYTES || quality <= 0.1) {
            resolve(new File([blob], file.name.replace(/\..+$/, ".jpg"), {
              type: "image/jpeg",
              lastModified: Date.now()
            }));
          } else {
            // Reduce quality by 0.1 and try again
            tryCompress(Math.round((quality - 0.1) * 10) / 10);
          }
        }, "image/jpeg", quality);
      };

      tryCompress(0.8);
    };

    reader.readAsDataURL(file);
  });
}
