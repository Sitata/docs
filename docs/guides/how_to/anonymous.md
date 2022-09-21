---
sidebar_position: 5
slug: /privacy-by-design
id: how-privacy-by-design
---

# Use Privacy By Design

Sitata has designed its platform with "Privacy By Design" principles and it is possible to integrate Sitata's services without disclosing any customer data to Sitata whatsoever. We accomplish this by allowing you to create records with an associated `external_id` and then relay various events and information to your platform through our webhook system.

The following example will walk you through how such a setup could be created to integrate our Alerts and Advisories into your platform without sending customer data to Sitata.


## Create Anonymous Records

1. First, create an anonymous [user record](create-trav.md) and make sure you specify an `external_id` that corresponds to an identifier in your own database.

The POST body should resemble something like the following:

```json
{
    "email": "1f648db7-a515-48c6-b847-667494b6df00@email.com",
    "first_name": "Anonymous",
    "last_name": "Anonymous",
    "external_id": "<YOUR ID HERE>"
    // etc...
}
```

External IDs in the Sitata platform are stored as strings and we do not enforce any uniqueness on this field.

:::tip

For any required and unique field, simply provide a random value - such as the email field in the example above. UUIDs can work great for this purpose.

:::


2. Next, create a [trip record](create-trip.md) for the user. Here, you can also specify an `external_id` that corresponds to an identifier in your own database.

3. Finally, create a [webhook endpoint](deliver-travel-alert.md) to receive alerts and advisories.

with all of the above in place, your platform will receive webhook events for any alerts and advisories that might affect your travellers. No customer data has been exchanged. When you receive the webhook data, you will be able to use the `external_id`s to reference data in your own database before deciding what to do with the data.

:::info

Although we allow for `external_id`s to be specified, it can still be helpful to store Sitata IDs in your own database to more easily use other portions of our API since many portions of our API still demand Sitata IDs.

:::