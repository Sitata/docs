---
sidebar_position: 1
title: Getting Started
---

# Entry Requirement and Travel Restrictions Widget

![Map Image](/img/widgets/map.jpeg)

This widget is a great way to display entry requirement and travel restrictions to your users without having to do any coding to interact with the Sitata API. The widget will inject content into your page asynchronously using only a few lines of javascript. There are also a number of configuration options which will allow you to remove the map, remove the search bar, remove countries or content, and a few more. Please note that most configuration options are reserved for paid subscribers.

## Getting Started

Embedding the widget into your page is straightforward and can be accomplished with a few lines of code.

To start, make a reference to the widget javascript in your html layout and add a place in your page where the widget can be injected.

```html
<div id="widget-container">
<!-- widget will be inserted here -->
</div>
<script async type="text/javascript" src="https://www.sitata.com/widgets/sitata-covid-map-v2.js"></script>
```

Next, you will need to wait for the widget to inject itself into the page before you can configure it. You can do this by listening on the document object for the `sitata:covidMapReady` event.

```javascript
function startWidget() {
    // initialize the widget here
}
window.document.addEventListener("sitata:covidMapReady", startWidget);
```

Lastly, you should initalize the widget with any necessary configuration options.

```javascript
function startWidget() {
  // initialize the widget here
  var el = document.getElementById("widget-container");
  // your organization's public token
  var token = "cf25bcd2-ac18-45e4-bbc1-0ba5b64de489";
  // your organization's identifier
  var orgId = "f2df778c-32d1-4931-8122-c2b2310f49fd";

  let widget = new window.Sitata.covidMap(el, {
    token: token,
    orgId: orgId,
    // disable airport search
    disableAirport: true,
  }).run()
  
  // inject your own google analytics property - this can occur after cookie acceptance
  window.Sitata.covidMap.injectAnalytics('G-427FFKCWBT')
}
window.document.addEventListener("sitata:covidMapReady", startWidget);
```

## CSS Styles Recommendations

If you intend on using the map widget with the map displayed, we recommend fixing the height of the widget for screen sizes larger than tablet.

```css
.sit-map-app {
  width: 100%;
  /* as an example */
  height: 90vh;
}

@media screen and (max-width: 768px) {
  /* full height on tablets and smaller */
  .sit-map-app {
    height: 100%;
  }
}
```

Feel free to experiment with your own css overrides.

Next we will explain configuration options.