
<script setup>
const navmenu = [
    {
        name: "Cart",
        link: "user.cart",

    },
    {
        name: "Dikemas",
        link: "user.shiping",

    },
    {
        name: "Dikirim",
        link: "user.send",

    },
    {
        name: "Diterima",
        link: "user.done",

    },

];
</script>

<template>

    <button v-for="ite in navmenu" :key="ite.name" class="nav-link"  
        data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
        aria-selected="false">
        <router-link :to="{ name: ite.link }" active-class="active" class="nav-link"> {{ ite.name }}</router-link>
    </button>

</template>


<style>
</style>
