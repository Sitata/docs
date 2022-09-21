---
sidebar_position: 4
slug: /deliver-travel-alerts-and-advisories
id: how-deliver-alert
---

# Deliver Travel Alerts and Advisories

One of Sitata's core services is the delivery of event risk intelligence notifications about various types of travel disruptions, vetted by our team of risk analysts. A few conditions must be true for a notification to be delivered to a traveller by Sitata:

1. A user record is present.
2. The user has an active Subscription with Sitata.
3. Sitata can determine the user's active location.
4. The user's active location is affected by the Alert or Advisory published.
5. An Alert Filter is not blocking the notification.

If the above conditions are met, Sitata will issue a notification for the User and deliver it across various channels such as email, SMS text message, messaging service integrations, and push notification.

## How To Control Your Own Delivery

If you organization has the Advanced Intelligence and Whitelabel package configuration with Sitata, then you will be responsible for delivery of the notifications. This configurtion is common for clients that are integrating Sitata's service into their own apps and platforms. This setup is also advantageous because it won't be necessary for your organization to disclose any customer data to Sitata - all records can be anonymous. Further, your user will not need to have an active Sitata subscription to benefit from the risk intelligence notifications.

:::warning

Note that your organization will need the Advanced Intelligence and Whitelabel package configuration to proceed.

:::

### 1. Create a Webhook

In order to receive information about events and affected users, you will first need to create a [Webhook Endpoint](/api#tag/Organization-greater-Webhook-Endpoints) on the Sitata platform. This webhook will allow us to send the data to your servers. To create the necessary webhook, you should issue a [POST request](/api#tag/Organization-greater-Webhook-Endpoints/paths/~1api~1v2~1org~1{company_id}~1webhook_endpoints/post) and register for the Notification Type `110`.


Therefore, your POST body to create the webhook should resemble something like the following:

```json
{
	"webhook_endpoint": {
		"enabled_events": [110],
		"enabled": true,
		"url": "https://www.your-company.co/webhooks/sitata"
	}
}
```

With the webhook in place, Sitata will send information to your platform whenever we publish an event that might affect your users. The body of the Webhook Event will resemble the following:

```json
{
    "attempt_count": 3,
    "company_id": "<YOUR COMPANY ID>",
    "completed": true,
    "created_at": "2020-05-22T03:07:22.898291Z",
    "id": "79cd6f10-1229-4794-9645-ecebbd262417",
    "last_response": {},
    "last_response_status": 200,
    "next_attempt_at": "2020-05-22T03:09:22.875502Z",
    "payload": {
        "event": 110,
        "user_ids": ["79cd6f10-1229-4794-9645-ecebbd262417", "38dslf10-1229-4794-9645-ecebbd323317"],
        "external_ids": ["23039", "10393"],
        "checkin_ids": [],
        "trip_ids": ["2039d6f10-2039-4794-9645-ecebbd262417", "4029310-2039-4794-8273-edc29dd268302"],
        "trip_external_ids": ["2332", "30293830"],
        "alert": {
            // FULL alert body here
        }
    },
    "updated_at": "2020-05-22T03:07:54.267388Z",
    "webhook_endpoint_id": "https://www.your-company.co/webhooks/sitata"
}
```

**Note that all of the alert attributes will be available and multi-lingual fields will have a map of all supported languages.**

:::tip

Webhook event types use the same values as Sitata's [Notification Types](/api#section/Notification-Attributes/Notification-Types), but not all notification types are supported for webhooks. The list of supported events can be [viewed here](/api#section/Webhook-Event-Types).

:::

With the webhook in place, your organization will be in full control of the delivery of the information to the affected users. It will be up to you to chose whether or not to send the information (we strongly advise that you do) and how you wish to send it (e.g. by email or text message or push notification, etc).

Now might be a good time to review the details of Sitata's webhook system or proceed to understand how Sitata's platform can be [used completely anonymously](#how-privacy-by-design) so that your organization does not need to disclose customer data to Sitata.



