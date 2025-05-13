# gtm-enhanced-conversion-variable.js
This script returns a structured object with user data for enhanced conversion tracking using variables in Google Tag Manager.

# Shopify Tracking Scripts

This repo contains custom JavaScript snippets and Google Tag Manager configurations to implement advanced tracking on Shopify storefronts—primarily focused on Google Ads Enhanced Conversions.

## 📦 Included Scripts

### 1. `gtag-enhanced-conversion.js`
A browser script that listens for Shopify’s `checkout_completed` event and sends purchase + enhanced user data to the Google Ads dataLayer via `gtag`.

- Tracks successful purchases
- Pushes enhanced conversions (email, phone, address)
- Supports transaction ID, currency, subtotal, and product IDs

**Usage:** Add to Shopify theme (e.g., in `theme.liquid`) or load via Script Tag App // Google & YouTube or Custom Events 
**Note:** Replace `AW-XXXXXXXXX` and conversion label with your own Google Ads IDs.

---

### 2. `gtm-enhanced-conversion-variable.js`
A Google Tag Manager **Custom JavaScript Variable** that returns structured enhanced conversion data.

- Requires GTM variables for `email`, `phone_number`, and `address` components
- Can be used in a `gtag("set", "user_data", ...)` call

**Usage:**  
Create a new **Custom JavaScript Variable** in GTM and paste the contents of this file.  
Reference it in your tag like:

```javascript
gtag("set", "user_data", {{User-Provided Data 1}});
