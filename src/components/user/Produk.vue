<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const produks = ref([]);
const limit = ref(10);
const offset = ref(0);
const countAll = ref(0);
const countt = ref(0);


const router = useRouter();
onMounted(() => {
  // a(limit.value, offset.value);
  // console.log('The id is: ' + router.params.slug);
});

function a(alimit, aoffset) {
  axios
    .get(`http://api.everest-app.com/api/${router.params.slug}`)
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
  <main class="tp-1">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">

              <!-- image produck -->
              <div class=" col-lg-4 col-md-4 col-sm-12">
                <img class="card-img " src="https://via.placeholder.com/640x480.png/00bb99?text=animals+occaecati"
                  alt="Eum magnam nihil sint.">
              </div>
              <!-- product detail -->
              <div class="ms-5 col-lg-5 col-md-5 col-sm-12 ">
                <form action="" class="ps-lg-4">
                  <h2 class="mt-4 mb-1">Nama product</h2>
                  <div class="mt-3">
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa-regular fa-star text-warning"></i>
                  </div>
                  <div class="mt-4">
                    <h5>
                      <span>Ready</span>
                    </h5>
                  </div>
                  <!-- price -->
                  <div class="mt-4">
                    <h6 class="font-14">Harga :</h6>
                    <h3>Rp.10.000</h3>
                  </div>
                  <!-- Jumlah -->
                  <div class="mt-4">
                    <h6 class="mt-2">Jumlah</h6>
                    <div class="d-flex">
                      <input type="number" min="1" class="form-control" placeholder="Qty" value="1" style="width: 90px;">
                      <router-link to="/cart">
                        <button type="button" class="btn btn-danger ms-2"><i class="fa fa-cart-shopping"></i> Add to cart</button>
                      </router-link>
                    </div>
                  </div>
                 <!-- Description -->
                  <div class="mt-4">
                    <h6>Deskripsi:</h6>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                  </div>
                  <div class="mt-5">
                    <div class="row">
                      <div class="col-md-4">
                        <h6>Terjual:</h6>
                        <p>5.000</p>
                      </div>
                      <div class="col-md-4">
                        <h6>Tersedia:</h6>
                        <p>5.000</p>
                      </div>
                      <div class="col-md-4">
                        <h6>Dikunjungi:</h6>
                        <p>5.000</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
</style>
