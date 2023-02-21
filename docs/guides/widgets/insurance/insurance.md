---
sidebar_position: 1
title: Getting Started
---

# Embedded Travel Assistance and Insurance Sales Widget

![Map Image](/img/widgets/covid-flight-search.jpg)

Sitata is able to distribute a number of different types of insurance and assistance products in a variety of different configurations depending on geographies, type of insurance requested, type of trip, and many other factors. This can make designing an API workflow challenging. 

Typically, other providers will have an affiliate link and landing page for you, but this introduces additional friction to the purchase and forces your customer to visit a different website. Instead, with our widget, you will be able to sell our products directly within your website, allowing for a much easier purchase.

This widget is for those that wish to distribute our products on their website with minimal code interaction. With just a few lines of code, you can embed this widget on your own website and start distributing our travel protection products in a matter of minutes.

:::info

We're not like other insurers. Instead of only reacting to bad situations, we proactivly ensure our policyholders stay safe and have a smooth journey. All our plans or policies will include our other services such as our flight tracking service, real-time threat or disruption alerts, telemedicine, and 24/7/365 easy chat emergency assistance. Still wondering how to quickly add insurance to your existing offering? We have global coverage. [Contact us](mailto://support@sitata.com) and we'll get you up and running in no time!

:::


## Getting Started

Embedding the widget into your page is straightforward and can be accomplished with a few lines of code.

To start, make a reference to the widget javascript in your html layout. This widget will inject its content when the widget is started.

```html
<!-- this html div element will contain the widget -->
<div id="insure"></div>

<!-- put this script tag just before your closing </body> tag -->
<script async type="text/javascript" src="https://www.sitata.com/widgets/sitata-insure.js"></script>
```

Next, you will need to wait for the widget to inject itself into the page before you can configure it. You can do this by listening on the document object for the `sitata:insureReady` event.

```javascript
function startWidget() {
    // initialize the widget here
}
window.document.addEventListener('sitata:insureReady', startWidget)
```

Lastly, you should initialize the widget with any necessary configuration options.

```javascript
function startWidget() {
  // your organization's public token
  var token = "<YOUR PUBLIC TOKEN HERE>";
  // your organization's identifier
  var orgId = "<YOUR ORG ID HERE>";
  // sitata will provide a dedicated support email for you
  var email = "your-org-support@sitata.com";
  // sitata will provide the chat support ID for you.
  var chatId = "abc123"

  let widget = new window.Sitata.insure(el, {
    orgId: orgId,
    token: token,
    chat: {
        chatId: chatId
    },
    contactEmail: email,
  })

  // start the widget
  widget.run()
}
```

## CSS Styles

This widget is intentionally styled with minimum styles. With the exception of some color variables, all styles are nested within a class named `sit-ins-wdg` which wraps the widget content.

Feel free to experiment with your own css overrides.

Next we will explain configuration options.