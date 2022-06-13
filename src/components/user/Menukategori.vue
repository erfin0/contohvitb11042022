<template>
  <ul >
    <li
      v-for="(kategor, index) in kategori.data"
      :key="index"
      class="rounded"
    >
      <a href="#"> {{ kategor.name }}</a>
      <ul class=" ">
        <li
          v-for="(kategorchild, index) in kategor.child"
          :key="index"
          class=" rounded"
        >
          <a href="#"> {{ kategorchild.name }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const kategori = ref([]);

onMounted(() => {
  axios
    .get("http://api.everest-app.com/api/user/categories")
    .then((result) => {
      kategori.value = result.data;
      console.log(kategori.value);
    })
    .catch((err) => {
      console.log(err.response);
    });
});
</script>

<style></style>
