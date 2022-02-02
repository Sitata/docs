---
sidebar_position: 3
title: How Do I?
---


# How Do I...?

The Travel Booking Overlay Widget has a number of configuration functions to help integrate the software with your own platform. If you have a situation that can't fully be addressed by our options, please let us know and we can take a look at introducing new features for you.

## How do I control the widget programatically?

If the automated form listeners aren't working for you, you can use this widget in a pure programattic way. You can set all values that affect the list of restriction values displayed and trigger the visibility of the overlay when you see fit. 

```javascript
Sitata.travelSearch
    .setAuthToken("<YOUR TOKEN HERE>")
    .setOrganizationId("<YOUR ORG ID HERE>")
    .run()
```

After the minimal setup, you can attach listeners to your own form and control the widget directly. For example:

```javascript

// using your own listeners and events
// ...
function onDestinationChange(code) {
    Sitata.travelSearch.setDestinationCode(code)
}
function onDepartureChange(code) {
    Sitata.travelSearch.setDepartureCode(code)
}

// since date, and vaccination status have defaults and the fact that
// nationality is not necessary for a search, you will only have to set
// destination and departure. After setting these values, you can respond
// to events to display the necessary UI/UX on your own
window.document.addEventListener('sitata:doSearch', function(e) {
    console.log('doSearch', e.detail)
    // here you might want to display a loading spinner or some other UI/UX if 
    // the panel is not showing.
});

window.document.addEventListener('sitata:noResults', function(e) {
    console.log('noResults', e.detail)
    // here is where you might want to hide a previously shown display or 
    // simply adjust your UI to show that there are no results (unlikely)
})

window.document.addEventListener('sitata:hasResults', function(e) {
    console.log('hasResults', e.detail)
    // here is where you might display a prompt to display the fact that
    // there are results to show. Then you could use Sitata.travelSearch.showPanel() to
    // reveal the results when the user clicks on the above prompt
})

```

With the above setup, you will have full creativity and control to use the widget as you see fit. For example, you are not limited to attaching the content near or on a travel booking form. You could instead display the information inline with search results or some other creative type of display. 