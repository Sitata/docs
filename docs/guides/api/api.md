---
sidebar_position: 1
slug: /using-api
id: api
---

# About The Sitata API

Welcome to the Sitata API! You can use our API to provide your users with information on various health and safety information, the latest entry entry requirement or travel restrictions, e-visa information, and to sell Sitata Travel Safe Subscriptions.

## Reference

The full API documentation is [located here](/api).

## RESTful
When we talk about our API, we use terms like “REST” and “RESTful.” “REST” is an architectural style that’s an alternative to [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) or [SOAP-based](https://en.wikipedia.org/wiki/SOAP) web services. The acronym stands for [Representational State Transfer](http://en.wikipedia.org/wiki/Representational_state_transfer).

Although there’s no official REST standard, there are common approaches and best practices used across the engineering community that help define how RESTful APIs should work. For example, most RESTful APIs follow [six specific constraints](http://whatisrest.com/rest_constraints/index) or design rules.

Most APIs aren’t [fully RESTful](http://www.intridea.com/blog/2010/4/29/rest-isnt-what-you-think-it-is), but we follow most of the practices and common definitions of the style. For example, you can take action on most resources using the standard HTTP methods: POST, GET, PATCH, and DELETE.

## JSON

Some API providers will use a custom MIME type for their RESTful APIs instead of the generic [JSON type](http://www.json.org/) (application/json). For the Sitata API, we use the generic JSON content type.

## Availablity & Exponential Backoff

In rare cases, the Sitata API might be unavailble. As such, it is highly recommended to consider using a background process to retry important actions using an exponential backoff period between retries.

For example, you might design a process to create traveller or trip records in the background to your normal processing routines. In this situation, it is vital to create those records and so it is suggested that you design your architecture to be able to retry these requests.

**Using a background processing architecture when interacting with important endpoints on the Sitata API is encouraged.**


## Company vs. End User

A few of the API endpoints are designated by the `org` namespace. These endpoints are designed to give a Company access to the API for server to server communications and require authentication with the “Company’s” authentication token. Most other endpoints are designed for Traveller or End User access using the Traveller record authentication token.

**NEVER expose your organization's authentication token to the public.**
If you intend to make requests from a client-facing application, then you should use an individual `User`'s authentication token. You can retreive one by first creating a traveller under your organization and persisting that user's authentication token on your own records.


## Typical Use Case

There are many ways to use and access the API depending on your partnership with Sitata. However, the typical use case is one in which a company wishes to provide Sitata’s services for its own travellers. In this case, the following procedure is recommended.

1. Create a traveller record using the company endpoint. Store the user's `authentication_token`.
2. Create a trip using the company endpoint and the newly created traveller record.
3. Use the `authentication_token` of the traveller to access the remaining (client/end-user) portions of the API. Typically, this would include downloading the traveller’s trip information to a mobile device, including country backgrounds, disease information, alerts, advisories, and so on.


## Authentication

Sitata uses API keys to allow access to the API. You can contact Sitata support to request an API key.

Sitata expects the API key to be included in all API requests to the server in a header that looks like the following:

```
Authorization: TKN API_KEY_HERE
```

:::caution

If you have access to Sitata's widgets, you might be granted a public authentication token. Try not to mix these two tokens up. Do not use your private API key in a client-facing app.

:::

Sitata allows each `User` record to be associated to one or more organizations. As a third-party using Sitata, you should include your `Company` identifier in all requests, even those made by each client. The `company_id` should be included in all requests in a header that looks like the following:

```
Organization: COMPANY_ID_HERE
```

## Language

Sitata officially supports English and Spanish. We have partial support for French, Japanese, and both varients of Chinese.

To adjust the language of a request, please set the following request header:

```
Accept-Language: es
```

The value of the header should correspond to the two (except Chinese uses four) character language code as specified by [ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1)

:::tip

You can specify `all` instead of a language code and Sitata might reply with all languages in the response.

:::

## Pagination
Certain endpoints on the Sitata API will return paginated result sets to limit the amount of data in a single request. In general, an endpoint that returns a list of items or objects will return 10 items per request.

In this situation, the API will return a `Link` header which was introduced in [RFC 5988](https://tools.ietf.org/html/rfc5988#page-6). The link header returns a set of ready made links which you can use to determine the total number of pages and retrieve a set of objects for any given page. The API also includes headers for `total`, `total-pages`, `per-page`, and `page-number`.

## ETags
Most endpoints on the Sitata API will return an Etag in the headers of the response. ETags, short for entity tags, are a common way to conditionally verify an HTTP cache. An ETag is a digest which represents the contents of a given resource.

When a response is returned by the server it will include an ETag to represent the resource’s state as part of the HTTP response headers. Subsequent HTTP requests which want to know whether or not the resource has changed since the last request can send along the stored ETag via the If-None-Match header.

The server will then compare the current ETag for the resource to the one provided by the client. If the two ETags match, the client’s cache is considered fresh and the server can respond with a “304 Not Modified” status and an empty response body.


## Errors
When using the Sitata API, you might encounter the following error codes:

| Error Code | Meaning |
| ---------- | ------- |
| 400 |\tBad Request – Your request was malformed.
| 401 | Unauthorized – Your API key is wrong or expired, or you are not allowed to access the resource.
| 403 | Forbidden – You are not allowed to access the resource requested.
| 404 | Not Found – The specified resource could not be found
| 405 | Method Not Allowed – You tried to access a resource with an invalid method
| 406 | Not Acceptable – You requested a format that isn’t json
| 429 | Too Many Requests – You’re requesting too many resources! Slow down!
| 500 | Internal Server Error – We had a problem with our servers. Try again later.
| 503 | Service Unavailable – We’re temporarily offline for maintenance. Please try again later.
| 504 | Timeout – We were not able to process your request quickly enough.

## Geographical Objects
Sitata uses TopoJSON to represent geographical boundaries and areas for display on a map. Typically, these TopoJSON objects are contained within an attribute such as `topojson_url`. In any case, TopoJSON can be converted into [GeoJson](http://geojson.org/) (for further processing) using the [TopoJSON library](https://github.com/topojson/topojson) by using the [feature function](https://github.com/topojson/topojson-client/blob/master/README.md#feature). Sitata’s SDKs also contain libraries to convert TopoJSON into GeoJson.

## Markdown
Some of our content fields use a readable format called [Markdown syntax](https://www.markdownguide.org/basic-syntax/). We have highlighted which content fields do so throughout the documentation. There are a variety of libraries on both web and mobile that you can use to convert Markdown formatting into HTML for display to a user if you so desire. 



