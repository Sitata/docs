---
sidebar_position: 111
slug: /embedded-insurance-tiered
id: insure-tiered
---

# Insurance: Tiered Products

Tiered products are fairly typical and offer a choice, usually choose one of three, between several types of products and associated benefits. Usually, these products are offered in a "bronze, silver, gold" type of arrangement.






## Characteristics of Stand-alone products.

Stand-alone products will not be associated with any tiered products or upgrade products. When looking at the Product data structure, the following will be true for Stand-alone products.

| Attribute | Type | Description | True for Stand-alone Product |
| --------- | ---- | ----------- | ---------------------------- |
| tiered_product_ids | Array | A list of sibling products in a Tiered Product arrangement | Will be an empty list
| upgrade_product_ids | Array | A list of upgrade products in a Base + Upgrades arrangement | Will be an empty list

In other words, if there are no tiered products or upgrade products associated with the product offered, then the product must be a Stand-alone product.

If you have identified the right product to sell, you can then please proceed to the Quote process.