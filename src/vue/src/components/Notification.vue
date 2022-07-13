<template>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  <!-- <div :class="typeClass" class="alert-dismissible fade show" role="alert">
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
    ></button>
    {{ notification?.message }}
  </div> -->
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NotificationMessage",
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `alert alert-${this.notification.type}`;
    },
  },
  methods: mapActions(["removeNotification"]),
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>

<style scoped></style>
