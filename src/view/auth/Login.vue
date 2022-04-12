<script>
import { useRouter } from 'vue-router';
import Background from "../../components/Background.vue";
export default {
    setup() {
        const router = useRouter();
        const login = () => {
            router.push({ name: "user.shop" });
        };
        return { login };
    },
    components: { Background }
};
</script>

<template>
<background />
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

  <router-view />
 
</template>

<style>
.bg-danau {
  background: url("https://d34ip4tojxno3w.cloudfront.net/app/uploads/Rowing-a-boat-in-a-blue-lake-in-Finland.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
}


</style>