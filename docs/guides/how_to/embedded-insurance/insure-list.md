---
sidebar_position: 2
slug: /embedded-insurance/list-products
id: insure-list-products
---

# List Insurance Products

At any given time, your organization can list the products assigned to it which are available for distribution. The products available to your organization will depend on the geography of your customers, your own needs, and a number of other factors.

Although you can simultaneously list your products with pricing, it can be useful at times to fetch the list of products on their own. To do so, simply issue a `GET` request to the following API request:

`https://www.sitata.com/api/v2/products?currency_code=CAD&country_code=es`

Note that the `country_code` should be the customer's origin country using [ISO 3166-1 alpha-2 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Both `currency_code` and `country_code` should be provided.

Our server will respond with the list of products available for distribution. 

For full API documentation, [please click here](/api#tag/Products/paths/~1api~1v2~1products~1/get).


:::warning

Please note that some of the product and benefit attributes such as `description` will be in [Markdown format](https://www.markdownguide.org/basic-syntax/). Make sure you use an appropriate Markdown library to present this information to the end user for better formatting.

:::


## Types of Products

Please note that Sitata might offer several different types of products for your organization to distribute. Broadly speaking, those types might include international health insurance, travel insurance, and also our Travel Protection Plans without insurance. It will be up to you to understand the types of products that you wish to offer and how they are offered through our API.

### Sitata Travel Assistance Plans

Sitata's Travel Assistance Plans (Sitata Plus) will almost always be available for distribution. These plans provide emergency travel assistance and other features such as flight tracking, Travel Alerts, etc, but without insurance. These plans are especially useful for destinations where insurance is not available, but where we can still provide emergency travel assistance services.

The Sitata plans contain the following key identifiers:

| Identifier | Plan Name | Description |
| ---------- | --------- | ----------- |
| sitata-yearly | Sitata Plus Annual | A yearly subscription to Sitata Plus 
| sitata-fixed | Sitata Plus Single Trip | A single-trip subscription to Sitata Plus defined by a start and finish date
| sitata-daily | Sitata Plus Roaming | A subscription to Sitata Plus which is activated by location sharing and roaming through the Sitata App.
| sitata-daily-activation | Sitata Plus Roaming Activation fee | A one-time fee to activate Sitata Plus Roaming

In addition to these plans, your organization might have access to our other insurance products.

:::info

If the Sitata insurance assistance are not showing for distribution (likely because insurance products are being offered) and you would like to force list our assistance-only products, you can do so by adding the "assistance-only" parameter to your request. For example:

`https://www.sitata.com/api/v2/products?currency_code=CAD&country_code=es&assistance_only=true`

:::

### Insurance Products General Structure

Sitata's insurance products generally fall into three categories:

1. Stand-alone plans. For example, only one product for a specific insurance type might be offered for international health insurance.

2. Tiered plans. These are your typical "bronze", "silver", "gold" plans where the customer chooses one of three options.

3. Bundle Plans. These are usually a base plan with optional upgrades or "bundles" of coverage. These plans offer some levels of personalization for each policy whereby basic needs are covered and optional benefits (e.g. rental car coverage, increased health or baggage limits, adventure sports coverage, etc) can be selected by the customer.

:::info

If your organization is offering travel insurance, you will most likely need to be prepared to address Tiered Plans or Bundle Plans or potentially both depending upon the structure of the program you have arranged with us. It might be best to code for all three structure types today so that your organization can develop additional offers with Sitata further down the road.

:::

Please note, due to the flexibility of Sitata's product offering, our API will respond with a flat list of products. It will be your responsibility to organize or sort these products in a logical order. But don't worry! We can certainly help with that.

Let's now look at each type of the three plans in more detail.

