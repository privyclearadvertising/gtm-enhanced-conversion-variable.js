// GTM Custom JavaScript Variable for Google Ads Enhanced Conversions
// This script returns a structured object with user data for enhanced conversion tracking.
// You must define the GTM variables listed below and ensure they return the correct values from the form or DOM.

function () {
  return {
    "email": yourEmailVariable, // Replace with GTM variable that gets user's email
    "phone_number": yourPhoneVariable, // Replace with GTM variable for phone

    "address": {
      "first_name": yourFirstNameVariable,
      "last_name": yourLastNameVariable,
      "street": yourStreetAddressVariable,
      "city": yourCityVariable,
      "region": yourProvinceVariable,
      "postal_code": yourPostalCodeVariable,
      "country": yourCountryVariable
    }
  };
}
