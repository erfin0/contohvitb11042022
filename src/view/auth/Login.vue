<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const login = () => {
            router.push({ name: "user.shop" });
        };
        return { login };
    },
};
</script>

<template>
<div class="bg-danau">

    <div class="container">
        <div class="row justify-content-center box-center-v">
            <div class="col-lg-6 col-md-12">
                <div class="card border-0 shadow-lg efek-kaca text-white">
                    <div class="card-body">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-md-12">
                                <div>
                                    <div id="panel-login-form" class="panel" >
                                        <h1>Masuk Panitia</h1>
                                        <form method="post" class="user login mt-5" href="/shop">
                                            <div class="form-group">
                                                <label>Nama Pengguna</label>
                                                <input type="text" name="username" class="form-control form-control-user efek-kaca">
                                            </div>
                                            <div class="form-group">
                                                <label>Kata Sandi</label>
                                                <input type="password" name="password" class="form-control form-control-user efek-kaca">
                                            </div>
                                            <div class="text-right">
                                                <button @click="login" class="btn btn-primary">Masuk</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  <router-view />
 
</template>

<style>
.box-center-v {
  margin-top: 25%;
  transform: translateY(-25%);
}
.bg-danau {
  background: url("https://d34ip4tojxno3w.cloudfront.net/app/uploads/Rowing-a-boat-in-a-blue-lake-in-Finland.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.bg-flat {
  background-color: #e5e5e5;
}
.efek-kaca {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
}
form.user .form-group {
  position: relative;
  margin-bottom: 25px;
}
form.user .form-group label {
  position: absolute;
  top: -6px;
  left: 14px;
  font-size: 10px;
  padding: 0 5px;
  background-color: #FFF;
}
form.user.login .form-group {
  margin: 40px 0;
}
form.user.login .form-group label {
  background-color: transparent;
  top: -25px;
  font-size: 14px;
}
.cek-detail {
  background-color: #222;
}
.form-group small {
  font-size: 11px;
}
.form-group p {
  font-weight: bold;
  font-size: 18px;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
form.user .form-control-user {
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 1.5rem 1rem;
}
</style>