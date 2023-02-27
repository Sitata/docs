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

## Sibling bundle products

In the Bundled Products setup, there is on special type of optional bundle. In this special type, the user can pick one of multiple related bundles.

<div style={{textAlign: 'center', border: '1px solid grey', 'margin-bottom': '40px'}}>

![Results only](/img/insurance/sibling-bundle.jpeg)

</div>

In the image above, we have a sibling bundle paired together in the interface. With this sibling bundle, you can pick one option, but not the other sibling. 

:::warning

In the above layout, the user can pick optional medical upgrade #1 or optional medical upgrade #2, but not both at the same time. Sibling bundles are "either/or", but not both at the same time.

:::

The following is a code snippet that will sort bundle products and group them together in case there are sibling bundles that need to be displayed together.

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

// only show upgrade products for each base product that is selected
// creates a new structure for display of upgrades so we can group
// them together if they have 'upgrade_sibling_ids'
// { products: [], sort_order: 3 }
const baseUpgradeIds = _.flatMap(baseProducts, (p) => { return p.upgrade_product_ids })
const visible = _.filter(bundles, (p) => {
    return baseUpgradeIds.indexOf(p.id) >= 0
})
// now we need to group siblings together
const groupList = _.reduce(visible, (results, p) => {
    const existing = _.find(results, (e) => {
        const possibleSiblingIds = _.map(e.products, 'id')
        const siblingIds = p.upgrade_sibling_ids
        return !!_intersection(possibleSiblingIds, siblingIds).length
    })

    if (existing) {
        existing.products.push(p)
        existing.sort_order = _.minBy(existing.products, 'sort_order').sort_order
    } else {
        results.push({ products: [p], sort_order: p.sort_order })
    }
    return results
}, [])
// grouped bundles should have a structure like the following:
// [{ products: [], sort_order: 3 }]
// if there are more than one product in this structure, then
// they are siblings where only on can be selected in the set
let groupedBundles = _.sortBy(groupList, 'sort_order')
```

Sibling bundles can be tricky so please contact us if you require additional support.



## Display of bundled products

After you have received a quote with bundled products, you should display it to your customers.

<div style={{textAlign: 'center', border: '1px solid grey', 'margin-bottom': '40px'}}>

![Results only](/img/insurance/bundles-base.jpeg)

</div>

To start, you should show the base products which are automatically included in every plan. In the above picture, one base product is on display with its various benefits. In this layout, tapping on the information icon will launch a modal window displaying the description of the benefit.

Next, you should display the optional products (bundles) and their benefits.

<div style={{textAlign: 'center', border: '1px solid grey', 'margin-bottom': '40px'}}>

![Results only](/img/insurance/optional-bundles.jpeg)

</div>


Note that each bundle is optional and in our layout, we adjust the pricing and display when the user selects or deselects the bundle.

Also Note that our layout in the images above have the following key components:

1. Each base product is arranged by `sort_order` and automatically selected for purchase. In the above images, there is only one base product.
2. After the base product(s), the bundle products ar arranged by `sort_order`.
2. Each benefit of each product is also arranged and displayed by `sort_order`. 
3. For each benefit an information icon and a popup modal to display the benefit description.
5. The limit of each benefit is shown.
6. A list of product-based FAQs is accessible.
7. The product disclaimer is displayed for each product selected (not shown above). 
8. The product documents for each product selected is also displayed (filtered by the user's language - not shown above)

It's important that you address the above points in your own user interface so that your users have the best purchasing experience. 