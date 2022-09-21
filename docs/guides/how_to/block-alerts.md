---
sidebar_position: 6
slug: /block-alerts
id: block-alerts
---

# Block Alerts and Advisories

Sitata strives to deliver the right information to the right person at the right time. Our process to accomplish this is based on how much we know about the location of the user. This results in a system that eliminates non-essential information ("noise") as best as possible. That said, there can be certain instances where an individual user or organization might like to block certain Alerts and Advisories regardless.

Alert Filters allow a user or organization to block notifications for Alerts and Advisories based on Risk Level and category. They should be specified using the `Risk Level`s defined by an [Alert](/api#section/Alert-Risk-Levels) and one of the available [safety categories](/api#tag/Safety-Categories/paths/~1api~1v2~1safety_categories/get).

## Create a filter for a user

To create a filter for a user, [issue a POST request](/api#tag/Alert-Filters/paths/~1api~1v2~1users~1{user_id}~1alert_filters/post) that specifies which risk levels and safety category that needs to be blocked using the `user_id` Alert Filter path.

## Create a filter for your organization

Creating an Alert Filter for your organization will block Alerts and Advisories from being delivered to users within your organization. To create a filter for your organization, [issue a POST requst](/api#tag/Organization-greater-Alert-Filters/paths/~1api~1v2~1org~1{company_id}~1alert_filters/post) that specifies which risk levels and safety category that needs to be blocked using the `company_d` Alert Filter path.

:::info

When you create a filter for your organization, no `TripAlert` records will be created if the filter matches the published Alert. If a matching Alert Filter is owned by the user, a `TripAlert` record will still be created, but the notification will not be delivered to the user. In this way, your organization can still have visibility to a potential affected user - even if that user has chosen not to receive an individual notficiation about it.

:::

