---
sidebar_position: 7
slug: /alert-targeting
id: alert-targeting
---

# Ensure The Alerts Are Not Noisy

Sitata strives to deliver the right information to the right person at the right time. Our process to accomplish this is based on how much we know about the location of the user. If we do not have a granular understanding of the user's location, our system will likely choose to inform the uesr about all events occuring in the country they are located within as a conservative approach. Conversely, if we know the itinerary or exact location of a user, then the system will be able to accurately target the delivery of information to only events which could affect the user.

The process behaves according to the following rules:


1. If the alert has been specified as affecting an entire country or the entirety of multiple countries, then notify users who are known to be anywhere in the matching countries or are planning to visit one of the matching countries (according to one of their `Trip` records) if it overlaps the Alert `start` date.

2. If the user has a trip record with a `Destination` that specifies an entire country (instead of a city, e.g. type=1), and the `Alert` specifies the same country, and the `start` date of the alert corresponds to the Destination's `entry_date` and `exit-date`, then notify the users of that trip. This rule **does not apply** if the Trip record contains itinerary (`Trip Segment`) items within the country that overlap with the Alert.

3. If the user has a trip record with itinerary (`Trip Segment`) items that overlap with the Alert's `start` date and that are either: A) located in close proximity to one of the `Alert`'s loctions; or B) located within one of the `Alert`'s specified geographies, then notify the user.

4. If the user has a recent (withn 2 days of the Alert `start` datetime) `CheckIn` with a location that is either: A) located in close proximity to one of the `Alert`'s loctions; or B) located within one of the `Alert`'s specified geographies, then notify the user.

From the above rules, you might be able to deduce that if the user has a recent `CheckIn` or a `Trip` record with either: A) Destinations that are **not** country-level (type=0); and/or B) itineary information, then the notifications will be very much targeted for the user's exact location or travel plans. This is the optimum scenaio.

Conversely, if the User's location is unknown and/or the Trip record is very granular with only country-level information specified, then the User might be delivered information about a country that they are visiting, but for a region that they have no intention of being in (since Sitata takes a conservative approach if the granular information is not available through rules #1 and #2)

:::tip

For the best user experience, ensure that Sitata has granular location information about your users through city or regional `Destination` records in a `Trip`, itinerary information (`AirSegment`, `HotelSegment`, etc) in a Trip, or exact locations through `CheckIn`s.

:::