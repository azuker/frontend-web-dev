<template>
  <div>
    <CategoryMenu
      :categories="categories"
      @category-changed="onCategoryChanged"
    />
    <ProductList :products="products" />
  </div>
</template>

<script>
import MarketService from '../../services/marketService';
import CategoryMenu from './CategoryMenu.vue';
import ProductList from './ProductList.vue';

export default {
  name: 'ProductsPage',
  components: {
    CategoryMenu,
    ProductList,
  },
  data: () => ({
    categories: [],
    products: [],
  }),
  mounted() {
    MarketService.loadCategories()
      .then(o => this.categories = o);
  },
  methods: {
    onCategoryChanged: function(category) {
      MarketService.loadProducts(category.name)
        .then(o => this.products = o);
    },
  },
}
</script>