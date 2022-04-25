<script setup>

</script>

<template>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Products</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
      </div>
      <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar"></span>
        This week
      </button>
    </div>
  </div>
  
  
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Products</span>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Quantity Sold</span>
              </div>
            </div>
          </div>
        </div>
      <div class="col-md-4">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Paid Order</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>


<div class="continer">
  <div class="row">
    <div class="col-xs-6 col-md-5">
     <div class="table-actions d-flex align-items-center flex-wrap">
        <a href="#" class="btn btn-primary btn-sm flex-center mr-2 btnA" role="button" data-bs-toggle="button">
          <span>Add Products</span>
          <i class="fa-solid fa-plus"></i>
        </a>
        <button class="btn btn-secondary btn-sm btnA">
           <span>Delete</span>
          <i class="fa-solid fa-trash"></i>
        </button>
      <button class="btn btn-secondary btn-sm btnA">Action</button>
      <button class="btn btn-secondary btn-sm btnA">Export</button>
      <button class="btn btn-secondary btn-sm btnA">Import</button>
      </div>
    </div>
  </div>
</div>
  

  <div class="productlist-table">
    <div class="table-responsive">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">COGS</th>
              <th scope="col">Inventory</th>
              <th scope="col">Order</th>
              <th scope="col">Paid</th>
              <th scope="col">Paid Ratio</th> 
              <th scope="col">Qty Sold</th>
              <th scope="col">Net Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>light saber</td>
              <td>375.000</td>
              <td>200</td>
              <td>30</td>
              <td>4</td>
              <td>2</td>
              <td>70%</td>
              <td>10</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>light saber</td>
              <td>375.000</td>
              <td>200</td>
              <td>30</td>
              <td>4</td>
              <td>2</td>
              <td>70%</td>
              <td>10</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>light saber</td>
              <td>375.000</td>
              <td>200</td>
              <td>30</td>
              <td>4</td>
              <td>2</td>
              <td>70%</td>
              <td>10</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</main>
</template>



<style>
@import '../../../assets/css/products.css';
</style>