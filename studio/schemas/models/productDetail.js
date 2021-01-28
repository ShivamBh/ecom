export default {
  name: 'productDetails',
  title: 'Product Detail',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'productId',
      title: 'Shopify Product ID',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'string',
    },
  ],
}
