---
sidebar_position: 7
slug: /embedded-insurance/endorsements
id: insure-endorsements
---

# Product Refunds, Changes, and Cancellations (Endorsements)

The easiest way to process a change or refund situation is to simply [cancel the existing Subscription](/api#tag/Organization-greater-Subscriptions/paths/~1api~1v2~1subscriptions~1{subscription_id}~1close/post) and then [create a new one](/api#tag/Organization-greater-Subscriptions/paths/~1api~1v2~1org~1{company_id}~1subscriptions/post).

When a Subscription is "closed" (or cancelled), refunds will automatically be recorded and processed provided all of the products within the Subscription are within their refund window.

:::warning

At this time, cancelling or changing a subscription will not adjust any associated trips.

:::

If you have any questions or concerns, please contact us.


