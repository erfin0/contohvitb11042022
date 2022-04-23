<script setup>
import MenuuserVue from "./Menuuser.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const loggedIn = ref(store.state.auth.status.loggedIn);

function logOut() {
  store.dispatch("auth/logout");
  router.push("/login");
}
</script>
<template>
  <div class="container border-bottom">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/shop" class="navbar-brand">Navbar</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <MenuuserVue />
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <template v-if="loggedIn">
                <a class="nav-link" @click.prevent="logOut"> LogOut </a>
              </template>
              <template v-else>
                <router-link to="/login" class="nav-link active">
                  login
                </router-link>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
