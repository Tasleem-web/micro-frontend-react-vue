<template>
  <div class="image-wrapper">
    <div v-for="file in files" :key="file.fileName">
      <img
        :src="'http://localhost:5000' + file.file.replaceAll(/uploads/g, '')"
        width="100"
      />
      <button
        type="button"
        class="btn-close position-absolute"
        aria-label="Close"
        @click="deleteFile(file)"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ShowFileUploaded",
  computed: {
    ...mapState({
      files: (state) => state.product.files,
    }),
  },
  methods: {
    ...mapActions("product", ["deleteFile"]),
  },
};
</script>

<style scoped>
.image-wrapper {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.image-wrapper img {
  width: 120px;
  height: 120px;
}
.image-wrapper > div {
  padding: 22px 22px 10px 10px;
  border: 2px solid #a6a6a6;
  border-radius: 5px;
  position: relative;
}
.btn-close.position-absolute {
  right: 0;
  top: 0;
}
</style>
