---
sidebar_position: 5
slug: /embedded-insurance/quotes
id: insure-quotes
---

# Product Quotes

Generating a list of products with associated pricing is known as a generating a quote. The Sitata API provides a single, convenient API endpoint to do so. Depending upon the type of product offered, the request needs to specify a number of parameters. For example, for a travel-related product, we may require some `Trip` data. 

For full API documentation, [please click here](/api#tag/Products/paths/~1api~1v2~1products~1with_quotes/post).

## Travel Insurance Quote

To request a quote for all products, you can issue a `POST` request to the following API endpoint:

`https://www.sitata.com/api/v2/products/with_quotes`


A typical travel insurance request body should contain the following parameters:

```
{
    // currency requested
	"currency_code": "GBP",
    // country of origin
    "country_code": "HK",
    // user information
	"subscriptions": [{
        // beneficiaries are other people that require
        // protection on the same insurance policy
		"beneficiaries": [
            {
                "name": "Jane Bean",
                "birthday": "1971-01-20",
                "relation": 0
            }
        ],
        // user is the main policyholder
        // at a minimum, birthday, email, name are required
		"user": {
			"address": {
				"address1": "123 willaby lane",
				"address2": null,
				"address3": null,
				"address_str": "123 willaby lane, London, United Kingdom",
				"city": "London",
				"country": "United Kingdom",
				"postal_code": "N2G 1H6"
			},
			"birthday": "1968-04-09",
			"email": "email01@gmail.com",
			"home_country": "GB",
			"name": "Jimmy Bean"
		}
	}],
    // travel information
	"trip": {
		// specifying a list of destinations is helpful 
        // for producing the best price available as well
        // as for Sitata's other services such as real-time
        // threat notifications (Trip Alerts). In general,
        // specifying cities instead of only countries is better.
        // To specify a city, use type = 1, the 'country_code',
        // a 'lat', a 'lng', and a 'friendly_name'.
		"destinations": [{
			"country_code": "CH",
			"entry_date": 1686550712,
			"exit_date": 1686896312,
			"type": 0
		},{
			"country_code": "ES",
			"entry_date": 1686896312,
			"exit_date": 1687155512,
			"type": 0
		}],
		"finish": 1687155512,
		"start": 1686550712,
        // total cost is the trip cost which generally includes
        // all non-refundable tickets, hotels, events, etc for ALL travellers
        // Note currencies in Sitata are specified in the base unit - in this 
        // example that is pence.
		"total_cost": 100000,
        // the currency used to specify the total_cost
        "currency_code": "GBP",
        // note that other Trip attributes can and should be specified when
        // available. This includes itinerary items such as hotels, flights, etc.
	}
}
```

:::warning

Please ensure all of your dates are future dates. You can use unix timestamps or ISO 8601 format.

:::

:::info

When creating Subscriptions, only create Users for those who wish to log into Sitata and receive communications from Sitata. Therefore, most insurance-related purchases only create a single Subscription with a single user and all other people are listed as Beneficiaries.

:::

The following minimum data parameters are generally necessary for a travel insurance quote.

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| currency_code | String | The currency requested for pricing when generating the quote
| country_code | String | The country of origin of the traveller
| subscriptions | [`Subscription`] | Subscription or "Plan Holder" information
| subscriptions.beneficiaries | [`Beneficiary`] | A list of other people that require travel protection on the same policy. Typically a spouse or dependent child.
| subscriptions.user | `User` | The main plan holder of the policy. At a minimum, birthday, email, name are required
| trip | `Trip` | The travel details of the trip
| trip.destinations | [`Destination`] | A list of destinations (usually country or city).
| trip.start | Integer | The start time of the trip
| trip.finish | Integer | The finish time of the trip
| trip.total_cost | Integer | Total cost is the trip cost which generally includes all non-refundable tickets, hotels, events, etc for ALL travellers. Note currencies in Sitata are specified in the base unit. For example, cents for USD, yen for JPY.
| trip.currency_code | String | The currency used to specify the total_cost

:::info

Remember: If you are specifying trip details, the more granular details the better. This means you should try to specify cities instead of countries for [Destinations](/api#section/Destinations) (needs a `lat`, a `lng`, `type = 1`, `county_code` and `friendly_name`). In addition, other Trip attributes can and should be specified when available. This includes [itinerary items such as hotels, flights, etc](/api#tag/Trips/paths/~1api~1v2~1trips~1{trip_id}~1segments/get). When Sitata has itinerary information our additional services will create a better travel experience. For example, we can provide flight tracking and our real-time threat notifications (Trip Alerts) will be specific to the User's local locations.

:::

The response from our API will be a list of products with associated pricing.

```
{
    // cost is the price in the smallest unit. e.g. pence for GBP
    "cost": 2180,
    // cost modifier is the multiplying factor to convert the cost
    // into a reasonable unit for display. e.g. 2180 * 0.01 = 21.80 GBP
    "cost_modifier": 0.01,
    "cost_symbol": "£",
    "currency_code": "GBP",
    "finish": "2023-06-19T06:18:32.000000Z",
    "id": "29506631-2ea3-4c32-9227-b75636ff9888",
    "num_people": 1,
    "num_subscriptions": 1,
    "product_ids": [
        "673fc320-3c5a-42d7-8c1b-d7d513af5d01"
    ],
    "product_quote_group_id": 38706631-2ea3-4c32-9827-b75636ff9212,
    "products": [
        {
            "trip_type": null,
            "id": "673fc320-3c5a-42d7-8c1b-d7d513af5d01",
            "upgrade_siblings": [],
            "upgrade_product_ids": [],
            "type": -1,
            "identifier": "sit-base",
            "country_ids": [
                "aa83710b-a5aa-4e10-b1c2-f6745f228297"
            ],
            "updated_at": "2022-11-13T17:54:21.855490Z",
            "created_at": "2022-11-12T13:59:36.640355Z",
            "max_trip_length": -1,
            "product_type": 0,
            "benefits": [
                {
                    "created_at": "2022-11-12T13:59:36.668816Z",
                    "description": "Personal liability",
                    "excess": null,
                    "exclusions": "",
                    "id": "34fcb7a4-5717-4d86-b555-9128fcdb061a",
                    "identifier": "liability-b2b",
                    "limit": {
                        "benefit_id": "34fcb7a4-5717-4d86-b555-9128fcdb061a",
                        "cost_modifier": 0.01,
                        "cost_symbol": "$",
                        "currency_code": "USD",
                        "id": "d31884b9-09bb-4834-9607-426aa3e8b955",
                        "limit": 1000000,
                        "type": 0
                    },
                    "name": "Personal Liability",
                    "prominent": true,
                    "sort_order": 1,
                    "updated_at": "2022-11-12T13:59:36.668816Z"
                },
                {
                    "created_at": "2022-11-12T13:59:36.664512Z",
                    "description": "medical",
                    "excess": {
                        "amount": 5000,
                        "benefit_id": "9da6bf86-7f55-434b-9210-e3bd7f3c39da",
                        "cost_modifier": 0.01,
                        "cost_symbol": "$",
                        "currency_code": "USD",
                        "id": "30f4eb5e-c56b-4f97-96d8-3655de2f8782",
                        "type": 0
                    },
                    "exclusions": "none",
                    "id": "9da6bf86-7f55-434b-9210-e3bd7f3c39da",
                    "identifier": "pacific-b-med-b2b",
                    "limit": {
                        "benefit_id": "9da6bf86-7f55-434b-9210-e3bd7f3c39da",
                        "cost_modifier": 0.01,
                        "cost_symbol": "$",
                        "currency_code": "USD",
                        "id": "018146a2-870b-427c-b825-c9df00089c41",
                        "limit": 100000000,
                        "type": 0
                    },
                    "name": "Medical",
                    "prominent": true,
                    "sort_order": 0,
                    "updated_at": "2022-11-12T13:59:36.664512Z"
                }
            ],
            "restricted_destination_countries": [
                {
                    "country_code": "UA",
                    "country_code_3": "UKR",
                    "geographic_region_id": "709a60f4-222a-42b3-8506-6235029da8a4",
                    "id": "937a30b5-92d6-48b8-95b3-b10e8b1ddce7",
                    "name": "Ukraine",
                    "updated_at": "2020-11-07T01:59:27.878964Z"
                }
            ],
            "tiered_product_ids": [
                "29db10f8-ba61-4d4a-ac21-ed91ebfb8ac1",
                "5e4ae692-eacf-4422-a5ca-117bb5b434a7"
            ],
            "upgrade_sibling_ids": [],
            "cost_type": 3,
            "sibling_description": null,
            "refund_window": 14,
            "layout_type": 0,
            "sort_order": 3,
            "sibling_name": null,
            "countries": [
                {
                    "country_code": "HK",
                    "country_code_3": "HKG",
                    "geographic_region_id": null,
                    "id": "aa83710b-a5aa-4e10-b1c2-f6745f228297",
                    "name": "Hong Kong SAR China",
                    "updated_at": "2017-12-13T20:26:33.616843Z"
                }
            ],
            "tiered_products": [
                {
                    "created_at": "2022-04-25T23:27:48.596945Z",
                    "id": "29db10f8-ba61-4d4a-ac21-ed91ebfb8ac1",
                    "identifier": "sit-b2b-high",
                    "name": "Gold Plan",
                    "updated_at": "2022-11-22T03:18:49.837471Z"
                },
                {
                    "created_at": "2022-11-12T14:01:38.546692Z",
                    "id": "5e4ae692-eacf-4422-a5ca-117bb5b434a7",
                    "identifier": "sit-b2b-mid",
                    "name": "Silver Plan",
                    "updated_at": "2022-11-18T21:00:44.815671Z"
                }
            ],
            "disclaimer": null,
            "faqs": [],
            "upgrade_products": [],
            "restricted_destination_country_ids": [
                "937a30b5-92d6-48b8-95b3-b10e8b1ddce7"
            ],
            "discontinued": null,
            "description": "Bronze plan",
            "max_age": 87,
            "product_documents": [
                {
                    "countries": [],
                    "country_division_ids": [],
                    "country_divisions": [],
                    "country_ids": [],
                    "created_at": "2022-11-20T22:56:45.341983Z",
                    "file": {
                        "original": "https://www.sitata.com/policy.pdf"
                    },
                    "group_ident": "policy",
                    "id": "727d0c75-6b38-40f3-94b3-ac39dbc83121",
                    "identifier": "policy-en",
                    "language": "en",
                    "name": "Policy Wording",
                    "product_id": "5e4ae692-eacf-4422-a5ca-117bb5b434a7",
                    "sort_order": 0,
                    "type": 0,
                    "updated_at": "2022-11-20T23:00:22.470911Z",
                    "url": null
                }
            ],
            "name": "Bronze Plan"
        }
    ],
    "splits": [
        {
            "amount": 1308,
            "company_id": "513dabae-53a6-485f-923a-c997e8567e30",
            "insurance_taxes": 0,
            "taxes": 0
        },
    ],
    "start": "2023-06-12T06:18:32.000000Z",
    "taxes": 0
}
```

:::warning
  
Please note that if a Benefit has a null limit instead of a numerical value, it means that the coverage is "included" or 100%. For example, for many plans the Emergency Evacuation benefit will have no numerical limit and this means that all evacuation costs are covered.

:::

## Important Components of a Quote

The following are the key components of a product quote from Sitata.

| Attribute | Type | Description | 
| --------- | ---- | ----------- | 
| cost | Integer | Cost is the price in the smallest unit. e.g. pence for GBP
| taxes | Integer | Additional taxes in the smallest unit. e.g. pence fo GBP
| insurance_taxes | Integer | Any insurance specific taxes in the smallest unit. e.g. pence for GBP
| cost_modifier | Double | The multiplying factor to convert the cost into a reasonable unit for display. e.g. 2180 * 0.01 = 21.80 GBP
| cost_symbol | String | A character used to display the type of currency used. e.g. "£" for GBP.
| currency_code | String | The currency used in the quote.
| start | String | The start of the coverage period.
| finish | String | The end of the coverage period.
| num_people | Integer | The total number of people covered by the protection plan.
| num_subscriptions | Integer | The number of people who had user accounts created for them when the protection plan was purchased. These users are able to log into the platform, use the mobile application, receive various services, and file claims online.
| product_quote_group_id | String | The unique identifier of the quote.
| products | [`Product`] | The list of products available in the quote.
| splits | Array | The list of revenue available for different parties associated with distribution of the product.

## Specifying Products

The default behavior of the API is to respond with all products available to your organization given the parameters you have requested. In insurance-related products are unavailable, the API will respond with Sitata's Assistance plans.

If your organization has access to many different products, then requesting a full list each time might be too slow and cumbersome. Alternatively, we suggest specifying a list of product identifiers if you know ahead of time which products you want a quote for. To do so, simply specify a list of `product_ids` in the body of your request.

```
{
	"currency_code": "GBP",
    "country_code": "HK",
    "product_ids": ["sit-base", "sit-rental"],
    // etc...
]
```

:::info

Sitata uses UUIDs for our main product identifiers (`id`). However, we also assign human-readable identifiers such as "sit-base" in a field named `identifier`. We suggest you use these human-readable identifiers when specifying a list of products for convenience.

:::


After you have received a list of products and pricing, you can then proceed to purchase a travel protection plan.

