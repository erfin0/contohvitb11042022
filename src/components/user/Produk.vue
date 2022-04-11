<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const produks = ref([]);
const limit = ref(10);
const offset = ref(0);
const countAll = ref(0);
const countt = ref(0);

onMounted(() => {
 // a(limit.value, offset.value);
  console.log('The id is: ' + this.$route.params.slk);
});

function a(alimit, aoffset) {
  axios 
    .get(`http://localhost/toko/public/api/produk/${this.$route.params.slk}`)
    .then((result) => {
      produks.value = result.data;
      countAll.value = result.data.info.countAll;
      hitcosall();
    })
    .catch((err) => {
      console.log(err.response);
    });
}

function abbreviateNumber(value) {
  const suffixes = ["", "K", "M", "B", "T"];
  let newValue = value;
  let suffixNum = 0;

  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  newValue = newValue.toPrecision(3);
  newValue += suffixes[suffixNum];

  return newValue;
}
</script>

<template>
  tes {{ $route.params.slk }}
</template>

<style></style>
