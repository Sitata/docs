---
sidebar_position: 8
slug: /travel-restrictions-search
id: how-travel-rests
---

# Get The Latest Travel Restrictions

The Sitata API also captures the local travel restriction situation. We are often capturing important situational details for travellers such as the regional social distancing measures and mask-wearing requirements.

The data set includes the following categories:

* Is there a curfew?
* What are the social distancing restrictions?
* What are the local transportation restrictions?	
* What is the recommended border app?
* Are non-essential shops open?
* Are accommodations open?
* Are restaurants open?
* Are bars and cafes open?
* Are beaches and tourism spots open?
* Are museums and heritage sites open? 
* Are personal care services open?
* Are places of worship open?
* Are events allowed?
* Are masks required in public?

Each category can have one of the following values:

* Yes
* Yes, with exceptions
* No
* No, with exceptions


A Travel Restriction is essentially a record documenting a set of rules imposed by an origin country. By and large, Sitata covers country-level data currently. However, we do have some state/provincial records for select regions such as the United States and others.

Any record that has an entry under the field `origin_country_division_id` or `origin_country_region_id` is one that is either state or municipal level, respectively. If you would like more granular data available, please contact us and we can talk about your use case.

:::tip

Please take some time to familiarize yourself with the Travel Restriction data structure by having a look at our [API docs here](/api).

:::

One slightly confusing part about the data structure is our use of the term “origin.” This is confusing because often travel developers think about origin as being the place of origin or place of departure. However, what we mean by origin is actually the origin of the rule imposed onto others. i.e. the country or region that has created the restriction.


As you might have seen from the API documentation, there are a number of ways to retrieve data from the API. Below we’ll walk through a few of the more common use cases.

## How do I fetch all of the travel restrictions for a single country?

There is a dedicated endpoint which will let you fetch all restrictions for a single country. The country should be specified using a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. For example, "CA" for Canada.

```
GET https://www.sitata.com/api/v2/countries/CA/travel_restrictions
```

However, it might be more efficient to search between two countries.

## How do I fetch the restrictions for two countries?

There are a couple of ways to do this type of request. The simplest version is to use the `destination` and `departure` parameters. These parameters accept [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes as inputs.

```
GET https://www.sitata.com/api/v2/travel_restrictions?departure=DE&destination=IN
```

The response will include all restrictions (country and state level) for both the destination and the departure country. Please note that travel restrictions really only apply to local region, which is opposite to Entry Requirements.

## What if I want state-level data?

Sitata does have state-level data for certain regions. You will know a particular entry is for a state if the `origin_country_division` field has a value. You can also filter to only retrieve state level data using the `destination_country_division` parameter. It expects a [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) value. For example, US-TX for Texas, United states.

```
GET https://www.sitata.com/api/v2/travel_restrictions?departure=DE&destination_country_division=IN-AP
```

Note that it might be simpler to query by country and then filter by state data to see if such data exists, and use it if it does exist.

## How do I fetch the restrictions between two airports?

Just like with countries, the Sitata API can return results at two airports. The parameters `departure_airport` and `destination_airport` use either ICAO or IATA codes to filter the results. The response will include all restrictions (country and state level) necessary to understand for the traveller departing from the corresponding departure country and travelling to the destination country.

```
GET https://www.sitata.com/api/v2/travel_restrictions?departure_airport=MUC&destination_airport=BOM
```

The response will include all restrictions (country and state level) necessary to understand for the traveller departing from the departure country and travelling to the destination country.

## What if I only have city information?

Sitata chose not to accommodate queries by a particular city name because that could result in conflicts and confusion. Instead, we chose to accommodate querying our API by latitude and longitude coordinates which does not produce any ambiguity in our result set. The parameters are `departure_lat`, `departure_lng`, `destination_lat`, and `destination_lng`.

```
GET https://www.sitata.com/api/v2/travel_restrictions?departure_lat=48.13743&departure_lng=11.57549&destination_lat=19.0760&destination_lng=72.8777
```

If you resolve your cities to locations and query based on coordinates, our API will respond with all restrictions (country and state level) necessary to understand for the traveller departing from the departure country and travelling to the destination country.

## What if I know the traveller is vaccinated?

You can filter for only rules and content that corresponds to a fully vaccinated traveller by adding the `vaccinated` parameter to your query.

```
GET https://www.sitata.com/api/v2/travel_restrictions?departure=DE&destination=IN&vaccinated=true
```

If this parameter is omitted, our data points will likely contain information about both unvaccinated and vaccinated scenarios. This is in part so we can support legacy clients, but also we believe it is important for people to realize that there are fewer restrictions if they are vaccinated.

## Which Dates should I Use?

You will note that a number of date fields are returned: `created_at`, `updated_at`, and `effective_as_of`. If you are displaying the concept of last updated, then we recommend using `effective_as_of` instead of `updated_at`. This is because this date represents the last time the team will have checked the data, even if it was not updated.
