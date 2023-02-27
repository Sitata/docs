---
sidebar_position: 1
title: Getting Started
---

# Entry Requirements Flight Search Overlay Widget

![Map Image](/img/widgets/covid-flight-search.jpg)

This widget is a great way to display entry requirement and travel restrictions within your flight search and booking system without having to do any coding to interact with the Sitata API. The widget will inject content into your page asynchronously using only a few lines of javascript. There are also a number of configuration options which will allow you to trigger functionality manually. 

## Getting Started

Embedding the widget into your page is straightforward and can be accomplished with a few lines of code.

To start, make a reference to the widget javascript in your html layout. This widget will inject its content when the widget is started.

```html
<script async type="text/javascript" src="https://www.sitata.com/widgets/sitata-travel-search.js"></script>
```

Next, you will need to wait for the widget to inject itself into the page before you can configure it. You can do this by listening on the document object for the `sitata:travelSearchReady` event.

```javascript
function startWidget() {
    // initialize the widget here
}
window.document.addEventListener('sitata:travelSearchReady', startWidget)
```

Lastly, you should initialize the widget with any necessary configuration options.

```javascript
function startWidget() {
  // your organization's public token
  var token = "<YOUR TOKEN HERE>";
  // your organization's identifier
  var orgId = "<YOUR ORG ID HERE>";

  Sitata.travelSearch
    .setAuthToken(token)
    .setOrganizationId(orgId)
    // set to your form's departure input element if you would like
    // the widget to try to automatically listen to user input and guess
    // the correct country or airport. This is optional and it's recommended
    // that you use manual javascript triggers instead for more control.
    .setDepartureInputEl(departureInputElement)
    // set to your form's destination input element if you would like
    // the widget to try to automatically listen to user input and guess
    // the correct country or airport. This is optional and it's recommended
    // that you use manual javascript triggers instead for more control.
    .setDestinationInputEl(destinationInputElement)
    // set this to an element in your travel search form where the widget
    // can inject content to prompt the user to view restrictions. This is
    // optional and you can trigger the form automatically.
    .setPromptEl(promptContainerElement)
    // Set this is you want the widget to inject the prompt message and you
    // want to control the message. The default text is:
    // "There are travel restrictions for your trip."
    .setPromptTxt('Restrictions present')
    // Set this is you want the widget to inject the prompt message and you
    // want to control the message of the link text. The default text is:
    // "Read more."
    .setPromptLinkTxt('Learn more.')
    // finish with the run command
    .run()

  
  // inject your own google analytics property - this can occur after cookie acceptance
  window.Sitata.travelSearch.injectAnalytics('<YOUR GOOGLE ANALYTICS ID HERE'>)
}
```

## CSS Styles

This widget is intentionally styled with minimum styles. With the exception of some color variables, all styles are nested within a class named `sit-ts-widget` which wraps the widget content.

Feel free to experiment with your own css overrides.

Next we will explain configuration options.