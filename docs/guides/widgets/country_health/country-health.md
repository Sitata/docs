---
sidebar_position: 1
title: Getting Started
---

# Country Health Widget

This widget will allow you to display country health recommendations on your own website with veyr little effort. The content covers diseases to be aware of, recommended vaccinations, and recommended medications. The widget will inject the content into your page without styling which allows you to have full control of the final display.

## Getting Started

Embedding the widget into your page is straightforward and can be accomplished with a few lines of code. To display various information, you will need to rely on two libraries.

To start, make a reference to the libraries in your html layout and add a place in your page where the content can be injected.

```html
<div id="diseases-cont">
<!-- disease content will be inserted here -->
</div>
<div id="med-cont">
<!-- medication content will be inserted here -->
</div>
<div id="vacc-cont">
<!-- vaccination content will be inserted here -->
</div>
<script async type="text/javascript" src="assets/sitata-api.js"></script>
<script async type="text/javascript" src="assets/sitata-ui.js"></script>
```

Next, you will need to wait for the libraries to load into the page before you can use them. You can do this by listening on the document object for the correct events.

```javascript
let readyCount = 0
let checkReady = function() {
  readyCount++
  if (readyCount == 2) {
    // when we have checked twice, we know both libraries have loaded
    injectContent()
  }
}

window.document.addEventListener('sitata:apiReady', function() {
    // api config here
    window.Sitata.api.config
        .setAuthToken('PUB PUBLIC_AUTH_TOKEN_HERE')
        .setLanguage('en')

      checkReady()
    })
window.document.addEventListener('sitata:uiReady', checkReady)
```

Lastly, you should inject the content. The full example is below.

```javascript
let injectContent = function() {
    var diseaseCont = document.getElementById("disease-cont")
    window.Sitata.ui.healthComments.injectCountryDiseases("PK", diseaseCont)

    let medicationCont = document.getElementById("med-cont")
    window.Sitata.ui.healthComments.injectCountryMedications("PK", medicationCont)

    let vaccCont = document.getElementById("vacc-cont")
    window.Sitata.ui.healthComments.injectCountryVaccinations("PK", vaccCont)
}
let readyCount = 0
let checkReady = function() {
    readyCount++
    if (readyCount == 2) {
    injectContent()
    }
}

window.document.addEventListener('sitata:apiReady', function() {
    // custom api config here
    window.Sitata.api.config
    .setAuthToken('PUB 1f2fbf61-c088-4a77-a9bb-d79b9666adc3')
    .setLanguage('en')

    checkReady()
})
window.document.addEventListener('sitata:uiReady', checkReady)
```

If you followed the above example, you should see relevant recommendations and comments appear on the page for the country specified; Pakistan, in this case.

## CSS Style Example

The content injected into the page will abosorb the look and feel of the parent page. You can experiment with css to suit your liking. In particular, the content does have two buttons which can be used to select between "some travellers" and "all travellers".

```css
.sit-health-switch {
    background-color: #7f8c8d;
    color: white;
    padding: 10px 50px;
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
}
.sit-health-switch.active {
    background-color: #2ecc71;
}
.sit-h3 {
    font-size: 1.25rem;
    font-weight: 700;
}
```

Feel free to experiment with your own css overrides.

## Configuration and Functions

The UI widget is dependent upon our api library. In order for Sitata to grant access for widget use, you will need to configure the API widget to use your public token. In the above example, the author sets the token using `setAuthToken` on our `Sitata.api.config` object before proceeding.

### Functions

The following namespaced functions are available to inject country-specific health content into the page. 

| Function | Arguments | Description |
| -------- | --------- | ----------- |
| injectCountryDiseases | (String, element) | Inject content about diseases to be aware for the given [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) and html element acting as a container.
| injectCountryMedications | (String, element) | Inject content about medication recommendations for the given [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) and html element acting as a container.
| injectCountryVaccinations | (String, element) | Inject content about vaccination recommendations for the given [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) and html element acting as a container.

Please note that these functions are namespaced and located under: `window.Sitata.ui.healthComments`