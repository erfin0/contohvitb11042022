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
  <div class="sticky-bar">
    <div class="border-bottom">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid main-menu">
          <div class="logo">
            <router-link to="/shop" class="navbar-brand">Home</router-link>
          </div>
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
            <ul class="navbar-nav me-auto fs-6">
              <MenuuserVue />
            </ul>

            <div class="d-flex">
              <template v-if="loggedIn">
                <router-link to="/cart" class="btn btn-outline-dark">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill"
                    >0</span
                  >
                </router-link>
                <a class="nav-link" @click.prevent="logOut"> LogOut </a>
              </template>
              <template v-else>
                <router-link to="/login" class="nav-link active">
                  login
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style></style>
