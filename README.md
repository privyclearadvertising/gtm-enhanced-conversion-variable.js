# gtm-enhanced-conversion-variable.js
This script returns a structured object with user data for enhanced conversion tracking using variables in Google Tag Manager.

### 1. `gtm-enhanced-conversion-variable.js`
A Google Tag Manager **Custom JavaScript Variable** that returns structured enhanced conversion data.

- Requires GTM variables for `email`, `phone_number`, and `address` components
- Can be used in a `gtag("set", "user_data", ...)` call

**Usage:**  
Create a new **Custom JavaScript Variable** in GTM and paste the contents of this file.  
Reference it in your tag like:

```javascript
gtag("set", "user_data", {{User-Provided Data 1}});
