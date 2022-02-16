
@extends('layouts.backend.authmaster')


@section('content')

<div class="row">
    <div class="col-xl-5"><img class="bg-img-cover bg-center" src="{{asset('/assets/images/login/3.jpg')}}" alt="looginpage"></div>
    <div class="col-xl-7 p-0">
      <div class="login-card">
        <form method="POST" class="theme-form login-form needs-validation" novalidate="" action="{{route('login')}}">
            @csrf
          <h4>Login</h4>
          <h6>Welcome back! Log in to your account.

             <!-- Session Status -->
        <div class="mt-4">
            <x-auth-session-status class="mb-4 text-danger" :status="session('status')" />

            <!-- Validation Errors -->
            <x-auth-validation-errors class="mb-4 text-danger" :errors="$errors" />
        </div>

          </h6>
          <div class="form-group">
            <label>Email Address</label>
            <div class="input-group"><span class="input-group-text"><i class="icon-email"></i></span>
              <input class="form-control" type="email" name="email" required="" placeholder="Test@gmail.com">
              <div class="invalid-tooltip">Please enter proper email.</div>
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
              <input class="form-control" type="password" name="password" required="" placeholder="*********">
              <div class="invalid-tooltip">Please enter password.</div>
              <div class="show-hide"><span class="show">                         </span></div>
            </div>
          </div>
          <div class="form-group">
            <div class="checkbox">
              <input id="checkbox1" type="checkbox">
              <label class="text-muted" for="checkbox1">Remember password</label>
            </div><a class="link" href="forget-password.html">Forgot password?</a>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">Sign in</button>
          </div>
          <div class="login-social-title">
            <h5>Sign in with</h5>
          </div>
          <div class="form-group">
            <ul class="login-social">
              <li><a href="https://www.linkedin.com/login" target="_blank"><i data-feather="linkedin"></i></a></li>
              <li><a href="https://twitter.com" target="_blank"><i data-feather="twitter"></i></a></li>
              <li><a href="https://www.facebook.com" target="_blank"><i data-feather="facebook"></i></a></li>
              <li><a href="https://www.instagram.com/login" target="_blank"><i data-feather="instagram">                  </i></a></li>
            </ul>
          </div>
          <p>Don't have account?<a class="ms-2" href="sign-up.html">Create Account</a></p>
        </form>
      </div>
    </div>
  </div>
@endsection
