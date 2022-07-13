<template>
  <div class="row mt-5 border border-primary p-2 rounded">
    <div class="col-4">
      <div class="text-center">
        <img :src="product?.image" :alt="product?.title" class="img" />
      </div>
    </div>
    <div class="col-8">
      <h1>{{ product?.title }}</h1>
      <h3>${{ product?.price }}</h3>
      <div class="d-flex align-items-center">
        <input
          type="text"
          class="text-center col-1 mr-2 p-1"
          v-model.number="quantity"
        />
        <button class="btn btn-primary mx-2" @click="addToProductIntoCart">
          Add to Cart
        </button>
      </div>
      <p class="text-truncate">{{ product?.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductId",
  props: ["id"],
  computed: {
    ...mapState("product", ["product"]),
    // ...mapState({
    //   product: (state) => state.product.product,
    // }),
  },
  data() {
    return {
      quantity: 1,
    };
  },
  mounted() {
    this.getProduct(this.id);
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addToCart"]),
    addToProductIntoCart() {
      this.addToCart({
        ...this.product,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style scoped>
.img {
  width: 60%;
  display: inline-block;
  text-align: center;
}
</style>
