---
sidebar_position: 3
slug: /embedded-insurance-/stand-alone
id: insure-list-stand-alone
---

# Stand-alone Insurance Products

Stand-alone products are meant to be sold as a single purchase with no upgrades or other special circumstances. Sitata's assistance only products are an example of a Stand-alone purchase. Other insurance-related products may also be considered as Stand-alone.

:::info

Remember: If the Sitata assistance products are not showing for distribution (likely because insurance products are being offered) and you would like to force list our assistance-only products, you can do so by adding the "assistance-only" parameter to your request. For example:

`https://www.sitata.com/api/v2/products?currency_code=CAD&country_code=es&assistance_only=true`

:::

## Characteristics of Stand-alone products.

Stand-alone products will not be associated with any tiered products or upgrade products. When looking at the Product data structure, the following will be true for Stand-alone products.

| Attribute | Type | Description | True for Stand-alone Product |
| --------- | ---- | ----------- | ---------------------------- |
| tiered_product_ids | Array | A list of sibling products in a Tiered Product arrangement | Will be an empty list
| upgrade_product_ids | Array | A list of upgrade products in a Base + Upgrades arrangement | Will be an empty list

In other words, if there are no tiered products or upgrade products associated with the product offered, then the product must be a Stand-alone product.

If you have identified the right product to sell, you can then proceed to the [Quote process](insure-quote.md).

During the quote process, you will be listing products and pricing together.