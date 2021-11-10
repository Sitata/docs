---
sidebar_position: 2
title: Getting Started
---

# COVID-19 Test Booking Widget

![Covid Test Booking Image](/img/widgets/covid-test-booking.jpeg)

This widget allows your travellers to search and book their COVID-19 test.
Typically we host this widget on our own domain with a CNAME pointer to accomplish your branding.
If you do wish to host this widget, the setup is similar to the [Entry Requirement Widget](../entry_req/entry-widget.md).

```html
<div id="booking-cont"></div>

<script src="https://www.sitata.com/widgets/sitata-covid-wizard.js">
</body>
```

and

```javascript
window.document.addEventListener('sitata:restrictionsReady', function() {
  var el = document.getElementById("booking-cont")
  Sitata.restrictions
    .setAuthToken('PUB <TOKEN HERE>')
    .setOrganizationId('<ORG ID HERE>')
    .run(el)
})
```

## Methods
The following methods are available:

| Parameter | Description |
| --------- | ----------- |
| setMode(mode) | When mode is 'restrictions', will only show entry requirements. When mode is 'covid-test', will only perform test bookings.
| setDestinationCode(code) | The [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to prepopulate the destination. e.g. IN for India 
| setDepartureCode(code) | The [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to prepopulate the departure. e.g. CA for Canada 
| setDepartureDate(date) | Expects a javascript date object
| setNationality(code) | The [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to prepopulate the nationality. e.g. CA for Canada 
| setAuthToken(\"PUB TOKEN_HERE\") | See setup example above. Requires your auth token.
| setOrganizationId(orgId) | Requires your organization identifier as a string.
| setLanguage(lang) | If you wish to override the language detection. Expects a two character language code.
| run(element) | Required. Loads and runs the widget. Requires the html element.

## Events
The following events are available

| Name | Description |
| ---- | ----------- |
| sitata:restrictionsReady | Fired when the widget has been downloaded and is ready to be initalized.

