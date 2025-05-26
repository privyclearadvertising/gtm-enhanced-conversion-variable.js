# GTM-Enhanced-Conversion-Variable

Capture user-provided data in **Google Tag Manager** (GTM) and send it to **Google Ads Enhanced Conversions**

---

##  Files

| File | Purpose |
|------|---------|
| **`gtm-enhanced-conversion-variable.js`** | Custom JavaScript Variable that returns a properly-formatted `user_data` object for `gtag("set", …)` |

---

##  Quick Start

1. **Create GTM variables** for each data point you collect (DOM Element, Data Layer, or Auto-Event).  
   *Email, Phone, First Name, Last Name, Street, City, Region/State, ZIP, Country*

2. **Add the Custom JS Variable**  
   *GTM → Variables → New → Custom JavaScript → paste the code below → name it `Enhanced Conversion Object`.*

3. **Enable Enhanced Conversions** in Google Ads  
   *Tools & Settings → Conversions → select your conversion action → Settings → Enhanced Conversions → Turn On → choose “Google Tag Manager.”*

4. **Reference the variable** in your Google Ads conversion tag  
   - **Template Tag:** Toggle **Enhanced Conversions** → choose **Variable** → pick `Enhanced Conversion Object`.  
   - **Custom HTML Tag:**  
     ```html
     <script>
       gtag('set', 'user_data', {{Enhanced Conversion Object}});
     </script>
     ```

5. **Publish & Test**  
   *Tag Assistant Preview* → submit your form → confirm a `user_data` payload with hashed values appears.

