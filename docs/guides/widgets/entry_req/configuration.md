---
sidebar_position: 2
title: Configuration
---

# Configuration

Configuration of the widget can occur through an options object passed to the initalization (`inject`) function of the widget. For example:

```javascript
let options = {
    token: token,
    orgId: id,
    // disable airport search
    disableAirport: true,
};

Sitata.covidMap.inject(el, options);
```


In some cases, configuration can occur on the fly through various functions. See below.

## Options

The following configuration options are available:


| property | type | description |
| -------- | ---- | ----------- |
| departureCode | String | The [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to prepopulate the departure. e.g. CA for Canada 
| destinationCode | String | The [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to prepopulate the destination. e.g. IN for India
| transitCode | String | The [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to prepopulate the transit country. e.g. ES for Spain
| nationality | String | The [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to prepopulate the nationality. e.g. CA for Canada
| departureDate | String | The date of departure using the format YYYY-MM-DD
| vaccinated | Boolean | If true, will return only results for fully vaccinated travellers. If false, will return results for unvaccinated (or unknown) travellers. The unvaccinated data points will often have comments about vaccination status. 
| disableAirport | Boolean | If true, will disable airport searching in the form inputs. 
| hideLegend | Boolean | If true, will hide the legend. 
| token | String | Your organization's public authentication token. 
| o | String | A comma-separated list of [ISO 3166 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes which are permitted for display.
| re | String | A string describing which travel restrictions should be excluded. See below.
| ee | String | A string describing which entry requirements should be excluded. See below.
| oc | Boolean | If true, will return names of various countries in a way that is acceptable for display by mainland China standards. 
| cturl | String | Override the link for COVID-19 test bookings. 
| entryColors | Object | An object describing a color set for use on the map. See below.
| colorBlindEntryColors | Object | An object describing a color set for use on the map for color blind users. See below.
| irregularFillColors | Object | An object describing a color set for use on the map for regions that are not covered. See below.
| hideHeader | Boolean | If true, will hide the search header.
| hideMap | Boolean | If true, will hide the map.
| prioritySorted | Boolean | If true, will sort entry requirements by priority.

### Travel Restriction Exclusions

The `re` option allows you to remove certain categories of travel restrictions from display in the widget. The string has a specific format which starts with a country code separated by a separated by dash (`-`) and followed by a comma-separated list of Travel Restriction category types. Pairings are separated by a dash (`-`). This pairing will allow you to remove specific categories of information for specific countries. If you need to remove categories for all countries, you may use an asterisk (`*`).

Examples:
```javascript
// remove travel restriction type 7 for all countries
{
    re: "*-7"
}
// remove travel restriction types 1, 2, and 3 for Canada and India
{
    re: "CA-1,2,3-IN-1,2,3"
}
// remove travel restriction types 1, 2, and 3 for Canada and India; and types 402 and 2 for Germany
{
    re: "CA-1,2,3-IN-1,2,3-DE-402,2"
}
```

### Entry Requirement Exclusions

The `ee` option allows you to remove certain categories of entry requirements from display in the widget. The format used to specify these exclusions is exactly the same as with Travel Restriction Exclusions.

Examples:
```javascript
// remove entry requirement type 7 (insurance) for all countries
{
    re: "*-7"
}
// remove entry requirement types 1, 2, and 3 for Canada and India
{
    re: "CA-1,2,3-IN-1,2,3"
}
// remove entry requirement types 1, 2, and 3 for Canada and India; and types 5 and 2 for Germany
{
    re: "CA-1,2,3-IN-1,2,3-DE-5,2"
}
```

### Specifying Colors

The configuration options `entryColors`, `colorBlindEntryColors`, `irregularFillColors` allow you to minimally customize the colors used in the map. 

The following is an exmaple of how to specify colors. `pct` represents the percentage range from 0.0 to 1.0 across a gradient. The `color` object represents the hexidecimal representation of the color across red, green and blue.

```javascript
let irregular = [
    { pct: 0.0, color: { r: 0x59, g: 0x61, b: 0x69 } },
    // { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
    { pct: 1.0, color: { r: 0x2c, g: 0x3e, b: 0x50 } }
]
let entry = {
    indeterminate: { pct: 1.0, color: { r: 0x34, g: 0x49, b: 0x5e } },
    low: { pct: 1.0, color: { r: 0x27, g: 0xae, b: 0x60 } },
    medium: { pct: 1.0, color: { r: 0xe6, g: 0x7e, b: 0x22 } },
    high: { pct: 1.0, color: { r: 0xc0, g: 0x39, b: 0x2b } }

// options object
let opts = {
    entryColors: entry,
    irregularFillColors: irregular
}
```

## Functions

The following functions are available:

| Function | Arguments | Description |
| -------- | --------- | ----------- |
| setDepartureCode | (String) | Set the departure country of the first segment
| setDestinationCode | (String) | Set the destination country of the first segment
| setNationality | (String) | Set the nationality country of the first segment
| setTransitCode | (String) | Set the transit country of the first segment
| setVaccinated | (Boolean) | Set the vaccination status
| setDepartureDate | (String) | Set the departure date
| setHideHeader | (Boolean) | Show or hide the search header
| setHideMap | (Boolean) | Show or hide the map
| setPrioritySorted | (Boolean) | If true, will sort entry requirements by priority. Default is false.
| doSearch() | () | Execute a search programatically

## Events

The following events are available and are triggered on the window `document` object.

| Event Name | Description |
| ---------- | ----------- |
| sitata:covidMapReady | Fired when the widget has been downloaded and is ready to be initalized.
| sitata:nationality | Fired when the nationality value changes. Event details contain the country selected.
| sitata:departure | Fired when the departure value changes. Event details contain the country selected.
| sitata:destination | Fired when the destination value changes. Event details contain the country selected.
| sitata:transit | Fired when the transit value changes. Event details contain the country selected.

Example:

```
window.document.addEventListener("sitata:departure", function(event) {
    let value = event.details
    console.log('value', value)
});
```