<script setup>
import MenuuserVue from "./Menuuser.vue";
</script>
<template>
  <div class="container border-bottom">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <MenuuserVue/>
          </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-right">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="btn btn-outline-dark" type="submit">
                    <i class="bi-cart-fill me-1"></i>
                    Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill"
                      >0</span
                    >
                  </button>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/login">login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
