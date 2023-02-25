---
sidebar_position: 6
slug: /embedded-insurance/purchase
id: insure-purchase
---

# Product Purchase

After receiving a list of products and pricing, the next step is to execute a purchase. To execute a purchase, you simply need to specify the same parameters you used for a quote, on our Subscription endpoint.

For full API documentation, [please click here](/api#tag/Products/).

A typical purchase request body should contain the following parameters:

```
{
    // currency requested
	"currency_code": "GBP",
    // country of origin
    "country_code": "HK",
    // you can use the metadata field to store important
    // string-based information associated with the purchase.
    "metadata": {
        "go_travel_purchase_id": "GOTRAVEL-1643949297"
    },
    // user information
	"subscriptions": [{
        // beneficiaries are other people that require
        // protection on the same insurance policy
        "product_ids": ["car-rental", "travel-premium"],
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
        // threat notifications (Trip Alerts).
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

:::info

When creating Subscriptions, only create Users for those who wish to log into Sitata and receive communications from Sitata. Therefore, most insurance-related purchases only create a single Subscription with a single user and all other people are listed as Beneficiaries.

:::

:::warning

Please ensure all of your dates are future dates. You can use unix timestamps or ISO 8601 format.

:::

Note how each `Subscription` object must specify the product identifiers that are being purchased under a `product_ids` field.

:::info

Please note that at Sitata, we will sometimes refer to our Protection Plans as either Subscriptions, travel protection plans, or travel insurance policies. The wording is interchangeable.

:::

The response will include a list of the Subscriptions created. For example:

```
[
    {
        "id": "87957291-b6b7-481e-8773-ac6e7a729b69",
        "last_renewal_attempt": null,
        "invoices": [
            {
                "coupons": [],
                "created_at": "2023-02-24T21:05:49.335892Z",
                "currency": "GBP",
                "id": "c2f3ad9b-201c-400a-b5af-4eb8d5e44a71",
                "items": [
                    {
                        "amount": 0,
                        "created_at": "2023-02-24T21:05:49.339037Z",
                        "currency": "GBP",
                        "description": "Protection Plus",
                        "id": "e851258b-df7a-4f41-b9ad-39b3fb4f336e",
                        "updated_at": "2023-02-24T21:05:49.339037Z"
                    }
                ],
                "period_end": "2023-06-19T06:18:32.000000Z",
                "period_start": "2023-06-12T06:18:32.000000Z",
                "sitata_invoice_id": "AEGRP785",
                "subscriptions": [],
                "subtotal": 3550,
                "taxes": 592,
                "total": 4142,
                "updated_at": "2023-02-24T21:05:49.335892Z"
            }
        ],
        "user": {
            "authentication_token": "ae0a24c7-5989-476f-817e-add2aa683527",
            "bio": null,
            "birthday": null,
            "check_ins": [],
            "created_at": "2021-01-05T22:58:17.401841Z",
            "display_name": null,
            "doctor_settings": null,
            "email": "email01@gmail.com",
            "external_id": null,
            "first_name": "Jimmy",
            "home_country": null,
            "home_location_lat": null,
            "home_location_lng": null,
            "id": "f4c9dbd8-e610-408f-8dae-6b7ea87dec7d",
            "language": "en",
            "languages_spoken": null,
            "last_name": "Bean",
            "loc": null,
            "mailing_lists": {},
            "phone_number": null,
            "points": null,
            "roles": [],
            "settings": null,
            "subscriptions": [],
            "timezone": "UTC",
            "timezone_identifier": null,
            "username": null
        },
        "product_quote": null,
        "updated_at": "2023-02-24T21:05:51.144298Z",
        "created_at": "2023-02-24T21:05:49.225540Z",
        "policy_urls": [],
        "human_id": "F3C33D",
        "language": "en",
        "finish": "2023-06-19T06:18:32.000000Z",
        "beneficiaries": [],
        "has_sitata_assistance": false,
        "has_consults": false,
        "user_id": "f4c9dbd8-e610-408f-8dae-6b7ea87dec7d",
        "finish_date": "2023-06-19",
        "country_code": null,
        "region_code": null,
        "start_date": "2023-06-12",
        "company_id": null,
        "has_flight_tracking": false,
        "has_alerts": false,
        "email": "email01@gmail.com",
        "metadata": null,
        "coupon": null,
        "start": "2023-06-12T06:18:32.000000Z",
        "third_party_policy_num": "TC-DIR1009806",
        "currency_code": "GBP",
        "product_sale_group_id": "9b6c6ca6-85ed-4480-8393-cef3f6537dcc",
        "product_documents": [],
        "name": "Jimmy Bean",
        "products": [
            {
                "trip_type": null,
                "id": "8289e0db-f95c-427b-a153-7e32e8c31cad",
                "upgrade_siblings": [],
                "policy_url": null,
                "upgrade_product_ids": [],
                "type": 0,
                "identifier": "tc-base",
                "country_ids": [
                    "8ada025e-eeba-46ab-b2fd-c80eb053aff5"
                ],
                "updated_at": "2022-06-13T02:40:45.726185Z",
                "created_at": "2021-01-02T03:21:56.458807Z",
                "max_trip_length": -1,
                "product_type": 0,
                "benefits": [
                    {
                        "created_at": "2021-01-02T03:21:56.471353Z",
                        "description": null,
                        "excess": {
                            "amount": 5000,
                            "benefit_id": "0d465919-2284-464f-8af4-17698ed2077e",
                            "cost_modifier": 0.01,
                            "cost_symbol": "£",
                            "currency_code": "GBP",
                            "id": "f4196e6a-d00e-4c20-9571-99046aef7bc0",
                            "type": 0
                        },
                        "exclusions": null,
                        "id": "0d465919-2284-464f-8af4-17698ed2077e",
                        "identifier": "tc-integrated-emerg",
                        "limit": {
                            "benefit_id": "0d465919-2284-464f-8af4-17698ed2077e",
                            "cost_modifier": 0.01,
                            "cost_symbol": "£",
                            "currency_code": "GBP",
                            "id": "e12eddd8-03fd-40a6-be82-6072bcccde18",
                            "limit": 1000000000,
                            "type": 0
                        },
                        "name": "Emergency medical and repatriation expenses",
                        "prominent": false,
                        "sort_order": 0,
                        "updated_at": "2021-01-02T03:21:56.471353Z"
                    },
                    {
                        "created_at": "2021-01-02T03:21:56.473917Z",
                        "description": "£50 per 24 hours up to £2,000",
                        "excess": null,
                        "exclusions": null,
                        "id": "bec9aed1-48fe-4d13-b315-2f1583a8371b",
                        "identifier": "tc-integrated-hospital",
                        "limit": {
                            "benefit_id": "bec9aed1-48fe-4d13-b315-2f1583a8371b",
                            "cost_modifier": 0.01,
                            "cost_symbol": "£",
                            "currency_code": "GBP",
                            "id": "2ca03327-1e90-42e6-928c-02b1a7d34ed4",
                            "limit": 200000,
                            "type": 0
                        },
                        "name": "Hospital confinement",
                        "prominent": false,
                        "sort_order": 1,
                        "updated_at": "2021-01-02T03:21:56.473917Z"
                    }                    
                ],
                "restricted_destination_countries": [],
                "tiered_product_ids": [],
                "upgrade_sibling_ids": [],
                "cost_type": 0,
                "sibling_description": null,
                "refund_window": -1,
                "layout_type": 0,
                "sort_order": 0,
                "sibling_name": null,
                "countries": [
                    {
                        "country_code": "GB",
                        "country_code_3": "GBR",
                        "geographic_region_id": "c944a52a-9af3-4680-b521-88374f4a32d1",
                        "id": "8ada025e-eeba-46ab-b2fd-c80eb053aff5",
                        "name": "United Kingdom",
                        "updated_at": "2022-01-23T23:01:02.953074Z"
                    }
                ],
                "tiered_products": [],
                "disclaimer": null,
                "faqs": [],
                "upgrade_products": [],
                "restricted_destination_country_ids": [],
                "discontinued": false,
                "description": null,
                "max_age": -1,
                "product_documents": [],
                "name": "Protection Plus"
            }
        ],
        "trip_cost": 100000
    }
]
```

Note that each `Subscription` in the list will contain important information such as the `human_id` of the Subscription, the list of Invoices with associated `sitata_invoice_id`, the primary `User` (or policyholder), and the list of `Product`s with associated `Benefit`s.

