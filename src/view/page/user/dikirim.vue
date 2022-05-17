<script setup>
import NavCart from "@/components/navbar/NavCart.vue";
</script>

<template>
    <div class="tp-1">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h4> <i class="fa fa-truck-fast"></i> Dikirim </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="">
                        <div class="card-body" style="padding: 1.5rem;">
                            <div class="row">
                                <div class="col-lg-8 ">
                                    <div class="border p-3 mt-4 mt-lg-0 rounded">
                                        <table class="table table-borderless ">
                                            <thead class="table-light">
                                                <tr>
                                                    <th style="width:430px ;">Barang</th>
                                                    <th >Jumlah</th>
                                                    <th >Resi</th>
                                                </tr>
                                            </thead>
                                            <tbody style="background: white;">
                                                <tr>
                                                    <td>
                                                        <img class="card "
                                                            src="https://via.placeholder.com/640x480.png/00bb99?text=animals+occaecati"
                                                            alt="Eum magnam nihil sint." height="63">
                                                    </td>
                                                    <td>
                                                        <p type="number"  class="form-control"
                                                            placeholder="Qty" value="1" style="width: 90px;">3123</p>
                                                    </td>
                                                    <td>
                                                        <h6>01231239</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img class="card "
                                                            src="https://via.placeholder.com/640x480.png/00bb99?text=animals+occaecati"
                                                            alt="Eum magnam nihil sint." height="63">
                                                    </td>
                                                    <td>
                                                        <p type="number"     class="form-control"
                                                            placeholder="Qty" value="1" style="width: 90px;">13</p>
                                                    </td>
                                                    <td>
                                                        <h6>08432817990898</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-lg-3 ms-5">
                                    <NavCart />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style>
</style>