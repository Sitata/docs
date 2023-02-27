---
sidebar_position: 1
slug: /embedded-insurance/introduction
id: how-to-insure
---

# Embedded Insurance API

Sitata provides global coverage for a number of different travel-related insurances (including international health insurance) for leisure, corporate, expats, and remote workers. The products available to your organization will depend on your customer's geography and a number of other factors.

There are two ways to add our products to your offerings. First, you can use our low-code widget to any of your web pages which will quickly get you up and running with little effort. However, if your organization is more digitally focused and desires a custom purchase experience then you will likely want to leverage our API instead. The following documentation will detail how to use our API to distribute our travel protection plans.

:::info

We're not like other insurers. Instead of only reacting to bad situations, we proactively ensure our policyholders stay safe and have a smooth journey. All our plans or policies will include our other services such as our flight tracking service, real-time threat or disruption alerts, telemedicine, and 24/7/365 easy chat emergency assistance. Still wondering how to quickly add insurance to your existing offering? We have global coverage. [Contact us](mailto://support@sitata.com) and we'll get you up and running in no time!

:::

There are only a few API endpoints necessary for your organization to act as merchant of record and be able to distribute our travel protection plans:

1. [List the products](./insure-list.md) assigned to your organization. Note: this step can be skipped if you already know the list of products you wish to quote.
2. Produce a [list of products with associated pricing](./insure-quote.md) (quote).
3. [Create Subscriptions](./insure-purchase.md) (also known as "policies" or "plans") for a given set of products and, optionally, trip parameters.
4. Listen to our webhooks for any purchase or change notifications.