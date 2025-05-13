# gtm-enhanced-conversion-variable.js

This script is designed for use as a **Custom JavaScript Variable** in Google Tag Manager. It returns a structured object containing user-provided data (email, phone, and address) for Enhanced Conversion tracking in Google Ads.

---

## Purpose

Enhanced Conversions improve tracking accuracy by securely sending hashed customer data to Google Ads. This variable gathers that data from other GTM variables and packages it into the correct format expected by the `gtag("set", "user_data", ...)` method.

---

## File: `gtm-enhanced-conversion-variable.js`

This is a **Custom JavaScript Variable** in GTM that outputs the following structure:

```javascript
{
  email: {{Your Email Variable}},
  phone_number: {{Your Phone Variable}},
  address: {
    first_name: {{First Name Variable}},
    last_name: {{Last Name Variable}},
    street: {{Street Address Variable}},
    city: {{City Variable}},
    region: {{Region/State Variable}},
    postal_code: {{ZIP Code Variable}},
    country: {{Country Variable}}
  }
}


---

## Create Variables in GTM

Before using this variable, you must create the following GTM variables (usually as DOM Elements, Data Layer Variables, or Auto-Event Variables) depending on your data layer or form setup.

Field	Variable Name Example	Type
Email	email	Data Layer / DOM Element
Phone	phone_number	Data Layer / DOM Element
First Name	first_name	DOM Element or DL Variable
Last Name	last_name	DOM Element or DL Variable
Street	street	DOM Element or DL Variable
City	city	DOM Element or DL Variable
Region/State	region	DOM Element or DL Variable
Postal Code	postal_code	DOM Element or DL Variable
Country	country	DOM Element or DL Variable

You may name these however you'd like, but you must update the variable names inside gtm-enhanced-conversion-variable.js to match your setup.

## How To Use in GTM

1. Create a new Custom JavaScript Variable

  Name it: User Provided Data or Enhanced Conversion Object

  Paste in the contents of gtm-enhanced-conversion-variable.js

2. Create all required GTM variables

  These must extract the corresponding values from your page/form

3. Reference the variable in your Google Ads tag

  In your Google Ads conversion tag (with Enhanced Conversions enabled), add this line to your tag's custom HTML or use the UI field if available:

gtag("set", "user_data", {{User Provided Data}});

4. Submit your form

  Check the Tag Assistant for the user_data payload

  Confirm values are present and properly mapped
