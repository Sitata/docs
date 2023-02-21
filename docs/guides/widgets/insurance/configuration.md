---
sidebar_position: 2
title: Configuration
---

# Configuration

Configuration of this widget occurs through a configuration options object. See below.

## Functions

The following functions are available:

| Property | Type | Description |
| -------- | --------- | ----------- |
| orgId | String | Your organization's identifier.
| token | String | Your organization's public authentication token.
| chat.chatId | String | A chat identifier given to you by Sitata.
| contactEmail | String | A contact email address given to you by Sitata.
| lang | String | The widget will attempt to determine the user's language automatically. This will force a language selection instead. Use two character languages codes. e.g. 'es' for Spanish.
| noQuoteProcess | String | Values are either: 'assist', 'sitata', or 'plain'. This option tells the widget how to behave if an insurance quote is not possible. Specify 'assist' if you would like to offer your customer's Sitata's Travel Assistance plans without insurance. Specify 'sitata' for an error message and a link back to Sitata. Specify 'plain' for a simple error message an no alternative options for your customer. The default is 'assist'.
| priorityOriginCountries | (Array) | When given an array of country codes, will prioritize those countries first in the departure / origin country dropdown selection. Uses ISO 3166 Alpha 2 character codes.
