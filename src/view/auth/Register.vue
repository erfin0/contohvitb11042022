<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const register = () => {
            router.push({ name: "login.user" });
        };
        return { register };
    },
};
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
            <form action="">
              <div class="mb-3">
                <label for="first name">First name</label>
                <input type="text" class="form-control" aria-label="First name">
              </div>
              <div class="mb-3">
                  <label for="last name">Last name</label>
                  <input type="text" class="form-control" aria-label="Last name">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="text-right">
                <button @click="register" class="btn btn-warning">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <router-view /> 
</template>

<style>
@import '/src/assets/css/sb-admin-2.css';
/* @import '../../assets/css/sb-admin-2.css'; */
/* Tripath Custom ;) */

 form {
    max-width: inherit !important; 
  }

</style>