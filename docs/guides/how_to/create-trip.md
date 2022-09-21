---
sidebar_position: 3
slug: /create-trips
id: how-create-trip
---

# Create Trips For My Travellers

Trips will allow your travellers to have a central record to organize their itinerary and receive vital health and safety information. Trips contain a list of `Destinations`. They also contain itinerary information structured across several types of `Trip Segments` including:

* `Air Segments` which keep track of flight information
* `Rail Segments` which keep track of train information
* `Car Segments` which keep track of rental car information
* `Hotel Segments` which keep track of accommodations
* `Cruise Segments` which keep track of cruise itinerary information
* `Activity Segments` which keep track of general trip activities

To create a trip for one or more of your travellers, you should issue a `POST` request against the `/org/:organization_id/trips` endpoint. You should specify all of the necsesary trip details along with the Sitata `id` of each traveller (`User`) as a list under the `traveller_ids` field.

Additional details can be found [here](/api#tag/Organization-greater-Trips/paths/~1api~1v2~1org~1{company_id}~1trips/post).

The POST request payload should contain all necessary details about the trip.

Example post body:

```json
{
	"trip": {
		"trip_type": 1,
		"start": "2019-02-19T11:55:00.000000Z",
		"finish": "2019-02-22T04:40:00.000000Z",
		"name": "My trip to Canada",
        "traveller_ids": ["<TRAVELLER 1 ID HERE>", "<TRAVELLER 2 ID HERE>", "..."],
		"destinations": [
			{
                "type": 1,
                "lng": -79.396111,
                "lat": 43.627499,
                "friendly_name": "Toronto City Centre",
                "exit_date": "2019-02-22T04:40:00.000000Z",
                "entry_date": "2019-02-19T11:55:00.000000Z",
                "country_id": "1f648db7-a515-48c6-b847-667494b6df00"
            }
		],
		"activities": [0,3],
		"rail_segments": [
        	{
	            "status": 0,
	            "departure_datetime_utc": "2019-02-01T11:55:00.000000Z",
	            "created_at": "2019-01-17T20:13:55.399095Z",
	            "origin_name": "NEW YORK (PENN STATION)",
	            "arrival_datetime": "2019-02-01T08:38:00.000000",
	            "origin_admin_code": "New York",
	            "origin_lat": 40.750568,
	            "arrival_datetime_utc": "2019-02-01T13:38:00.000000Z",
	            "number_of_pax": 1,
	            "price": "35.000",
	            "destination_country": "US",
	            "destination_lat": 41.2975495,
	            "train_number": "NORTHEAST REGIONAL 190 190",
	            "departure_datetime": "2019-02-01T06:55:00.000000",
	            "departure_time_zone_id": "America/New_York",
	            "destination_admin_code": "Connecticut",
	            "origin_lng": -73.993519,
	            "rail_line": "Amtrak",
	            "source": "Amtrak",
	            "destination_city_name": "New Haven",
	            "updated_at": "2019-01-17T20:13:55.443618Z",
	            "currency": "USD",
	            "origin_country": "US",
	            "confirmation_no": "261177",
	            "destination_name": "NEWHAVEN (UNION STATION)",
	            "arrival_time_zone_id": "America/New_York",
	            "destination_lng": -72.9266291,
	            "origin_city_name": "New York"
        	}
		]
	}
}
```

Remember to use your company's `authentication_token` when specifying the request. 

:::tip

Note that `Trip` and `Destination` dates must be in the future when creating a new trip. You can also specify unix timestamps instead of ISO format.

:::

## Retreiving Trip Information

To fetch a list of trips associated with your organization, issue a `GET` request to `/org/:organization_id/trips`. By default, the list of trips will not return all Trip Segment data, but you can retreive full details about the trip record using `/org/:organization_id/trips/:trip_id`.

## Trip Segment Updates

When updating any one of the Trip Segment type lists, please ensure you always send the entire list. For example, if a Trip record already has 1 `Air Segment` and you wish to add another flight to the itinerary, then please send 2 `Air Segment`s on your update request. The first Air Segment should be the original entry and the second Air Segment should be the entry that you are adding. If you do not send the full list, Sitata will reset the list to whatever you have sent and you could lose your original entries. 

:::tip

Your users might have access to the Sitata platform and may have added itinerary information on their own. For this reason, it might be prudent to fetch the full trip details before adding additional itinerary information to ensure you send a complete listing.

:::
