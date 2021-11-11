---
sidebar_position: 2
slug: /travel-entry-requirements-search
id: how-entry-req
---

# How Do I Get The Latest Entry Requirements?

Without question, the first questions a traveller ask are “can I go there?” and “will I be quarantined” and so this is a good place to start. We created the Entry Requirements data set to answer the hard “yes/no” types of questions concerning entering a country or region.

The data set includes the following categories:

* Can a resident enter the country?
* Can a foreigner enter the country?
* Is transit allowed through the country?
* Test certificate required?
* Is a test required on arrival?
* Is a test certificate allowed?
* Is quarantine required on arrival? 
* Is a vaccination required?
* Vaccine acceptance details
* Insurance required?
* Entry form required? (health or other)

Each category can have one of the following values:

* Yes
* Yes, with exceptions
* No
* No, with exceptions

While the vast majority of the values are “yes” and “no”, the situation on the ground isn’t always so straightforward. Sometimes there are really weird and crazy rules that various governments have put into place which necessitates the value types "with exceptions."

An Entry Requirement is essentially a record documenting a set of rules imposed by an actor against one or multiple other countries or regions. The actor could be a country, state, or even municipality in our data architecture. By and large, Sitata covers country-level data currently. However, we do have some state/provincial records for select regions such as the United States and others.

Any record that has an entry under the field `origin_country_division_id` or `origin_country_region_id` is one that is either state or municipal level, respectively. If you would like more granular data available, please contact us and we can talk about your use case.

:::tip

Please take some time to familiarize yourself with the Entry Requirement data structure by having a look at our [API docs here](/api).

:::

One slightly confusing part about the data structure is our use of the term “origin.” This is confusing because often travel developers think about origin as being the place of origin or place of departure. However, what we mean by origin is actually the origin of the rule imposed onto others. i.e. the country or region that has created the restriction.

:::caution

Another important point to note is how our affected counntries list works. If affected_countries is empty, it should be interpreted as a global rule. i.e. all countries are affected.

:::

As you might have seen from the API documentation, there are a number of ways to retrieve data from the API. Below we’ll walk through a few of the more common use cases.

## How do I fetch all of the requirements for a single country?

There is a dedicated endpoint which will let you fetch all requirements for a single country. The country should be specified using a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. For example, "CA" for Canada.

```
GET https://www.sitata.com/api/v2/countries/CA/entry_requirements
```

However, it might be more efficient to search between two countries.

## How do I fetch the requirements between two countries?

There are a couple of ways to do this type of request. The simplest version is to use the `destination` and `departure` parameters. These parameters accept [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes as inputs.

```
GET https://www.sitata.com/api/v2/entry_requirements?departure=DE&destination=IN
```

The response will include all requirements (country and state level) necessary to understand for the traveller departing from the departure country and travelling to the destination country.

## What if I want state-level data?

Sitata does have state-level data for certain regions. You will know a particular entry is for a state if the `origin_country_division` field has a value. You can also filter to only retrieve state level data using the `destination_country_division` parameter. It expects a [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) value. For example, US-TX for Texas, United states.

```
GET https://www.sitata.com/api/v2/entry_requirements?departure=DE&destination_country_division=IN-AP
```

Note that it might be simpler to query by country and then filter by state data to see if such data exists, and use it if it does exist.

## How do I fetch the requirements between two airports?

Just like with countries, the Sitata API can return results between two airports. The parameters `departure_airport` and `destination_airport` use either ICAO or IATA codes to filter the results. The response will include all restrictions (country and state level) necessary to understand for the traveller departing from the corresponding departure country and travelling to the destination country.

```
GET https://www.sitata.com/api/v2/entry_requirements?departure_airport=MUC&destination_airport=BOM
```

The response will include all restrictions (country and state level) necessary to understand for the traveller departing from the departure country and travelling to the destination country.

## What if I only have city information?

Sitata chose not to accommodate queries by a particular city name because that could result in conflicts and confusion. Instead, we chose to accommodate querying our API by latitude and longitude coordinates which does not produce any ambiguity in our result set. The parameters are `departure_lat`, `departure_lng`, `destination_lat`, and `destination_lng`.

```
GET https://www.sitata.com/api/v2/entry_requirements?departure_lat=48.13743&departure_lng=11.57549&destination_lat=19.0760&destination_lng=72.8777
```

If you resolve your cities to locations and query based on coordinates, our API will respond with all restrictions (country and state level) necessary to understand for the traveller departing from the departure country and travelling to the destination country.

## What if I know the traveller is vaccinated?

You can filter for only rules and content that corresponds to a fully vaccinated traveller by adding the `vaccinated` parameter to your query.

```
GET https://www.sitata.com/api/v2/entry_requirements?departure=DE&destination=IN&vaccinated=true
```

If this parameter is omitted, our data points will likely contain information about both unvaccinated and vaccinated scenarios. This is in part so we can support legacy clients, but also we believe it is important for people to realize that there are fewer restrictions if they are vaccinated.

## Extra Data
For some types of Entry Requirements, there may be extra associated data in a metadata type field called `extras`. This field is a key/value mapping of various extra bits of information for a particular requirement.

### What is the number of days of quarantine?

This data entry falls under the entry requirement `type 5`. In this entry, the `extras` mapping will contain a field called `quarantine_days` which will contain an integer for the number of days of quarantine imposed.

### What is the number of hours before entry for a negative covid test?

This data entry falls under the entry requirement `type 8`. In this entry, the `extras` mapping will contain a field called `entry_hours` which will contain an integer for the number of hours that a negative covid test is allowed prior to entry.

### Which vaccines are known to be accepted?

This data entry falls under the entry requirement `type 10`. In this entry, the `extras` mapping will contain a field called `vacc_list` which corresponds to a list of integers.

