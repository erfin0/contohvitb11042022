<script setup>
import MenuuserVue from "./Menuuser.vue";
</script>

<template>
<div class="sticky-bar">
  <div class="border-bottom">
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid main-menu">
          <div class="logo">
            <a class="navbar-brand fs-5" href="/home">Home</a>
          </div>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto fs-6">
              <MenuuserVue/>
            </ul>
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
        </div>
      </nav>
  </div>
</div>

</template>

<style>
</style>
