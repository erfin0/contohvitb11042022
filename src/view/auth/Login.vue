<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const login = () => {
            router.push({ name: "user.home" });
        };
        return { login };
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
            <h3>Selamat datang</h3>
          </div>
          <div class="card-body">
            <form action="">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="text-right">
                <button @click="login" class="btn btn-primary">login</button>
                &nbsp;
                <a href="/register" style="color: black;">Register</a>
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