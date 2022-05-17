<script setup>
import MenuCart from "./Menucart.vue";
</script>

<template>

    <div class="border p-3 rounded">
        <div class="">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <MenuCart/>
            </div>
        </div>
    </div>

</template>

<style>
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #198754;
}
.nav-link {
    color: #000000;
}
.nav-link:hover {
    color: #198754;
}

</style>