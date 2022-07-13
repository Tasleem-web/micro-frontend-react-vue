<template>
  <div class="wrapper">
    <form
      class="row g-2"
      :model="formState"
      name="basic"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <!-- File Upload -->
      <div class="row col-md-12">
        <div class="col-md-6">
          <FileUpload />
        </div>
        <div class="col-md-6">
          <ShowFileUploaded />
        </div>
      </div>
      <!-- Title -->
      <div class="col-md-12">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="formState.title"
        />
      </div>
      <!-- Description -->
      <div class="col-md-12">
        <label for="description" class="form-label">Description</label>
        <textarea
          :rows="3"
          type="text"
          class="form-control"
          id="description"
          v-model="formState.description"
        />
      </div>

      <!-- price -->
      <div class="col-md-12">
        <label for="price" class="form-label">₹Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="formState.price"
        />
      </div>

      <!-- Continents -->
      <div class="col-md-12">
        <label for="continent" class="form-label">Continents</label>
        <select
          id="continent"
          class="form-select"
          aria-label="Default select example"
          v-model="formState.continent"
        >
          <!-- <option selected>Open this select menu</option> -->
          <option
            v-for="continent in Continents"
            :key="continent.key"
            :value="continent.value"
          >
            {{ continent.value }}
          </option>
        </select>
      </div>
      <div class="col-md-12">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import FileUpload from "./FileUpload.vue";
import ShowFileUploaded from "./ShowFileUploaded.vue";
import { mapState, mapActions } from "vuex";
// import router from "vue-router";

export default {
  name: "ProductConfiguration",
  components: {
    FileUpload,
    ShowFileUploaded,
  },
  setup() {
    const Continents = ref([
      { key: 1, value: "Africa", label: "Africa" },
      { key: 2, value: "Europe", label: "Europe" },
      { key: 3, value: "Asia", label: "Asia" },
      { key: 4, value: "North America", label: "North America" },
      { key: 5, value: "South America", label: "South America" },
      { key: 6, value: "Australia", label: "Australia" },
      { key: 7, value: "Antarctica", label: "Antarctica" },
      { key: 8, value: "India", label: "India" },
    ]);

    const initialControlsValue = {
      title: "",
      description: "",
      price: 0,
      continent: "India",
    };

    const formState = reactive({ ...initialControlsValue });
    return {
      initialControlsValue,
      formState,
      Continents,
    };
  },
  computed: {
    ...mapState("product", ["files"]),
    // ...mapState({
    //   getFiles: (state) => state.product.files,
    // }),
  },
  methods: {
    ...mapActions("product", ["addProduct"]),

    handleSubmit() {
      // this.addProduct({
      //   ...this.formState,
      //   files: this.files,
      // });
      // Object.assign(this.formState, this.initialControlsValue);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
