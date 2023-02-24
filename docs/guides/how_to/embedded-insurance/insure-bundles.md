---
sidebar_position: 5
slug: /embedded-insurance/bundles
id: insure-bundles
---

# Bundled Insurance Products

Bundle Products These products typically consist of a base plan with optional upgrades or "bundles" of coverage. These plans offer some levels of personalization for each policy whereby basic needs are covered and optional benefits (e.g. rental car coverage, increased health or baggage limits, adventure sports coverage, etc) can be selected by the customer.

## Characteristics of Bundle products

All bundle products will have their bundle or "upgrade" products specified in the `upgrade_product_ids` data attribute. When looking at the Product data structure, the following will be true for Bundle products.

| Attribute | Type | Description | True for Stand-alone Product |
| --------- | ---- | ----------- | ---------------------------- |
| tiered_product_ids | Array | A list of sibling products in a Tiered Product arrangement | Will be an empty list.
| upgrade_product_ids | Array | A list of upgrade products in a Base + Upgrades arrangement | Will contain the ids of the bundle products.
| layout_type | Integer | Will be have a value of 1

## Sorting bundle products

Because the list of products returned is a flat list, it will be up to you to filter for the Bundle products and present the base product with its associated bundles. To do so, you should:

1. Filter for products that have values in the `upgrade_product_ids` list.
2. Filter for any products specified by the `upgrade_product_ids` list.
2. Use the `sort_order` property to list bundle products in the correct order.

The following is a code-snippet that does just that:

```
// assuming you have the list of 'products'
var baseProducts = []
for (var p of products) {
    if (p.upgrade_product_ids.length > 0) {
        baseProducts.push(p)
    }
}

var baseProductIds = []
for (var p of baseProducts) {
    baseProductIds.push(p.id)
}

// bundle options are those with layout_type = 1 and not a base product
var bundles = []
for (var p of products) {
    var notBase = baseProductIds.indexOf(p.id) === -1
    if (notBase && p.layout_type === 1) {
        bundles.push(p)
    }
}

var sortedBundles = _.sortBy(bundles, function (p) { return p.sort_order })
```

Note the above snippet uses the [Lodash library](https://lodash.com/) for easy sorting.

If you have identified the right product to sell, you can then proceed to the [Quote process](insure-quote.md).

During the quote process, you will be listing products and pricing together.
