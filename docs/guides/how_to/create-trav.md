---
sidebar_position: 2
slug: /create-travellers
id: how-create-trav
---


# Create Travellers

Travellers are the main consumers of Sitata services. With a traveller account, the user can access and benefit from the various features on the Sitata platform. 

Creating travellers is almost always the first step when interacting with the Sitata API. After you create a traveller, you can start creating trips for that user and receive information about their activity such as real-time travel alerts.

There are two main ways to create a traveller:

1. <b>During Subscription purchase.</b> During the purchase of a subscription, you can create a traveller, their trip, and the subscription details all in one request.

2. By interacting with the <b>Create Traveller endpoint</b> under your organization.

The following explanation will focus on #2 only.

To get started, make sure you have your organization's private `authentication token` which you will need to perform actions on behalf of your organization.

## Make the Request

To create a traveller, you should issue a `POST` request against the `/org/:organization_id/users/travellers` endpoint. Additional details can be found [here](/api#tag/Organization-greater-Users/paths/~1api~1v2~1org~1{company_id}~1users~1travellers/post).

The POST request payload should contain all necessary details about the user. At a minimum, this includes their first name and email address.

Example post body:
```json
{
    "user": {
        "name": "Jack Johnson",
        "email": "jj@gmail-test123.com"
    },
    "send_confirmation_email": false
}
```

If the `user` attributes given contains `password` (and `password_confirmation`), then the platform will set and enforce the password given, otherwise it will not demand a password.

If `send_confirmation_email` is given, the platform will send an email to confirm with the user. If false, system will not send confirmation email and the email will be assumed to be valid (i.e. `email_confirmed_at` will be set). The default is false.

:::tip

Note that this request is under the `org` scope and therefore you should be using the authenticaton token of your organization to make this request.

:::

The response should include details about the user record created:

```json
{
    "authentication_token": "653a8109-0a7e-41e4-a499-426877669325",
    "bio": null,
    "birthday": null,
    "check_ins": [ ],
    "display_name": null,
    "doctor_settings": null,
    "email": "jj@gmail-test123.com",
    "first_name": "Jack",
    "home_country": null,
    "home_location_lat": null,
    "home_location_lng": null,
    "id": "88cd1588-501e-42cc-b4a4-6d78b6f6d115",
    "external_id": null,
    "language": "en",
    "languages_spoken": null,
    "last_name": "Johnson",
    "loc": null,
    "mailing_lists": { },
    "phone_number": null,
    "points": null,
    "profile_pic": {
        "large": "https://www.gravatar.com/avatar/5020fe744a6fe795670833014846541f?s=420&d=mp&r=g",
        "original": "https://www.gravatar.com/avatar/5020fe744a6fe795670833014846541f?s=70&d=mp&r=g",
        "small": "https://www.gravatar.com/avatar/5020fe744a6fe795670833014846541f?s=70&d=mp&r=g",
        "thumb": "https://www.gravatar.com/avatar/5020fe744a6fe795670833014846541f?s=192&d=mp&r=g"
    },
    "roles": [
        {
            "company": null,
            "company_id": "5dea3b88-1f93-4393-85be-bfed5920c3b5",
            "created_at": "2020-04-24T20:33:31.691033Z",
            "id": "688c98d3-0722-41db-9cd3-324b6b41de67",
            "type": 2,
            "updated_at": "2020-04-24T20:33:31.691033Z",
            "user_id": "88cd1588-501e-42cc-b4a4-6d78b6f6d115"
        },
        {
            "company": null,
            "company_id": "91955970-34eb-4a1b-97e6-53e9084abbfa",
            "created_at": "2020-04-24T20:33:31.682720Z",
            "id": "5cdb5bdb-ee25-447c-85f8-46eedb7416c2",
            "type": 0,
            "updated_at": "2020-04-24T20:33:31.682720Z",
            "user_id": "88cd1588-501e-42cc-b4a4-6d78b6f6d115"
        }
    ],
    "settings": null,
    "stripe_account_id": null,
    "stripe_customer_id": null,
    "subscriptions": [ ],
    "timezone": "UTC",
    "timezone_identifier": null,
    "username": null
}
```


You may now use the `id` and `authentication_token` of that traveller to act on behalf of that traveller with the Sitata API. For example, if you are integrating Sitata's functionality and services with your own mobile application, you should save the token within your own database and sync it to your own user's profile in your mobile app. In this way, your user can now fetch data from the Sitata API under their own credentials.


:::warning

Never expose your company's private authentication token to the public including your website or any mobile application. Instead, create a user account and use their assigned `authentication_token`. Sitata reserves the right to discontinue user accounts at its sole discretion. If you assign individual authentication tokens, there is less chance for your company authentication token to be compromised and potentially discontinued which would result in a possible service disruption for your organization.

:::

## External Identifiers

Sitata's user records contain a field named `external_id` to allow our partners to associate their own identifiers with a User record on our platform. To use this field, simply add it to the details of the User record when you make your request. 

Example post body:
```json
{
    "user": {
        "name": "Jack Johnson",
        "email": "jj@gmail-test123.com",
        "external_id": "19302"
    },
    "send_confirmation_email": false
}
```

The `external_id` field accepts `String` values only.