<template>
<h2>Products</h2>
<div class="d-grid gap-2 d-md-block">
<button type="button" class="btn btn-primary btn-sm">Add Products</button>
<button type="button" class="btn btn-light btn-sm">Delete</button>
</div>
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

          </tbody>
        </table>
      </div>
</template>


<script setup>import { Input } from 'postcss';

 Input
</script>

<style>
h2{
  max-width: 1200px;
  margin: auto;
}
button{
  margin-left: 10px;
  margin-top: 25px;
  margin-bottom: 10px;
}
table{
  max-width: 1200px;
  margin: auto;
}
</style>