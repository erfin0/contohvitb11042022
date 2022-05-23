<template>
<div class="row top">
  <div class="col">
    <div class="page-title-box">
      <div class="page-title-right"></div>
      <h4 class="page-title">Checkout</h4>
    </div>
  </div>
</div>
<div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-8">
            <div class="tab-content">
              <div role="tabpanel" id="react-aria9399651908-6-tabpane-1" aria-labelledby="react-aria9399651908-6-tab-1" class="fade tab-pane active show">
                <div class="row">
                  <div class="col">
                  <h4 class="mt-2">Billing information</h4>
                  <p class="text-muted mb-4">Fill the form below in order to send you the order's invoice.</p>
                  <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">First Name</label>
                          <input placeholder="Enter your first name" type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input placeholder="Enter your last name" type="text" class="form-control">
                      </div>
                    </div>
                  </div> 
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Email address</label>
                          <input placeholder="Enter your email" type="email" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-3">
                        <label class="form-label">Phone</label>
                          <input placeholder="(xxx) xxxx-xxxx" class="form-control" value="">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Address</label>
                        <input placeholder="Enter your state" type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Town / City</label>
                        <input placeholder="Enter your city name" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">State</label>
                        <input placeholder="Enter your state" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Zip / Postal Code</label>
                        <input placeholder="Enter your zip code" type="text" class="form-control">
                    </div>
                  </div>
                </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group mb-3">
                    <label class="form-label">Country</label>
                      <input placeholder="Enter your country" type="text" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Order Notes:</label>
                      <textarea placeholder="Write some note.." name="billing_notes" rows="3" type="textarea" class="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <a class="btn text-muted d-none d-sm-inline-block btn-link fw-semibold" href="/shop">
                  <i class="mdi mdi-arrow-left"></i> Back to Shop </a>
                </div>
                <div class="text-sm-end col-sm-6"><button type="submit" class="btn btn-danger">
                  <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <form class="mt-4 box">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label class="form-label">Card Number</label>
              <input placeholder="e.g. 4242 4242 4242 4242" name="card-number" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">Name on Card</label>
              <input placeholder="Enter your name" name="name" type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-3">
              <label class="form-label">Expiry date</label>
              <input placeholder="MM/YY" class="form-control" value="">
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-3">
              <label class="form-label">CVV</label>
              <input placeholder="xxx" class="form-control" value=""></div>
            </div>
          </div>
      </form>
    </div>
    <div class="border p-3 mb-3 rounded">
      <div class="row">
        <div class="col-sm-8">
          <div class="form-check">
            <input type="radio" id="BillingOptRadio3" name="billingOptions" class="form-check-input">
              <label class="form-check-label font-16 fw-bold" for="BillingOptRadio3">Pay with Payoneer</label></div>
              <p class="mb-0 ps-3 pt-1">You will be redirected to Payoneer website to complete your purchase securely.</p>
          </div>
          <div class="text-sm-end mt-3 mt-sm-0 col-sm-4">
        </div>
      </div>
    </div>
    <div class="border p-3 mb-3 rounded">
      <div class="row">
        <div class="col-sm-8">
          <div class="form-check">
            <input type="radio" id="BillingOptRadio4" name="billingOptions" class="form-check-input">
              <label class="form-check-label font-16 fw-bold" for="BillingOptRadio4">Cash on Delivery</label></div>
                <p class="mb-0 ps-3 pt-1">Pay with cash when your order is delivered.</p>
            </div>
            <div class="text-sm-end mt-3 mt-sm-0 col-sm-4"> 
          </div>
        </div>
      </div>
      <div class="mt-4 row">
        <div class="col-sm-6">
          <a class="btn text-muted d-none d-sm-inline-block btn-link fw-semibold" href="/shop">
            <i class="mdi mdi-arrow-left"></i> Back to Shop </a></div>
              <div class="text-sm-end col-sm-6">
                <button type="submit" class="btn btn-danger">
                  <i class="mdi mdi-cash-multiple me-1"></i> Complete Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="border p-3 mt-4 mt-lg-0 rounded">
      <h4 class="header-title mb-3">Order Summary</h4>
        <div class="table-responsive">
          <table class="table table-centered mb-0">
            <tbody>
              <tr>
                <td>
                  <p class="m-0 d-inline-block align-middle">
                    <a class="text-body fw-semibold">Amazing Modern Chair</a>
                    <br>
                    <small>5 x $148.66</small>
                  </p>
                </td>
                <td class="text-end">$743.30</td>
              </tr>
              <tr>
                <td>
                  <p class="m-0 d-inline-block align-middle">
                    <a class="text-body fw-semibold">Biblio Plastic Armchair</a>
                    <br>
                    <small>2 x $99.00</small>
                  </p>
                </td>
                <td class="text-end">$198.00</td>
              </tr>
              <tr>
                <td>
                  <p class="m-0 d-inline-block align-middle">
                    <a class="text-body fw-semibold">Designer Awesome Chair</a>
                    <br>
                    <small>3 x $49.99</small></p>
                </td>
                <td class="text-end">$499.90</td>
              </tr>
              <tr class="text-end">
                <td>
                  <h6 class="m-0">Sub Total:</h6>
                </td>
                <td class="text-end">$1071.29</td>
              </tr>
              <tr class="text-end">
                <td>
                  <h6 class="m-0">Shipping:</h6>
                </td>
                <td class="text-end">FREE</td>
              </tr>
              <tr class="text-end">
                <td>
                  <h5 class="m-0">Total:</h5>
                </td>
                <td class="text-end fw-semibold">$1071.29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
 </div>

                              
</template>

<style>
@import '../../../assets/css/checkoutUss.css';
</style>