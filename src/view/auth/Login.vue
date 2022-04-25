<<<<<<< HEAD
<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const login = () => {
            router.push({ name: "user.home" });
        };
        return { login };
=======
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { onMounted, ref } from "vue";

const router = useRouter();
const loading = ref(false);
const message = ref("");
const store = useStore();
const loggedIn = ref(store.state.auth.status.loggedIn);

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
onMounted(() => {
  if (loggedIn.value) {
    router.push("/shop");
  }
});
function onSubmit(values) {
  loading.value = true;
  store.dispatch("auth/login", values).then(
    () => {
      router.push("/shop");
>>>>>>> 9542a70cd9316bc1f377ae63f52adbdccd766efd
    },
    (error) => {
      loading.value = false;
      message.value = "Kombinasi passwod dan email salah";
     /*  console.clear();
      console.log(
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          messages ||
          error.toString()
      ); */
    }
  );
}
</script>

<template>
  <div class="bg-danau">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-lg-7">
          <div class="card box-shadow">
            <div class="card-header">
              <h3>Selamat datang</h3>
            </div>
            <div class="card-body">
              <Form @submit="onSubmit" :validation-schema="schema">
                <div class="form-group">
                  <div v-if="message" class="alert alert-danger" role="alert">
                    {{ message }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <Field
                    name="email"
                    type="text"
                    class="form-control"
                    validateOnInput
                  />
                  <ErrorMessage
                    name="email"
                    class="error-feedback text-danger"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <Field
                    name="password"
                    type="password"
                    class="form-control"
                    validateOnInput
                  />
                  <ErrorMessage
                    name="password"
                    class="error-feedback text-danger"
                  />
                </div>

                <div class="text-right">
                  <button class="btn btn-primary" :disabled="loading">
                    <span
                      v-show="loading"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span>login</span>
                  </button>

                  &nbsp;
                  <router-link to="/register" class="text-black"
                    >Register</router-link
                  >
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* @import "/src/assets/css/sb-admin-2.css"; */
/* @import '../../assets/css/sb-admin-2.css'; */
/* Tripath Custom ;) */

form {
  max-width: inherit !important;
}
</style>
