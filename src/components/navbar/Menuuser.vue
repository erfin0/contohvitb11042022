
<script setup>
const navmenu = [
  {
    name: "shop",
    link: "user.shop",
  
  },
  {
    name: "Checkout",
    link: "user.checkout",
  
  },
];
</script>

<template>

  <li v-for="ite in navmenu" :key="ite.name">
    <router-link :to="{ name: ite.link }" active-class="active" class="nav-link"> {{ ite.name }}</router-link>
  </li>

</template>


<style></style>
