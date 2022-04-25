<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { onMounted, ref } from "vue";
import AuthService from "../../services/auth.service";

const router = useRouter();
const loading = ref(false);
const message = ref("");
const store = useStore();
const loggedIn = ref(store.state.auth.status.loggedIn);
const successful = ref(false);

const schema = yup.object({
  first_name: yup.string().required("first name is a required field"),
  last_name: yup.string().required("last name is a required field"),
  email: yup.string().required().email(),
  password: yup.string().required("Password is required").min(8),
  pass_confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("is required"),
});
onMounted(() => {
  if (loggedIn.value) {
    router.push("/shop");
  }
});
function onSubmitc(values) {
  loading.value = true;
  store.dispatch("auth/register", values).then(
    () => {
      router.push("/login");
    },
    (error) => {
      loading.value = false;
      message.value = error;
    }
  );
}

function onSubmit(user) {
  message.value = "";
  successful.value = false;
  loading.value = true;
  AuthService.register(user)
    .then((result) => {
      console.log(result.response.data);
      successful.value = true;
      loading.value = false;
    })
    .catch((err) => {
      console.log(err.response.data);
      message.value =err.response.data.messages;
       (err.response && err.response.data && err.response.data.message && err.response.data.messages) ||
        err.message ||
        err.toString(); 
      console.log(message.value.email);
      successful.value = false;
      loading.value = false;
    });
  /*  store.dispatch("auth/register", user).then(
        (data) => {
         message.value = data.message;
          successful.value = true;
         loading.value = false;
        },
        (error) => {
          message.value =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            console.log( message.value);
         successful.value = false;
         loading.value = false;
        }
      ); */
}
</script>

<template>
  <div class="bg-danau">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-lg-7">
          <div class="card box-shadow">
            <div class="card-header">
              <h3>Register</h3>
            </div>
            <div class="card-body">
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
              <Form @submit="onSubmit" :validation-schema="schema">
                <div v-if="!successful">
                  <div class="mb-3">
                    <label for="first name">First name</label>
                    <Field
                      name="first_name"
                      type="text"
                      class="form-control"
                      validateOnInput
                    />
                    <ErrorMessage
                      name="first_name"
                      class="error-feedback text-danger"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="last name">Last name</label>
                    <Field
                      name="last_name"
                      type="text"
                      class="form-control"
                      validateOnInput
                    />
                    <ErrorMessage
                      name="last_name"
                      class="error-feedback text-danger"
                    />
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
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                      >Password confirm</label
                    >
                    <Field
                      name="pass_confirm"
                      type="password"
                      class="form-control"
                      validateOnInput
                    />
                    <ErrorMessage
                      name="pass_confirm"
                      class="error-feedback text-danger"
                    />
                  </div>

                  <div class="text-right">
                    <button
                      @click="register"
                      class="btn btn-warning"
                      :disabled="loading"
                    >
                      <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm"
                      >
                      </span>
                      Register
                    </button>
                    or
                    <router-link to="/login" class="text-black"
                      >Login</router-link
                    >
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
@import "/src/assets/css/sb-admin-2.css";
/* @import '../../assets/css/sb-admin-2.css'; */
/* Tripath Custom ;) */

form {
  max-width: inherit !important;
}
</style>
