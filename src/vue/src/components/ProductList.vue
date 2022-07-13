<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <template v-for="product in products" :key="product.id">
      <ProductCart :product="product" />
    </template>
  </div>
</template>

<script>
import ProductCart from "./ProductCart.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductList",
  components: {
    ProductCart,
  },
  computed: {
    ...mapState({
      products: (state) => state.product.products,
    }),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
  },
};
</script>

<style scoped></style>
