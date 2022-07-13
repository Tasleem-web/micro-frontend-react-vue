<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <template v-for="menu in NavBarMenu">
            <router-link
              :key="menu.name"
              :to="menu.path"
              class="nav-tem nav-link"
              :class="{ active: menu.active }"
              @click="activeMenu(menu.id)"
            >
              {{ menu.name }}
            </router-link>
          </template>
        </div>

        <div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ countCartItems }} Cart
            </button>
            <div
              class="dropdown-menu p-2"
              aria-labelledby="dropdownMenuButton"
              style="min-width: 320px; right: 0; left: auto"
            >
              <div @click="$event.stopPropagation()">
                <template v-for="cart in carts">
                  <div
                    class="px-2 d-flex justify-content-between"
                    :key="cart.id"
                  >
                    <div>
                      <strong class="text-truncate">{{ cart?.title }}</strong>
                      <br />
                      {{ cart?.quantity }} x ${{ cart?.price }}
                    </div>
                    <div>
                      <a
                        href="#"
                        class="link-primary badge badge-secondary"
                        @click="removeItem(cart.id)"
                        >remove</a
                      >
                    </div>
                  </div>
                  <!-- <hr :key="cart.id" /> -->
                </template>
                <div class="d-flex justify-content-between">
                  <span>Total: ${{ grandTotal }}</span>
                  <a
                    href="#"
                    @click="emptyCart"
                    :class="{ disabled: countCartItems < 1 }"
                    >Clear Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import NavBarMenu from "../assets/menu.json";
export default {
  components: {
    // NavBarMenu,
  },
  name: "NavBar",
  data() {
    return {
      NavBarMenu: NavBarMenu.filter(
        (menu) =>
          (menu.id = // Generate Dynamic id
          (Math.random().toString(36) + Date.now().toString(36)).substr(2))
      ),
    };
  },
  computed: {
    ...mapState({
      carts: (state) => state.cart.carts,
    }),
    ...mapGetters("cart", ["countCartItems", "grandTotal"]),
    // ...mapGetters({
    //   countCartItems:'cart/countCartItems',
    //   grandTotal:'cart/grandTotal',
    // })
  },
  methods: {
    ...mapActions("cart", ["removeItem", "emptyCart"]),
    // ...mapActions({
    //   removeItem: "cart/removeItem",
    //   emptyCart: "cart/emptyCart",
    // }),
    activeMenu(id) {
      this.NavBarMenu = this.NavBarMenu.filter((menu) => {
        menu["active"] = menu.id === id ? true : false;
        return menu;
      });
    },
  },
};
</script>

<style scoped></style>
