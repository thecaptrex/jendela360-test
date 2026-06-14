const SPEEDHOME_BASE = "https://speedhome.com/";
const SPEEDHOME_READER = "https://r.jina.ai/https://";
const ALL_ORIGINS = "https://api.allorigins.win/raw?url=";
const AUTOCOMPLETE_API_URL = "https://api.speedrent.com/v2/properties/search/name/autocomplete";
const AUTOCOMPLETE_API_KEY = "adm_3WvXqd5kLkMNdy2ZnGyV5h8LbnrtwV";

const seedListings = [
  listing("Skyline", "Kuala Lumpur", 4, 2, 2, 1080, 5000, "Fully Furnished", "https://speedhome.com/details/skyline-kuala-lumpur-upwsrrqt"),
  listing("Residensi Riamas", "Kuala Lumpur", 1, 1, 0, 900, 700, "Fully Furnished", "https://speedhome.com/details/residensi-riamas-kuala-lumpur-cbbyosgj"),
  listing("8 Petaling", "Kuala Lumpur", 5, 4, 3, 1890, 3800, "Partially Furnished", "https://speedhome.com/details/8-petaling-kuala-lumpur-kjfgdoyo"),
  listing("Bistari Condominium", "Kuala Lumpur", 1, 1, 0, 120, 700, "Fully Furnished", "https://speedhome.com/details/bistari-condominium-kuala-lumpur-yxolypus"),
  listing("Stonor 3", "Kuala Lumpur", 1, 1, 1, 689, 4000, "Fully Furnished", "https://speedhome.com/details/stonor-3-kuala-lumpur-yelhhjtj"),
  listing("Residensi Akasia Jubilee", "Bukit Bintang", 3, 2, 1, 850, 1800, "Partially Furnished", "https://speedhome.com/details/residensi-akasia-jubilee-bukit-bintang-onsgjaok"),
  listing("Ramada Suites Bukit Ceylon", "Kuala Lumpur", 0, 1, 0, 450, 2000, "Fully Furnished", "https://speedhome.com/rent/kuala-lumpur"),
  listing("Majestic Residence", "Kuala Lumpur", 1, 1, 0, 450, 3500, "Fully Furnished", "https://speedhome.com/rent/kuala-lumpur"),
  listing("Chambers Residence", "Kuala Lumpur", 2, 2, 0, 886, 1850, "Partially Furnished", "https://speedhome.com/rent/kuala-lumpur"),
  listing("South View", "Bangsar South", 3, 2, 1, 990, 3400, "Fully Furnished", "https://speedhome.com/rent/bangsar-south"),
  listing("Cubic Botanical", "Bangsar South", 1, 1, 0, 150, 1000, "Fully Furnished", "https://speedhome.com/rent/bangsar-south"),
  listing("Marc Residence", "Kuala Lumpur", 2, 2, 0, 1030, 3950, "Fully Furnished", "https://speedhome.com/rent/room-for-rent"),
  listing("Regalia Residence", "Kuala Lumpur", 0, 1, 0, 660, 2400, "Fully Furnished", "https://speedhome.com/rent/room-for-rent"),
  listing("Neu Suites", "Kuala Lumpur", 2, 1, 0, 430, 1800, "Fully Furnished", "https://speedhome.com/rent/room-for-rent"),
  listing("Core Residences", "TRX", 2, 2, 1, 818, 5000, "Fully Furnished", "https://speedhome.com/rent/room-for-rent"),
  listing("Paxtonz Empire City", "Damansara Perdana", 1, 1, 1, 334, 1500, "Fully Furnished", "https://speedhome.com/details/paxtonz-empire-city-damansara-perdana-htrqchxr"),
  listing("Neo Damansara", "Damansara Perdana", 1, 1, 1, 450, 1450, "Fully Furnished", "https://speedhome.com/details/neo-damansara-damansara-perdana-amvqqazn"),
  listing("Mossaz by Exsim", "Petaling Jaya", 0, 1, 0, 324, 1600, "Fully Furnished", "https://speedhome.com/details/mossaz-by-exsim-petaling-jaya-mdpofpub"),
  listing("Seri Topaz", "Puchong", 3, 3, 2, 1045, 2000, "Partially Furnished", "https://speedhome.com/rent/puchong"),
  listing("Casa Puteri", "Puchong", 3, 2, 1, 1000, 1800, "Partially Furnished", "https://speedhome.com/rent/puchong"),
  listing("Koi Kinrara", "Puchong", 3, 2, 1, 1000, 1800, "Fully Furnished", "https://speedhome.com/rent/puchong"),
  listing("Zentro Residences", "Puchong", 3, 2, 2, 959, 2600, "Fully Furnished", "https://speedhome.com/rent/puchong"),
  listing("Ridzuan Condominium", "Petaling Jaya", 1, 1, 0, 550, 600, "Partially Furnished", "https://speedhome.com/rent/selangor"),
  listing("TTDI Adina", "Shah Alam", 1, 1, 1, 728, 1450, "Fully Furnished", "https://speedhome.com/rent/selangor"),
  listing("Cerrado Southville City", "Dengkil", 2, 1, 2, 656, 1350, "Partially Furnished", "https://speedhome.com/rent/selangor"),
  listing("Metia Residence", "Shah Alam", 3, 2, 2, 1018, 2150, "Fully Furnished", "https://speedhome.com/rent/selangor"),
  listing("Trellis Residences", "Johor Bahru", 2, 1, 1, 650, 2500, "Fully Furnished", "https://speedhome.com/rent/johor"),
  listing("V SummerPlace", "Johor Bahru", 2, 2, 1, 650, 2600, "Partially Furnished", "https://speedhome.com/details/v-summerplace-johor-bahru-yurxoprl"),
  listing("Havana Residences", "Bayan Lepas", 3, 2, 1, 900, 1600, "Fully Furnished", "https://speedhome.com/rent/desa-permai-condo"),
  listing("Youth City Residence", "Nilai", 2, 2, 2, 800, 1900, "Fully Furnished", "https://speedhome.com/rent/desa-permai-condo"),
  listing("REV.O @ Bukit Jalil City", "Bukit Jalil", 1, 1, 0, 2133, 2133, "Unfurnished", "https://beta.speedhome.com/details/revo-bukit-jalil-city-bukit-jalil-sytrguvs"),
  listing("Bandar Baru Kuala Selangor", "Kuala Selangor", 3, 2, 1, 6000, 4000, "Partially Furnished", "https://beta.speedhome.com/details/bandar-baru-kuala-selangor-kuala-selangor-eeknzgnl"),
].map((item, index) => ({ ...item, id: `seed-${index + 1}` }));

const els = {
  form: document.querySelector("#searchForm"),
  input: document.querySelector("#searchInput"),
  suggestions: document.querySelector("#suggestions"),
  status: document.querySelector("#statusMessage"),
  liveScrape: document.querySelector("#liveScrapeToggle"),
  total: document.querySelector("#metricTotal"),
  average: document.querySelector("#metricAverage"),
  median: document.querySelector("#metricMedian"),
  mode: document.querySelector("#metricMode"),
  summaryRows: document.querySelector("#summaryRows"),
  listingGrid: document.querySelector("#listingGrid"),
  listingTemplate: document.querySelector("#listingTemplate"),
  emptyState: document.querySelector("#emptyState"),
  sort: document.querySelector("#sortSelect"),
  activeArea: document.querySelector("#activeAreaLabel"),
  heroListingCount: document.querySelector("#heroListingCount"),
  heroAreaCount: document.querySelector("#heroAreaCount"),
  heroFairPrice: document.querySelector("#heroFairPrice"),
  csv: document.querySelector("#downloadCsv"),
  xlsx: document.querySelector("#downloadXlsx"),
  theme: document.querySelector("#themeButton"),
};

let currentListings = [...seedListings];
let currentQuery = "";
let autocompleteTimer = null;

function listing(name, area, bedrooms, bathrooms, parking, sqft, priceMonth, furniture, url) {
  const speedhomeUrl = normalizeSpeedhomeUrl(url) || url;
  return {
    name,
    area,
    bedrooms,
    bathrooms,
    parking,
    sqft,
    priceMonth,
    priceDay: null,
    priceYear: null,
    furniture,
    unitType: bedroomLabel(bedrooms),
    speedhome_url: speedhomeUrl,
    url: speedhomeUrl,
    source: "SPEEDHOME public listing",
  };
}

function bedroomLabel(bedrooms) {
  if (bedrooms === 0) return "Studio";
  if (bedrooms === 1) return "1 bedroom";
  return `${bedrooms} bedrooms`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?speedhome\.com\/rent\//, "")
    .replace(/^https?:\/\/(beta\.)?speedhome\.com\/details\//, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanQuery(value) {
  return value.trim().replace(/\s+/g, " ");
}

function formatMoney(value) {
  if (!Number.isFinite(value) || value <= 0) return "RM 0";
  return `RM ${Math.round(value).toLocaleString("en-MY")}`;
}

function formatSqft(value) {
  return Number.isFinite(value) && value > 0 ? `${Math.round(value).toLocaleString("en-MY")} sqft` : "Unknown size";
}

function unavailableRent(period) {
  return `the owner doesn't do ${period} rent`;
}

function average(values) {
  const valid = values.filter(Number.isFinite);
  if (!valid.length) return 0;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function median(values) {
  const valid = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!valid.length) return 0;
  const middle = Math.floor(valid.length / 2);
  return valid.length % 2 ? valid[middle] : (valid[middle - 1] + valid[middle]) / 2;
}

function mode(values) {
  const valid = values.filter(Number.isFinite).map((value) => Math.round(value / 50) * 50);
  if (!valid.length) return 0;
  const counts = new Map();
  valid.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0] - b[0])[0][0];
}

function percentile(values, rank) {
  const valid = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!valid.length) return 0;
  const index = (valid.length - 1) * rank;
  const low = Math.floor(index);
  const high = Math.ceil(index);
  if (low === high) return valid[low];
  return valid[low] + (valid[high] - valid[low]) * (index - low);
}

function fairPrice(values) {
  return percentile(values, 0.25);
}

function searchSeed(query) {
  const q = cleanQuery(query).toLowerCase();
  if (!q) return [...seedListings];
  const normalized = q.includes("speedhome.com") ? slugify(q).replace(/-/g, " ") : q;
  return seedListings.filter((listing) =>
    [listing.name, listing.area, listing.unitType, listing.speedhome_url, listing.url]
      .join(" ")
      .toLowerCase()
      .includes(normalized),
  );
}

function getAreaFromQuery(query, listings) {
  if (!cleanQuery(query)) return "Malaysia";
  if (listings.length) {
    const areas = [...new Set(listings.map((item) => item.area))];
    if (areas.length === 1) return areas[0];
  }
  return cleanQuery(query).replace(/^https?:\/\//, "");
}

function sortListings(listings) {
  const sorted = [...listings];
  switch (els.sort.value) {
    case "price-asc":
      return sorted.sort((a, b) => a.priceMonth - b.priceMonth);
    case "price-desc":
      return sorted.sort((a, b) => b.priceMonth - a.priceMonth);
    case "sqft-desc":
      return sorted.sort((a, b) => b.sqft - a.sqft);
    default:
      return sorted.sort((a, b) => a.area.localeCompare(b.area) || a.priceMonth - b.priceMonth);
  }
}

function render(listings) {
  currentListings = sortListings(dedupeListings(listings));
  const rents = currentListings.map((item) => item.priceMonth);
  const sizes = currentListings.map((item) => item.sqft);
  const areaLabel = getAreaFromQuery(currentQuery, currentListings);

  els.total.textContent = currentListings.length.toLocaleString("en-MY");
  els.average.textContent = formatMoney(average(rents));
  els.median.textContent = formatMoney(median(rents));
  els.mode.textContent = formatMoney(mode(rents));
  els.heroListingCount.textContent = seedListings.length.toLocaleString("en-MY");
  els.heroAreaCount.textContent = new Set(seedListings.map((item) => item.area)).size.toLocaleString("en-MY");
  els.heroFairPrice.textContent = formatMoney(fairPrice(rents.length ? rents : seedListings.map((item) => item.priceMonth)));
  els.activeArea.textContent = areaLabel;

  renderSummary(currentListings, sizes);
  renderListings(currentListings);
  if (window.lucide) window.lucide.createIcons();
}

function renderSummary(listings) {
  const byType = new Map();
  listings.forEach((item) => {
    const type = item.unitType || bedroomLabel(item.bedrooms);
    if (!byType.has(type)) byType.set(type, []);
    byType.get(type).push(item);
  });

  const rows = [...byType.entries()]
    .sort((a, b) => bedroomSortValue(a[0]) - bedroomSortValue(b[0]))
    .map(([type, items]) => {
      const rents = items.map((item) => item.priceMonth);
      const sizes = items.map((item) => item.sqft);
      return `
        <tr>
          <td>${type}</td>
          <td>${items.length}</td>
          <td>${formatMoney(average(rents))}</td>
          <td>${formatMoney(median(rents))}</td>
          <td>${formatMoney(mode(rents))}</td>
          <td>${formatMoney(fairPrice(rents))}</td>
          <td>${formatSqft(average(sizes))}</td>
        </tr>
      `;
    });

  els.summaryRows.innerHTML =
    rows.join("") ||
    `<tr><td colspan="7">No data available for this search yet.</td></tr>`;
}

function bedroomSortValue(type) {
  if (type === "Studio") return 0;
  const match = type.match(/\d+/);
  return match ? Number(match[0]) : 99;
}

function renderListings(listings) {
  els.listingGrid.innerHTML = "";
  els.emptyState.hidden = listings.length > 0;

  listings.forEach((item) => {
    const card = els.listingTemplate.content.firstElementChild.cloneNode(true);
    card.href = item.speedhome_url || item.url;
    card.querySelector("h3").textContent = item.name;
    card.querySelector(".listing-area").textContent = item.area;
    card.querySelector(".listing-specs").innerHTML = [
      bedroomLabel(item.bedrooms),
      `${item.bathrooms} bathroom${item.bathrooms === 1 ? "" : "s"}`,
      `${item.parking} parking`,
      formatSqft(item.sqft),
    ]
      .map((label) => `<span>${label}</span>`)
      .join("");
    card.querySelector(".rent-grid").innerHTML = [
      rentBox("Day", item.priceDay ? formatMoney(item.priceDay) : unavailableRent("day"), !item.priceDay),
      rentBox("Month", formatMoney(item.priceMonth), false),
      rentBox("Year", item.priceYear ? formatMoney(item.priceYear) : unavailableRent("year"), !item.priceYear),
    ].join("");
    card.querySelector(".furnishing").textContent = item.furniture || "Furniture status unavailable";
    card.querySelector(".source").textContent = "Open listing";
    els.listingGrid.appendChild(card);
  });
}

function rentBox(period, value, unavailable) {
  return `
    <div class="rent-box ${unavailable ? "unavailable" : ""}">
      <span>${period}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function dedupeListings(listings) {
  const seen = new Set();
  return listings.filter((item) => {
    const detailUrl = item.speedhome_url || item.url;
    const key = detailUrl && isSpeedhomeDetailUrl(detailUrl)
      ? detailUrl.toLowerCase()
      : `${item.name}|${item.area}|${item.priceMonth}|${item.sqft}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function searchHomespeed(query) {
  currentQuery = cleanQuery(query);
  const seeded = searchSeed(currentQuery);

  if (!els.liveScrape.checked) {
    setStatus(`Showing ${seeded.length} indexed SPEEDHOME-derived listings.`);
    render(seeded);
    return;
  }

  setStatus("Gathering public SPEEDHOME data...");
  const scrapeResult = await scrapeSpeedhome(currentQuery);

  // Use only scraped results if successful, otherwise fall back to seed listings
  let toDisplay, fallbackNote;
  if (scrapeResult.blocked || !scrapeResult.listings.length) {
    toDisplay = seeded;
    fallbackNote = " Live scraping was challenged, please try again in 5-10 seconds";
  } else {
    toDisplay = dedupeListings(scrapeResult.listings);
    fallbackNote = ` Showing ${scrapeResult.listings.length} live scraped listing${scrapeResult.listings.length === 1 ? "" : "s"}.`;
  }

  setStatus(`Showing ${toDisplay.length} listing${toDisplay.length === 1 ? "" : "s"}.${fallbackNote}`);
  render(toDisplay);
}

async function scrapeSpeedhome(query) {
  const targetUrl = buildTargetUrl(query);
  const readerUrl = `${SPEEDHOME_READER}${targetUrl.replace(/^https?:\/\//i, "")}`;
  const allOriginsUrl = `${ALL_ORIGINS}${encodeURIComponent(targetUrl)}`;
  // const candidates = [readerUrl, allOriginsUrl];
  const candidates = [readerUrl];

  for (const url of candidates) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      const text = await response.text();
      if (isChallengePage(text)) {
        continue;
      }
      // Fetch succeeded and no challenge detected
      const listings = parseListingsFromText(text, targetUrl);
      return { listings, blocked: false };
    } catch (error) {
      continue;
    }
  }

  return { listings: [], blocked: true };
}

function buildTargetUrl(query) {
  const trimmed = cleanQuery(query);
  if (/^https?:\/\/(www\.)?(beta\.)?speedhome\.com/i.test(trimmed)) return trimmed;
  if (!trimmed) return SPEEDHOME_BASE;
  const slug = slugify(trimmed);
  return `${SPEEDHOME_BASE}rent/${slug}`;
}

function isChallengePage(text) {
  return /Just a moment|security verification|cf_chl|captcha|403: Forbidden/i.test(text);
}

function parseListingsFromText(rawText, sourceUrl) {
  const detailLinks = extractSpeedhomeListingLinks(rawText);
  const usedUrls = new Set();
  const processedKeys = new Set();
  const text = rawText
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)]\((https?:\/\/[^)]+)\)/g, " $1 ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_`>]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/Image: /g, "")
    .trim();

  const patterns = [
    // Strict pattern: name + size/type + beds + baths + parking + price
    /(?:VERIFIED\s*)?(?:\W{0,4}\s*)?(?:(?:ZERO DEPOSIT|COOKING READY)\s+)*([A-Z0-9][A-Za-z0-9@.'()&/\-\s,]{3,90}?)\s*(?:,\s*)?((?:\d{1,3}(?:,\d{3})?|\d{3,4})\s*sqft|(?:SMALL|MEDIUM|MASTER)\s+(?:SHARED|PRIVATE))\s+(\d+)\s+(\d+)\s+(\d+)?[\s\w&/@.'(),+\-]{0,180}?RM\s*([\d,]+)\s*\/\s*month/g,
    // Flexible pattern: name + beds + baths + (maybe parking) + price (size optional)
    /(?:VERIFIED\s*)?(?:\W{0,4}\s*)?(?:(?:ZERO DEPOSIT|COOKING READY)\s+)*([A-Z0-9][A-Za-z0-9@.'()&/\-\s,]{3,90}?)\s+(\d+)\s+(\d+)\s+(\d+)?[\s\w&/@.'(),+\-]{0,120}?RM\s*([\d,]+)\s*\/\s*month/g,
    // Loose pattern: name + RM price (minimal requirements)
    /([A-Z0-9][A-Za-z0-9@.'()&/\-\s,]{3,90}?)\s{1,5}RM\s*([\d,]+)\s*\/\s*month/g,
  ];

  const listings = [];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(text)) && listings.length < 200) {
      let rawName, rawSize, beds, baths, parking, price;

      // Handle different pattern group structures
      if (match.length === 7) {
        // Strict pattern: name + size + beds + baths + parking + price
        [, rawName, rawSize, beds, baths, parking, price] = match;
      } else if (match.length === 6) {
        // Flexible pattern (no size): name + beds + baths + parking + price
        [, rawName, beds, baths, parking, price] = match;
        rawSize = null;
      } else if (match.length === 3) {
        // Loose pattern: name + price
        [, rawName, price] = match;
        rawSize = null;
        beds = null;
        baths = null;
        parking = null;
      } else {
        continue; // Skip if doesn't match any expected pattern
      }

      const dedupeKey = `${rawName}|${price}`.toLowerCase();
      if (processedKeys.has(dedupeKey)) continue;
      processedKeys.add(dedupeKey);

      if (!rawSize) {
        const fallbackSizeMatch = rawName.match(/(\d{1,3}(?:,\d{3})*)\s*sq\s*ft/i);
        if (fallbackSizeMatch) {
          rawSize = fallbackSizeMatch[0];
          rawName = rawName.replace(fallbackSizeMatch[0], "").replace(/\s*,?\s*$/, "").trim();
        }
      }

      const roomType = rawSize && /SMALL|MEDIUM|MASTER/i.test(rawSize);
      const sqft = roomType ? estimateRoomSize(rawSize) : (rawSize ? Number(rawSize.replace(/[^\d]/g, "")) : 0);
      const bedrooms = roomType ? 1 : (beds ? Number(beds) : 1);
      const area = inferArea(rawName, sourceUrl);
      const name = rawName
        .replace(/\bMove-in Now\b/gi, "")
        .replace(/\bVideo Call Viewing\b/gi, "")
        .trim()
        .replace(/,$/, "");

      if (!name || Number(price.replace(/,/g, "")) <= 0) continue;

      const speedhomeUrl = resolveListingUrl(name, sourceUrl, detailLinks, match.index, usedUrls);
      if (isSpeedhomeDetailUrl(speedhomeUrl)) processedKeys.add(speedhomeUrl.toLowerCase());

      listings.push({
        id: `live-${slugify(name)}-${price}`,
        name,
        area,
        bedrooms,
        bathrooms: Number(baths) || 1,
        parking: Number(parking) || 0,
        sqft,
        priceMonth: Number(price.replace(/,/g, "")),
        priceDay: null,
        priceYear: null,
        furniture: inferFurnishing(text, match, name),
        unitType: bedroomLabel(bedrooms),
        speedhome_url: speedhomeUrl,
        url: speedhomeUrl,
        source: "Live scrape",
      });
    }
  }

  return dedupeListings(listings);
}

function normalizeSpeedhomeUrl(value, baseUrl = SPEEDHOME_BASE) {
  if (!value) return "";
  const cleaned = decodeHtmlEntities(String(value).trim()).replace(/\\\//g, "/");
  try {
    const url = new URL(cleaned, baseUrl);
    if (!/(^|\.)speedhome\.com$/i.test(url.hostname)) return "";
    url.hash = "";
    return url.href;
  } catch (error) {
    return "";
  }
}

function isSpeedhomeDetailUrl(value) {
  return /^https?:\/\/(?:www\.)?(?:beta\.)?speedhome\.com\/details\//i.test(value || "");
}

function extractSpeedhomeListingLinks(rawText) {
  const links = [];
  const detailPattern = /(?:https?:\/\/(?:www\.)?(?:beta\.)?speedhome\.com)?\/details\/[^\s)"'<>\\]+/gi;
  let match;

  while ((match = detailPattern.exec(rawText))) {
    const url = normalizeSpeedhomeUrl(match[0]);
    if (!isSpeedhomeDetailUrl(url)) continue;

    links.push({
      url,
      index: match.index,
      slug: slugify(url.split("/").filter(Boolean).pop() || ""),
      context: rawText.slice(Math.max(0, match.index - 1800), match.index + 500),
    });
  }

  return links;
}

function resolveListingUrl(name, sourceUrl, detailLinks, approxIndex, usedUrls) {
  const normalizedSource = normalizeSpeedhomeUrl(sourceUrl);
  if (isSpeedhomeDetailUrl(normalizedSource)) return normalizedSource;
  if (!detailLinks.length) return normalizedSource || SPEEDHOME_BASE;

  const nameSlug = slugify(name);
  const nameWords = new Set(nameSlug.split("-").filter((word) => word.length > 2));
  const scored = detailLinks
    .filter((link) => !usedUrls.has(link.url.toLowerCase()))
    .map((link) => {
      const contextSlug = slugify(link.context);
      const linkWords = new Set(link.slug.split("-").filter((word) => word.length > 2));
      let score = 0;

      if (link.slug.includes(nameSlug)) score += 120;
      if (contextSlug.includes(nameSlug)) score += 80;
      nameWords.forEach((word) => {
        if (linkWords.has(word)) score += 15;
        if (contextSlug.includes(word)) score += 5;
      });
      score -= Math.min(Math.abs(link.index - approxIndex) / 120, 60);

      return { ...link, score };
    })
    .sort((a, b) => b.score - a.score);

  if (scored.length && scored[0].score > 0) return scored[0].url;
  return normalizedSource || SPEEDHOME_BASE;
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function estimateRoomSize(rawSize) {
  if (/MASTER/i.test(rawSize)) return 220;
  if (/MEDIUM/i.test(rawSize)) return 150;
  return 100;
}

function isSizeSegment(value) {
  return /^\d{1,3}(?:,\d{3})*\s*sq\s*ft[,\.]?$/i.test(String(value).trim());
}

function splitCommaSegments(text) {
  const parts = [];
  let current = "";
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === ",") {
      const prev = text[i - 1] || "";
      const next = text[i + 1] || "";
      if (/\d/.test(prev) && /\d/.test(next)) {
        current += char;
        continue;
      }
      parts.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  if (current.trim()) parts.push(current.trim());
  return parts.map((part) => part.replace(/[.,]+$/, "")).filter(Boolean);
}

function inferArea(name, sourceUrl) {
  const parts = splitCommaSegments(String(name));

  if (parts.length > 1) {
    const textParts = parts.filter((part) => !isSizeSegment(part));
    if (textParts.length) {
      return textParts[textParts.length - 1];
    }
    return parts[0];
  }
  const slug = sourceUrl.split("/").filter(Boolean).pop() || "malaysia";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function inferFurnishing(text, match, fallbackText = "") {
  // Expand search window from 800 to 2000 characters for better context capture
  const start = Math.max(0, match.index - 2000);
  const end = Math.min(text.length, match.index + match[0].length + 2000);
  const nearby = `${text.slice(start, end)} ${fallbackText}`;
  
  // Check for unfurnished patterns first (most specific negative case)
  if (/\bunfurnished\b/i.test(nearby) || /\bnot\s+furnished\b/i.test(nearby)) return "Unfurnished";
  
  // Check for partially furnished patterns (middle ground)
  if (/partially\s+furnished/i.test(nearby) || /partialy\s+furnished/i.test(nearby) || /semi[\s-]?furnished/i.test(nearby)) return "Partially Furnished";
  
  // Check for fully furnished patterns (most specific positive case)
  if (/fully\s+furnished/i.test(nearby) || /^furnished$/i.test(nearby.trim())) return "Fully Furnished";
  
  // Check for generic furnished (less specific, might be fully or partially)
  if (/\bfurnished\b/i.test(nearby)) return "Fully Furnished";
  
  return "Furniture status unavailable";
}

function setStatus(message) {
  els.status.textContent = message;
}
async function fetchAutocompleteSuggestions(keywords) {
  console.log(keywords);
  try {
    const response = await fetch(AUTOCOMPLETE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTOCOMPLETE_API_KEY,
      },
      body: JSON.stringify({ keywords }),
    });
    if (!response.ok) return [];
    const data = await response.json();
    const labels = [
      ...(data.PROPERTY || []),
      ...(data.LOCATION || [])
    ].map(item => item.label);
    // const propertyNames = data.LOCATION.map(p => p.label)
    // console.log(data.LOCATION);
    // console.log(items);
    // const labels = data.LOCATION.map(p => p.label)
    // const labels = items
    //   .map((item) => (typeof item === "string" ? item : item?.label || item?.name || ""))
    //   .filter((label) => typeof label === "string" && label.trim())
    //   .map((label) => label.trim());
    console.log(labels);
    return [...new Set(labels)].slice(0, 12);
  } catch (error) {
    return [];
  }
}

function updateSuggestionsDropdown(suggestions) {
  els.suggestions.innerHTML = suggestions
    .map((value) => `<option value="${value}"></option>`)
    .join("");
}


function exportRows() {
  return currentListings.map((item) => ({
    "Listing name": item.name,
    "Property / area": item.area,
    "Bedroom type": item.unitType,
    Bedrooms: item.bedrooms,
    "Price per day": item.priceDay ? formatMoney(item.priceDay) : unavailableRent("day"),
    "Price per month": formatMoney(item.priceMonth),
    "Price per year": item.priceYear ? formatMoney(item.priceYear) : unavailableRent("year"),
    "Unit size (sqft)": item.sqft,
    "Furniture status": item.furniture,
    "SPEEDHOME URL": item.speedhome_url || item.url,
  }));
}

function fileBaseName(extension) {
  const area = slugify(getAreaFromQuery(currentQuery, currentListings) || "malaysia") || "malaysia";
  const stamp = new Date()
    .toISOString()
    .replace("T", "-")
    .replace(/\..+/, "")
    .replace(/:/g, "-");
  return `${area}-${stamp}--SPEEDHOME.${extension}`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadCsv() {
  const rows = exportRows();
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ].join("\n");
  downloadBlob(new Blob([csv], { type: "text/csv;charset=utf-8" }), fileBaseName("csv"));
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function downloadXlsx() {
  const rows = exportRows();
  if (!rows.length) return;
  downloadBlob(createXlsxBlob(rows), fileBaseName("xlsx"));
}

function createXlsxBlob(rows) {
  const headers = Object.keys(rows[0]);
  const sheetRows = [headers, ...rows.map((row) => headers.map((header) => row[header]))];
  const worksheet = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
      <sheetData>
        ${sheetRows
      .map(
        (row, rowIndex) => `<row r="${rowIndex + 1}">
              ${row
            .map((value, columnIndex) => {
              const cell = `${columnName(columnIndex + 1)}${rowIndex + 1}`;
              return `<c r="${cell}" t="inlineStr"><is><t>${escapeXml(value)}</t></is></c>`;
            })
            .join("")}
            </row>`,
      )
      .join("")}
      </sheetData>
    </worksheet>`;

  const files = {
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
        <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
        <Default Extension="xml" ContentType="application/xml"/>
        <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
        <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
      </Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
        <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
      </Relationships>`,
    "xl/workbook.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
        <sheets><sheet name="Homespeed" sheetId="1" r:id="rId1"/></sheets>
      </workbook>`,
    "xl/_rels/workbook.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
        <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
      </Relationships>`,
    "xl/worksheets/sheet1.xml": worksheet,
  };

  return new Blob([zipFiles(files)], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}

function escapeXml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function columnName(index) {
  let name = "";
  while (index > 0) {
    const remainder = (index - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    index = Math.floor((index - 1) / 26);
  }
  return name;
}

function zipFiles(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const data = encoder.encode(content.replace(/>\s+</g, "><").trim());
    const crc = crc32(data);
    const localHeader = zipLocalHeader(nameBytes, data, crc);
    const centralHeader = zipCentralHeader(nameBytes, data, crc, offset);
    localParts.push(localHeader, data);
    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = zipEndRecord(Object.keys(files).length, centralSize, offset);
  return concatUint8Arrays([...localParts, ...centralParts, end]);
}

function zipLocalHeader(nameBytes, data, crc) {
  const header = new Uint8Array(30 + nameBytes.length);
  const view = new DataView(header.buffer);
  view.setUint32(0, 0x04034b50, true);
  view.setUint16(4, 20, true);
  view.setUint16(6, 0, true);
  view.setUint16(8, 0, true);
  view.setUint16(10, dosTime(), true);
  view.setUint16(12, dosDate(), true);
  view.setUint32(14, crc, true);
  view.setUint32(18, data.length, true);
  view.setUint32(22, data.length, true);
  view.setUint16(26, nameBytes.length, true);
  header.set(nameBytes, 30);
  return header;
}

function zipCentralHeader(nameBytes, data, crc, offset) {
  const header = new Uint8Array(46 + nameBytes.length);
  const view = new DataView(header.buffer);
  view.setUint32(0, 0x02014b50, true);
  view.setUint16(4, 20, true);
  view.setUint16(6, 20, true);
  view.setUint16(8, 0, true);
  view.setUint16(10, 0, true);
  view.setUint16(12, dosTime(), true);
  view.setUint16(14, dosDate(), true);
  view.setUint32(16, crc, true);
  view.setUint32(20, data.length, true);
  view.setUint32(24, data.length, true);
  view.setUint16(28, nameBytes.length, true);
  view.setUint32(42, offset, true);
  header.set(nameBytes, 46);
  return header;
}

function zipEndRecord(fileCount, centralSize, centralOffset) {
  const record = new Uint8Array(22);
  const view = new DataView(record.buffer);
  view.setUint32(0, 0x06054b50, true);
  view.setUint16(8, fileCount, true);
  view.setUint16(10, fileCount, true);
  view.setUint32(12, centralSize, true);
  view.setUint32(16, centralOffset, true);
  return record;
}

function concatUint8Arrays(parts) {
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const merged = new Uint8Array(total);
  let offset = 0;
  parts.forEach((part) => {
    merged.set(part, offset);
    offset += part.length;
  });
  return merged;
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let value = i;
    for (let j = 0; j < 8; j += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    table[i] = value >>> 0;
  }
  return table;
})();

function crc32(data) {
  let crc = 0xffffffff;
  data.forEach((byte) => {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function dosTime() {
  const date = new Date();
  return (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
}

function dosDate() {
  const date = new Date();
  return ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
}

function setThemeMode(dark) {
  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  els.theme.innerHTML = dark
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';
  if (window.lucide) window.lucide.createIcons();
  localStorage.setItem("homespeed-theme", dark ? "dark" : "light");
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("homespeed-theme");
  setThemeMode(savedTheme === "dark");
}

loadSavedTheme();

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchHomespeed(els.input.value);
});

els.input.addEventListener("input", async () => {
  const value = cleanQuery(els.input.value);

  clearTimeout(autocompleteTimer);

  if (!value) {
    currentQuery = "";
    setStatus("Ready. Search a place like Kuala Lumpur, Selangor, Puchong, KLCC, or paste a SPEEDHOME URL.");
    render(seedListings);
    updateSuggestionsDropdown([]);
    return;
  }

  autocompleteTimer = setTimeout(async () => {
    const suggestions = await fetchAutocompleteSuggestions(value);
    updateSuggestionsDropdown(suggestions);
  }, 100);
});

els.sort.addEventListener("change", () => render(currentListings));
els.csv.addEventListener("click", downloadCsv);
els.xlsx.addEventListener("click", downloadXlsx);
els.theme.addEventListener("click", () => {
  setThemeMode(!document.body.classList.contains("dark"));
});

searchHomespeed("");
