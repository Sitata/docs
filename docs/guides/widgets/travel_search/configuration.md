---
sidebar_position: 2
title: Configuration
---

# Configuration

Unlike other widgets, configuration of this widget occurs through functions. See below.

## Functions

The following functions are available:

| Function | Arguments | Description |
| -------- | --------- | ----------- |
| setDepartureInputEl | (element) | If set, the widget will attempt to listen to the given element's 'change' and 'keydown' events to determine the departure country or airport.
| setDestinationInputEl | (element) |  If set, the widget will attempt to listen to the given element's 'change' and 'keydown' events to determine the destination country or airport.
| setPromptEl | (element) | If set, the widget will inject prompt text into the element given that let's the user know if restrictions are present which includes a link to trigger visibility.
| setPromptTxt | (String) | If set, the widget will use this text within the first prompt sentence.
| setPromptLinkTxt | (String) | If set, the widget will use this text within the link in the prompt text.
| setDepartureCode | (String) | Set the departure country. Uses ISO 3166 Alpha 2 character codes. 
| setDepartureAirportCode | (String) | Set the departure airport code. Uses IATA airport codes.
| setDepartureDate | (String) | Set the departure date
| setDestinationCode | (String) | Set the destination country. Uses ISO 3166 Alpha 2 character codes.
| setDestinationAirportCode | (String) | Set the destination airport code. Uses IATA airport codes.
| setNationality | (String) | Set the nationality country. Uses ISO 3166 Alpha 2 character codes.
| setVaccinated | (Boolean) | Set the vaccination status
| setExclusions | (Array) | Specify which data points to exclude. See below.
| setAuthToken | (String) | Set your authentication token.
| setOrganizationId | (String) | Set your organization token. 
| setLanguage | (String) | The widget will attempt to determine the user's language automatically. This will force a language selection. Use two character languages codes. e.g. 'es' for Spanish.
| showPanel | (Boolean) | When true, will make the panel visible.
| doSearch | () | Will fetch entry requirements and travel restrictions from Sitata.





### Entry Requirement and Travel Restriction Exclusions

The `setExclusions` function allows you to remove certain categories of travel restrictions and/or entry requirements from display in the widget. Please see the object format in the examples below. If you need to remove categories for all countries, you may use an asterisk (`*`).

Examples:
```javascript
// remove travel restriction type 0 and type 3 for all countries
// remove entry requirement types 1 and 2 for all countries
[
    {
        countryCode: '*',
        travelRestrictionTypes: [0, 3],
        entryRequirementTypes: [1, 2]
    }
]
// remove travel restriction types 1, 2, and 3 for Canada and India
[
    {
        countryCode: 'CA',
        travelRestrictionTypes: [1, 2, 3],
    },
    {
        countryCode: 'IN',
        travelRestrictionTypes: [1, 2, 3],
    }
]
```


## Events

The following events are available and are triggered on the window `document` object.

| Event Name | Description |
| ---------- | ----------- |
| sitata:travelSearchReady | Fired when the widget has been downloaded and is ready to be initalized.
| sitata:selectCountry | Fired when a country is selected. Event details contain the country selected and for which field.
| sitata:entryClick | Fired when an entry requirement is clicked. Event details contain the country and type of restriction.
| sitata:restrictionClick | Fired when a local travel restriction clicked. Event details contain the country and type of restriction.
| sitata:vaccinatedClick | Fired when the user has selected a vaccination status. Event details contain the value selected.
| sitata:noResults | Fired when no results are available for the requested search terms.
| sitata:hasResults | Fired when search results are available for the requested search term.
| sitata:doSearch | Fired when the user has made a search request.

Example:

```
window.document.addEventListener("sitata:selectCountry", function(event) {
    let value = event.details
    console.log('value', value)
});
```