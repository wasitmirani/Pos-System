
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="pixelstrap">
    <link rel="icon" href="../assets/images/logo/favicon-icon-1.png" type="image/x-icon">
    <link rel="shortcut icon" href="../assets/images/logo/favicon-icon-1.png" type="image/x-icon">
    <title>{{config('app.name')}} dashboard </title>
    <!-- Google font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="css2-2.css?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link href="css2-3.css?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/font-awesome-1.css')}}">
    <!-- ico-font-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/icofont-1.css')}}">
    <!-- Themify icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/themify-1.css')}}">
    <!-- Flag icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/flag-icon-1.css')}}">
    <!-- Feather icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/feather-icon-1.css')}}">
    <!-- Plugins css start-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/scrollbar-1.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/animate-1.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/date-picker-1.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/photoswipe-1.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/iphone.css')}}">
    <!-- Plugins css Ends-->
    <!-- Bootstrap css-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendors/bootstrap-1.css')}}">
    <!-- App css-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/style-1.css')}}">
    <link id="color" rel="stylesheet" href="{{asset('assets/css/color-1-1.css')}}" media="screen">
    <!-- Responsive css-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/responsive-1.css')}}">
  </head>
  <body>
    <!-- Loader starts-->
    {{-- <div class="loader-wrapper">
      <div class="loader">
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-ball"></div>
      </div>
    </div> --}}
    <!-- Loader ends-->
    <!-- tap on top starts-->
    <div class="tap-top"><i data-feather="chevrons-up"></i></div>
    <!-- tap on tap ends-->
    <div id="app">


    <!-- page-wrapper Start-->
    <div class="page-wrapper compact-wrapper" id="pageWrapper">
      <!-- Page Header Start-->
        @include('layouts.backend.components.header')
      <!-- Page Header Ends                              -->
      <!-- Page Body Start-->
      <div class="page-body-wrapper">
        <!-- Page Sidebar Start-->
        @include('layouts.backend.components.sidebar')
         <!-- Page Sidebar Start-->

          <!-- Page Sidebar Ends-->
        <!-- Page Sidebar Ends-->
        <div class="page-body">
            @yield('content')
          <!-- Container-fluid Ends-->
        </div>
        <!-- footer start-->
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 footer-copyright text-center">
                <p class="mb-0">Copyright 2022 © {{config('app.name')}} theme by {{config('app.name')}}  </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
    <!-- latest jquery-->
    <script src="{{asset('assets/js/jquery-3.5.1.min-1.js')}}"></script>
    <!-- Bootstrap js-->
    <script src="{{asset('assets/js/bootstrap/bootstrap.bundle.min-1.js')}}"></script>
    <!-- feather icon js-->

    <script src="{{asset('assets/js/icons/feather-icon/feather.min-1.js')}}"></script>
    <script src="{{asset('assets/js/icons/feather-icon/feather-icon-1.js')}}"></script>
    <!-- scrollbar js-->
    <script src="{{asset('assets/js/scrollbar/simplebar-1.js')}}"></script>
    <script src="{{asset('assets/js/scrollbar/custom-1.js')}}"></script>
    <!-- Sidebar jquery-->
    <script src="{{asset('assets/js/config-1.js')}}"></script>
    <script>
        @auth
            window.user = '{!! json_encode(Auth::user(), true) !!}';
        @else
            window.user = [];
            window.permissions = [];
        @endauth
        @if(session('login')=="true" || session('login')==true)
        // setTimeout(function() {
        // toastr['success'](
        // 'You have successfully logged in to {{config('app.name')}}.',
        // '👋 Welcome {{Auth::user()->name}}!', {
        //     closeButton: true,
        //      tapToDismiss: false
        // }
        // );
        // }, 1000);
        @php
        session(['login' => '']);
        @endphp
        @endif
     </script>
    <script src="{{ mix('js/app.js') }}" ></script>
    <!-- Plugins JS start-->
    <script src="{{asset('assets/js/sidebar-menu-1.js')}}"></script>
    <script src="{{asset('assets/js/chart/knob/knob.min-1.js')}}"></script>
    <script src="{{asset('assets/js/chart/knob/knob-chart-1.js')}}"></script>
    <script src="{{asset('assets/js/chart/apex-chart/apex-chart-1.js')}}"></script>
    <script src="{{asset('assets/js/chart/apex-chart/stock-prices-1.js')}}"></script>
    <script src="{{asset('assets/js/notify/bootstrap-notify.min-1.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/default-1.js')}}"></script>
    <script src="{{asset('assets/js/notify/index-1.js')}}"></script>
    <script src="{{asset('assets/js/datepicker/date-picker/datepicker-1.js')}}"></script>
    <script src="{{asset('assets/js/datepicker/date-picker/datepicker.en-1.js')}}"></script>
    <script src="{{asset('assets/js/datepicker/date-picker/datepicker.custom-1.js')}}"></script>
    <script src="{{asset('assets/js/photoswipe/photoswipe.min-1.js')}}"></script>
    <script src="{{asset('assets/js/photoswipe/photoswipe-ui-default.min-1.js')}}"></script>
    <script src="{{asset('assets/js/photoswipe/photoswipe-1.js')}}"></script>

    <script src="{{asset('assets/js/height-equal-1.js')}}"></script>
    <!-- Plugins JS Ends-->
    <!-- Theme js-->
    <script src="{{asset('assets/js/script-1.js')}}"></script>
    <script src="{{asset('assets/js/theme-customizer/customizer-1.js')}}"></script>

    <!-- login js-->
    <!-- Plugin used-->
  </body>
</html>
