---
sidebar_position: 2
title: Configuration
---

# Configuration

Configuration of this widget occurs through a configuration options object. See below.

## Options Object

The following options are available:

| Property | Type | Description |
| -------- | --------- | ----------- |
| orgId | String | Your organization's identifier.
| token | String | Your organization's public authentication token.
| chat.chatId | String | A chat identifier given to you by Sitata.
| ui.inputStyle | [String] | An array of styles for the inputs. Default is ['outlined']. Use either 'outlined', 'solo', or 'filled'. 
| contactEmail | String | A contact email address given to you by Sitata.
| merchantOfRecord | Bool | Set to true if you wish your organization to be merchant of record. Your organization must be a distributor for Sitata for option to have any effect. Options are 'true', 'false', and 'choice'. If your organization is a distributor and the value is set to 'choice' then the end-user will have an option in the interface to choose who is merchant of record - either your organization or Sitata.
| lang | String | The widget will attempt to determine the user's language automatically. This will force a language selection instead. Use two character languages codes. e.g. 'es' for Spanish.
| noQuoteProcess | String | Values are either: 'assist', 'sitata', or 'plain'. This option tells the widget how to behave if an insurance quote is not possible. Specify 'assist' if you would like to offer your customer's Sitata's Travel Assistance plans without insurance. Specify 'sitata' for an error message and a link back to Sitata. Specify 'plain' for a simple error message an no alternative options for your customer. The default is 'assist'.
| priorityOriginCountries | [String] | When given an array of country codes, will prioritize those countries first in the departure / origin country dropdown selection. Uses ISO 3166 Alpha 2 character codes. e.g. ["CA", "US", "GB"]
| trip | `Trip` | Trip object to pre-populate widget with trip cost and destinations.
| user | `User` | User object to pre-populate widget with for purchaser info.
| otherTravellers | [`Beneficiary`] | List of beneficiaries to pre-populate the widget for additional traveller info.
| departureCountryCode | String | ISO 3166 Alpha 2 character code of the departure country if pre-populating the widget. e.g. "CA" for Canada.
| residentState | String | ISO 3166 character code of regional state of departure. e.g. US-CA for California, United States.
| existingSubId | String | Specify an existing subscription identifier to close/refund when creating and charging for a new subscription.

### Example

The following example shows a setup with many of the options explained above.

```
<script>
var el = document.getElementById("insure")
window.document.addEventListener('sitata:insureReady', function () {

    let widget = new window.Sitata.insure(el, {
        orgId: orgId,
        token: token,
        chat: {
            chatId: chatId
        },
        contactEmail: 'custom-contact-email@sitata.com',
        merchantOfRecord: false,
        // merchantOfRecord: true,
        // merchantOfRecord: 'choice',
        ui: {
            inputStyle: ['filled'],
            originCountryPref: ['US', 'GB', 'CA']
        },
        departureCountryCode: 'US',
        residentState: 'US-CA',
        user: {
            birthday: '1968-04-09',
            email: 'email01@gmail-test9238.com',
            home_country: 'US',
            name: 'Jimmy Bean'
        },
        otherTravellers: [
            {
                name: 'Susan Jekins',
                birthday: '1970-04-09',
                relation: 0
            }
        ],
        trip: {
            currency_code: 'GBP',
            destinations: [
                {
                    country_code: 'CH',
                    friendly_name: 'Switzerland',
                    entry_date: '2023-11-21',
                    exit_date: '2023-11-23',
                    type: 0
                },
                {
                    country_code: 'ES',
                    friendly_name: 'Spain',
                    entry_date: '2023-11-24T00:00:00+00:00',
                    exit_date: '2023-11-29T23:59:59+00:00',
                    type: 0
                }
            ],
            finish: '2023-11-29T23:59:59+00:00',
            start: '2023-11-21T00:00:00+00:00',
            total_cost: 100000
        }
        
        }
    );
    widget.run()
});

</script>
<script src="assets/sitata-insure.js"></script>
```

## Functions

The following functions are available:

| Function | Arguments | Description |
| -------- | --------- | ----------- |
| setUser | (`User`) | Set the user object to pre-populate widget with for purchaser info.
| setOtherTravellers | ([`Beneficiary]`) | Set the list of beneficiaries to pre-populate the widget for additional traveller info.
| setDepartureCountryCode | (String) | Set the ISO 3166 Alpha 2 character code of the departure country if pre-populating the widget.
| setResidentState | (String) | Set the ISO 3166 character code of regional state of departure.
| setTrip | (`Trip`) | Set the trip object to pre-populate widget with trip cost and destinations.
| setMerchantOfRecord | (boolean or 'choice') | Sets if you wish your organization to be merchant of record. 
| setExistingSubId | (String) | Specify an existing subscription identifier to close/refund when creating and charging for a new subscription.





