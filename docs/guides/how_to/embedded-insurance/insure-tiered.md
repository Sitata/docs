---
sidebar_position: 4
slug: /embedded-insurance/tiered
id: insure-tiered
---

# Tiered Insurance Products

Tiered products are fairly typical and offer a choice, usually choose one of three, between several types of products and associated benefits. Usually, these products are offered in a "bronze, silver, gold" type of arrangement.

## Characteristics of Tiered products

All tiered products will have their sibling products specified in the `tiered_product_ids` data attribute. When looking at the Product data structure, the following will be true for Tiered products.

| Attribute | Type | Description | True for Stand-alone Product |
| --------- | ---- | ----------- | ---------------------------- |
| tiered_product_ids | Array | A list of sibling products in a Tiered Product arrangement | Will reference the sibling product ids.
| upgrade_product_ids | Array | A list of upgrade products in a Base + Upgrades arrangement | Will be an empty list
| layout_type | Integer | Will be have a value of 0


## Sorting tiered products

Because the list of products returned is a flat list, it will be up to you to filter for the Tiered products and present them in the proper order. To do so, you should:

1. Filter for products that have values in the `tiered_product_ids` list.
2. Use the `sort_order` property to list the products in the correct order.

The following is a code-snippet that does just that:

```
// assuming you have the list of 'products'
var tieredProducts = []
for (var p of products) {
    if (p.tiered_product_ids.length > 0) {
        tieredProducts.push(p)
    }
}

var sortedTiered = _.sortBy(tieredProducts, function (p) { return p.sort_order })
```

Note the above snippet uses the [Lodash library](https://lodash.com/) for easy sorting.

If you have identified the right product to sell, you can then proceed to the [Quote process](insure-quote.md).

During the quote process, you will be listing products and pricing together.
