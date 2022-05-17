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
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid main-menu">
          <div class="logo">
            <router-link to="/shop" class="navbar-brand">Home</router-link>

          </div>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto fs-6">
              <MenuuserVue />
            </ul>
            <div class="collapse navbar-collapse justify-content-right">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <router-link to="/cart" class="btn btn-outline-dark">
                    <i class="bi-cart-fill me-1"></i>
                    Cart  
                    <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
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
        </div>
      </nav>
    </div>
  </div>

</template>

<style>
</style>
