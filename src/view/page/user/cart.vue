<script setup>
import NavCart from "@/components/navbar/NavCart.vue";

</script>

<template>
    <div class="tp-1">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h4> <i class="fa fa-cart-shopping"></i> Cart</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body" style="padding: 1.5rem;">
                            <div class="row">
                                <div class="col-lg-8 ">
                                    <div class="border p-3 mt-4 mt-lg-0 rounded">
                                        <table class="table table-borderless ">
                                            <thead class="table-light">
                                                <tr>
                                                    <th style="width:10px;"></th>
                                                    <th style="width:200px ;">Barang</th>
                                                    <th style="width:108px ;">Harga</th>
                                                    <th style="width:110px ;">Jumlah</th>
                                                    <th style="width:108px ;">total</th>
                                                </tr>
                                            </thead>
                                            <tbody style="background: white;">
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <input class="form-check-input mt-4 mx-auto"
                                                                type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img class="card "
                                                            src="https://via.placeholder.com/640x480.png/00bb99?text=animals+occaecati"
                                                            alt="Eum magnam nihil sint." height="63">
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <input type="number" min="1" class="form-control"
                                                            placeholder="Qty" value="1" style="width: 90px;">
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <input class="form-check-input mt-4 mx-auto"
                                                                type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img class="card "
                                                            src="https://via.placeholder.com/640x480.png/00bb99?text=animals+occaecati"
                                                            alt="Eum magnam nihil sint." height="63">
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <input type="number" min="1" class="form-control"
                                                            placeholder="Qty" value="1" style="width: 90px;">
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <input class="form-check-input mt-4 mx-auto"
                                                                type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img class="card "
                                                            src="https://via.placeholder.com/640x480.png/00bb99?text=animals+occaecati"
                                                            alt="Eum magnam nihil sint." height="63">
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <input type="number" min="1" class="form-control"
                                                            placeholder="Qty" value="1" style="width: 90px;">
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <input class="form-check-input mt-4 mx-auto"
                                                                type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img class="card "
                                                            src="https://via.placeholder.com/640x480.png/00bb99?text=animals+occaecati"
                                                            alt="Eum magnam nihil sint." height="63">
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <input type="number" min="1" class="form-control"
                                                            placeholder="Qty" value="1" style="width: 90px;">
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="mt-3">
                                        <label for="" class="form-label">Catatan:</label>
                                        <textarea name="#" id="#" placeholder="Masukan pesan....."
                                            class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-3 ms-5">
                                    <div class="border p-3 mt-4 mb-4 mt-lg-0 rounded">
                                        <h6 class="mb-3">Ringkasan belanja </h6>
                                        <div class="row">
                                            <div class="col">
                                                <p>Total Harga (3 barang)</p>
                                            </div>
                                            <div class="col-lg-3 col-sm-2 col-md-2">
                                                <P>Rp543.000</P>
                                            </div>
                                            <hr>
                                            <div class="row mt-2">

                                                <div class="col-9">
                                                    <input type="text" class="form-control form-control-light"
                                                        placeholder="Kupon">
                                                </div>
                                                <div class="col input-group-append">
                                                    <button class="btn btn-light">Pake</button>
                                                </div>
                                            </div>

                                            <div class="col mt-2">
                                                <h6 class="mt-2">Total Harga</h6>
                                            </div>
                                            <div class="col-lg-3 col-sm-2 col-md-2 mt-3">
                                                <P>Rp543.000</P>
                                            </div>

                                        </div>
                                        <div class="d-grid ">
                                            <router-link to="/checkout" class="btn btn-success ">
                                                <li type="button">Beli</li>
                                            </router-link>
                                        </div>
                                    </div>
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
