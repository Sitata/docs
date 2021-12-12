---
sidebar_position: 3
title: How Do I?
---


# How Do I...?

The "map" widget has a number of configuration options to help integrate the software with your own platform. If you have a situation that can't fully be addressed by our options, please let us know and we can take a look at introducing new features for you.

## How do I present the results on their own?

If you are looking for a way to simply display results without the interaction of the map, then you can use the `hideMap` configuration option or the `setHideMap(true)` function. This will remove the map interaction from the tool. 

```javascript
let widget = new window.Sitata.covidMap(el, {
    token: token,
    orgId: orgId,
    hideMap: true
}).run()

// or
widget.setHideMap(true)
```

Often this option is combined with hiding the search header as well and then the results can be controlled programatically. Perhaps you have your own search bar that you want to use for selection of the necessary inputs such as departure and destination country. In this situation, we recommend hiding the search header of the widget, hiding the map, and using the provided javascript functions for controlling the search and results for display. For example:

```javascript
let widget = new window.Sitata.covidMap(el, {
    token: token,
    orgId: orgId,
    hideMap: true,
    hideHeader: true
}).run()

// then some time later and from your own search interface
widget.setDepartureCode("CA")
widget.setDestinationCode("IN")
widget.setTransitCode("AE")
widget.setNationality("CA")
widget.setDepartureDate("2022-05-01")
widget.setVaccinated(true)
// perform the search and display results
widget.doSearch()
```

When displaying only the search results, we recommend ensuring the widget can expand in vertical length. The following css should do the trick:

```css
.sit-map-app {
  height: 100%;
}
```

<div style={{textAlign: 'center'}}>

![Results only](/img/widgets/covid-map-results-only.jpeg)

</div>

In this way, you will be left with the results only. Feel free to override our css styles to suit the look and feel of your pages.