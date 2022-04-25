<template>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Logistic</h1>
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
      <div class="col-sm">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Orders</span>
              </div>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Waiting for Pickup</span>
              </div>
            </div>
          </div>
        </div>
      <div class="col-sm">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Picked Up</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Non COD</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total COD</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

  <hr class="mb-4">

  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">COD On Process</span>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">COD Success</span>
              </div>
            </div>
          </div>
        </div>
      <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">COD Failed</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">COD Success Rate</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

<hr class="mb-4">

  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Dikumpulkan dari Pelanggan</span>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Belum Mengumpulkan</span>
              </div>
            </div>
          </div>
        </div>
      <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Gagal Mengumpulkan</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
        <div class="overview box box--primary">
          <div class="overview__number overview__number--normal">0</div>
            <div class="overview__label">
              <div class="overview__label__name">
                  <span class="overview__text">Total Ongkir</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

<hr class="mb-4">

    <div class="logistic-table">
    <div class="table-responsive">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Shipment ID</th>
              <th scope="col">Order ID</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Receipt Number</th>
              <th scope="col">Courier</th> 
              <th scope="col">Value</th>
              <th scope="col">Delivery Status</th>
              <th scope="col">Delivery Notes</th>
              <th scope="col">Delivered Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19</td>
              <td>236872</td>
              <td>123468</td>
              <td>gaga</td>
              <td>1350553244</td>
              <td>3452</td>
              <td>sghcfg</td>
              <td>JNE</td>
              <td>shipped</td>
              <td>none</td>
              <td>12/07/2022</td>
            </tr>
             <tr>
              <td>19</td>
              <td>236872</td>
              <td>123468</td>
              <td>gaga</td>
              <td>1350553244</td>
              <td>3452</td>
              <td>sghcfg</td>
              <td>JNE</td>
              <td>shipped</td>
              <td>none</td>
              <td>12/07/2022</td>
            </tr>
             <tr>
              <td>19</td>
              <td>236872</td>
              <td>123468</td>
              <td>gaga</td>
              <td>1350553244</td>
              <td>3452</td>
              <td>sghcfg</td>
              <td>JNE</td>
              <td>shipped</td>
              <td>none</td>
              <td>12/07/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>            
</main>
</template>

<script>

</script>

<style>
@import '../../../assets/css/logistic.css';
</style>