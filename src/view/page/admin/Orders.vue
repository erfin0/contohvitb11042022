<script setup>

</script>

<template>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Orders</h1>
    <div class="btn-toolbar mb-4 mb-md-0">
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
      <div class="col-sm-6 col-md-3">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Orders</span>
              </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Paid</span>
              </div>
            </div>
          </div>
        </div>
      <div class="col-sm-6 col-md-3">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Paid Ratio</span>
              </div>
            </div>
          </div>
        </div>
              <div class="col-sm-6 col-md-3">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Unpaid Orders</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>


<div class="continer">
  <div class="row">
    <div class="col-xs-6 col-md-7">
     <div class="table-actions d-flex align-items-center flex-wrap">
        <a href="#" class="btn btn-primary btn-sm" role="button" data-bs-toggle="button">
          <span>Add Products</span>
          <i class="fa-solid fa-plus"></i>
        </a>
      <button class="btn btn-secondary btn-sm btnA">Export</button>
      <button class="btn btn-secondary btn-sm btnA">Barcode</button>
      <button class="btn btn-secondary btn-sm btnA">Upload Receipt Number</button>
      </div>
    </div>
  </div>
</div>

  

  <div class="orders-table">
    <div class="table-responsive">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Status</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Date</th>
              <th scope="col">Gross Revenue</th> 
              <th scope="col">Follow-Up</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1982</td>
              <td>haha hihi</td>
              <td>Bandung</td>
              <td>shipped</td>
              <td>paid</td>
              <td>04/10/2022</td>
              <td>70%</td>
              <td>eradva</td>
              <td>ergaed</td>
            </tr>
            <tr>
              <td>1982</td>
              <td>haha hihi</td>
              <td>Bandung</td>
              <td>shipped</td>
              <td>paid</td>
              <td>04/10/2022</td>
              <td>70%</td>
              <td>eradva</td>
              <td>ergaed</td>
            </tr>
            <tr>
              <td>1982</td>
              <td>haha hihi</td>
              <td>Bandung</td>
              <td>shipped</td>
              <td>paid</td>
              <td>04/10/2022</td>
              <td>70%</td>
              <td>eradva</td>
              <td>ergaed</td>
            </tr>
            <tr>
              <td>1982</td>
              <td>haha hihi</td>
              <td>Bandung</td>
              <td>shipped</td>
              <td>paid</td>
              <td>04/10/2022</td>
              <td>70%</td>
              <td>eradva</td>
              <td>ergaed</td>
            </tr>
            <tr>
              <td>1982</td>
              <td>haha hihi</td>
              <td>Bandung</td>
              <td>shipped</td>
              <td>paid</td>
              <td>04/10/2022</td>
              <td>70%</td>
              <td>eradva</td>
              <td>ergaed</td>
            </tr>
            <tr>
              <td>1982</td>
              <td>haha hihi</td>
              <td>Bandung</td>
              <td>shipped</td>
              <td>paid</td>
              <td>04/10/2022</td>
              <td>70%</td>
              <td>eradva</td>
              <td>ergaed</td>
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