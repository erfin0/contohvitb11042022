<template>
   <form>
  <h3>Register</h3>  
    <div class="row">
    <div class="col">
        <label for="first name">First name</label>
        <input type="text" class="form-control" aria-label="First name">
    </div>
    <div class="col">
        <label for="last name">Last name</label>
        <input type="text" class="form-control" aria-label="Last name">
    </div>
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<style>
 form{
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
 }
</style>