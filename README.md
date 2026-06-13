# Homespeed

Homespeed is a responsive public apartment listing prototype for a job test. It searches SPEEDHOME-style rental data, summarizes prices by unit type, and exports the active result set as CSV or XLSX.

## How to Run

Open `index.html` in a browser. No login, build step, local server, Node.js, or Python runtime is required.

## Features

- Search by apartment name, area, or SPEEDHOME URL.
- Dropdown suggestions from indexed apartment and area names.
- Live SPEEDHOME scrape attempt through public routes/readers.
- Fallback seeded dataset derived from public SPEEDHOME listing snippets when live scraping is challenged.
- Price summary by studio, 1 bedroom, 2 bedrooms, 3 bedrooms, and larger units.
- Summary fields: total units, average rent, median rent, most common rent, fair price, and average sqft.
- Listing cards with apartment name, area, bedroom count, rent availability, size, furnishing status, and SPEEDHOME link.
- CSV and XLSX download using the naming format `area-date-time--SPEEDHOME`.

## Fair Price Logic

Homespeed treats fair price as the lower quartile, or 25th percentile, monthly rent for the active area and unit type. This gives the user a realistic "best price you could get" without simply choosing the cheapest possible outlier.

## Scraping Note

SPEEDHOME currently presents Cloudflare verification to automated requests in this environment. The app still includes the live scraper pipeline, but it falls back to seeded public listing data so the prototype remains reviewable.
