<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"> x</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <MenuuserVue />
        </ul>
    
        <div class="d-flex">
          <template v-if="loggedIn">
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
</template>

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
<style></style>
