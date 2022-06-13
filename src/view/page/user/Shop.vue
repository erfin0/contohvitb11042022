<script setup>
import listprodukVue from "@/components/user/Listproduk.vue";
import headerShopVue from "@/components/header/HeaderShop.vue";
import ListkategoriVue from "@/components/user/Listkategori.vue";
</script>

<template>
  <div class="text-center"></div>
  <div class="container py-5">
    <div class="row">
      <div
        class=" col-md-5 col-lg-3  col-md-0 d-none d-sm-none d-md-block "
      >
        <ListkategoriVue />
      </div>

      <div class="col-sm-12 col-md-7 col-lg-9 ">
        <input class="form-control mt-5 " type="text" placeholder="Cari " >

        <listprodukVue />
      </div>
    </div>
  </div>
</template>

<style></style>
