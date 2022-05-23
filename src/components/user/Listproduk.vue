<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Paginate from "vuejs-paginate-next";
//import {abbreviateNumber} from "@/helper/function.js";

const produks = ref([]);
const limit = ref(12);
const offset = ref(0);
const countAll = ref(0);
const countt = ref(0);

onMounted(() => {
  a(limit.value, offset.value);
});

function a(alimit, aoffset) {
  axios
    .get("http://api.everest-app.com/api/products", {
      params: {
        limit: alimit,
        offset: aoffset,
      },
    })
    .then((result) => {
      produks.value = result.data;
      countAll.value = result.data.info.countAll;
      hitcosall();
    })
    .catch((err) => {
      console.log(err.response);
    });
}
/* async function x (alimit, aoffset){
  const { data } = await axios.get(`/users?page=2`);
      state.users = data;
} */
function hitcosall() {
  countt.value = Math.ceil(countAll.value / limit.value);
  // console.log(abbreviateNumber(countAll.value));
}
function clickCallback(e) {
  a(limit.value, (e - 1) * limit.value);
}
function abbreviateNumber(value) {
  const suffixes = ["", "K", "M", "B", "T"];
  let newValue = value;
  let suffixNum = 0;

  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  // newValue = newValue.toPrecision(2);
  newValue = precise(newValue);
  newValue += suffixes[suffixNum];

  return newValue;
}
function precise(x) {
  x = Number(x);
  console.log(x);
  console.log(typeof x);
  return x.toPrecision(3);
}
</script>

<template>
  <section class="py-5">
    <div class=" mt-5">
      
      <div
        class="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center" 
      >
        <div
          v-for="(produk, index) in produks.data"
          :key="index"
          class="col mb-5"
        >
          <router-link
            :to="`/produk/${produk.slug}`"
            class="text-muted fw-ligh text-decoration-none"
          >
            <div class="card h-100 shadow-sm cardproduk">
              <!-- Sale badge-->
              <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                Sale
              </div>
              <!-- Product image-->
              <img class="card-img-top" :src="produk.img" :alt="produk.nama" />

              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-left">
                  <!-- Product name-->
                  <h5 class="fw-bolder">{{ produk.nama }}</h5>
                  <!-- Product reviews-->
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <!-- Product price-->
                </div>
               <!--  <span class="text-muted text-decoration-line-through">
                  {{
                    Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(produk.harga)
                  }}
                </span> -->
                <div class="row">
                  <div class="col">
                    {{
                      Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(produk.harga)
                    }}
                  </div>
                  <div class="col text-end">
                    {{ abbreviateNumber(produk.terjual) }} terjual
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <paginate
        :page-count="countt"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      >
      </paginate>
    </div>
  </section>
</template>

<style>
.cardproduk {
  border-radius: 5px;
  border: 1px #7888979d solid;
}

.cardproduk:hover {
  border-radius: 5px;
  border: 1px rgb(33, 86, 96) solid;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
