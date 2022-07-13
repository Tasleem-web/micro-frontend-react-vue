<template>
  <div class="wrapper">
    <ul>
      <li v-for="ids in [1, 2, 3, 4]" :key="ids">{{ ids }}</li>
    </ul>
    <!-- <NavBar />
    <div class="container">
      <router-view></router-view>
    </div>
    <NotificationsList /> -->
  </div>
</template>

<script>
// import NavBar from "./components/NavBar.vue";
// import NotificationsList from "./components/NotificationsList.vue";
export default {
  name: "App",
  components: {
    // NavBar,
    // NotificationsList,
  },
  // setup() {

  // },
};
</script>

<style>
a.disabled {
  color: gray;
  pointer-events: none;
}
</style>
