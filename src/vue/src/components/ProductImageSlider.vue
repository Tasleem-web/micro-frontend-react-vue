<template>
  <!-- Carousel -->
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      <template v-for="(file, index) in product" :key="file.id">
        <button
          type="button"
          :data-bs-target="idx"
          :data-bs-slide-to="file.id"
          :class="{ active: index == 0 ? true : false }"
        ></button>
      </template>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
      <template v-for="(file, index) in product" :key="file.id">
        <div
          class="carousel-item"
          :class="{ active: index === 0 ? true : false }"
        >
          <img
            :src="'http://localhost:5000/' + file.fileName"
            alt="Los Angeles"
            class="d-block"
            style="width: 100%"
          />
        </div>
      </template>
    </div>

    <!-- Left and right controls/icons -->
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="idx"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="idx"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>

  <div class="container-fluid mt-3">
    <h3>Carousel Example</h3>
    <p>
      The following example shows how to create a basic carousel with indicators
      and controls.
    </p>
  </div>
</template>

<script>
export default {
  name: "ProductImageSlider",
  props: {
    product: Array,
    uniqueKey: String,
  },
  computed: {
    idx() {
      return `#demo-${this.uniqueKey}`;
    },
  },
};
</script>

<style scoped></style>
