
<!DOCTYPE html>
<html lang="en">
    <head>
                <meta charset="utf-8">
                <title>Unikit - Admin & Dashboard Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta content="Premium Multipurpose Admin & Dashboard Template" name="description">
                <meta content="" name="author">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">

                <!-- App favicon -->
                <link rel="shortcut icon" href="{{asset('assets/images/favicon-1.ico')}}">



         <!-- App css -->
         @if(request('theme') == 'dark')
         <link href="{{asset('assets/css/bootstrap-dark.min.css')}}" rel="stylesheet" type="text/css" />
         <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
         <link href="{{asset('assets/css/app-dark.min.css')}}" rel="stylesheet" type="text/css" />
         @else
         <link href="{{asset('assets/css/bootstrap.min-1.css')}}" rel="stylesheet" type="text/css">
         <link href="{{asset('assets/css/icons.min-1.css')}}" rel="stylesheet" type="text/css">
         <link href="{{asset('assets/css/app.min-1.css')}}" rel="stylesheet" type="text/css">
         @endif

    </head>

    <body id="body" class="dark-sidebar">
        <div id="app">


        <!-- leftbar-tab-menu -->
        <div class="left-sidebar">
            <!-- LOGO -->
            <div class="brand">
                <a href="index-1.html" class="logo">
                    <span>
                        <img src="{{asset('assets/images/logo-sm-1.png')}}" alt="logo-small" class="logo-sm">
                    </span>
                    <span>
                        <img src="{{asset('assets/images/logo-1.png')}}" alt="logo-large" class="logo-lg logo-light">
                        <img src="{{asset('assets/images/logo-dark-1.png')}}" alt="logo-large" class="logo-lg logo-dark">
                    </span>
                </a>
            </div>
            <div class="sidebar-user-pro media border-end">
                <div class="position-relative mx-auto">
                    <img src="{{asset('assets/images/users/user-4-1.jpg')}}" alt="user" class="rounded-circle thumb-md">
                    <span class="online-icon position-absolute end-0"><i class="mdi mdi-record text-success"></i></span>
                </div>
                <div class="media-body ms-2 user-detail align-self-center">
                    <h5 class="font-14 m-0 fw-bold">Mr. Michael Hill </h5>
                    <p class="opacity-50 mb-0">michael.hill@exemple.com</p>
                </div>
            </div>
            <div class="border-end">
                <ul class="nav nav-tabs menu-tab nav-justified" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#Main" role="tab" aria-selected="true">M<span>ain</span></a>
                    </li>
                    {{-- <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#Extra" role="tab" aria-selected="false">E<span>xtra</span></a>
                    </li> --}}
                </ul>
            </div>
            <!-- Tab panes -->

            <!--end logo-->
            @include('layouts.backend.components.sidebar')

        </div>
        <!-- end left-sidenav-->
        <!-- end leftbar-menu-->

        <!-- Top Bar Start -->
        <!-- Top Bar Start -->
        @include('layouts.backend.components.header')
        <!-- Top Bar End -->
        <!-- Top Bar End -->

        <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab">

                <div class="container-fluid">
                    @yield('content')
                </div>
                <!-- container -->

                <!--Start Rightbar-->
                <!--Start Rightbar/offcanvas-->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="Appearance" aria-labelledby="AppearanceLabel">
                    <div class="offcanvas-header border-bottom">
                      <h5 class="m-0 font-14" id="AppearanceLabel">Appearance</h5>
                      <button type="button" class="btn-close text-reset p-0 m-0 align-self-center" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <h6>Account Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch1">
                                <label class="form-check-label" for="settings-switch1">Auto updates</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch2" checked="">
                                <label class="form-check-label" for="settings-switch2">Location Permission</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch3">
                                <label class="form-check-label" for="settings-switch3">Show offline Contacts</label>
                            </div><!--end form-switch-->
                        </div><!--end /div-->
                        <h6>General Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch4">
                                <label class="form-check-label" for="settings-switch4">Show me Online</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch5" checked="">
                                <label class="form-check-label" for="settings-switch5">Status visible to all</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch6">
                                <label class="form-check-label" for="settings-switch6">Notifications Popup</label>
                            </div><!--end form-switch-->
                        </div><!--end /div-->
                    </div><!--end offcanvas-body-->
                </div>
                <!--end Rightbar/offcanvas-->
                 <!--end Rightbar-->

                <!--Start Footer-->
                <!-- Footer Start -->
                <footer class="footer text-center text-sm-start">
                    &copy; <script>
                        document.write(new Date().getFullYear())
                    </script> {{config('app.name')}} <span class="text-muted d-none d-sm-inline-block float-end">Crafted with <i class="mdi mdi-heart text-danger"></i> by {{config('app.name')}}</span>
                </footer>
                <!-- end Footer -->
                <!--end footer-->
            </div>
            <!-- end page content -->
        </div>
        <!-- end page-wrapper -->
    </div>

        <!-- Javascript  -->
        <script>
            window.primarycolor="#1e204f";
  // window.appname={!! json_encode(config('app.name'),true)!!};
       @auth
       window.user = {!! json_encode(Auth::user(), true) !!};
         window.permissions = {!! json_encode(Auth::user()->permissions->pluck('name'), true) !!};
         let roles_permissions = {!! json_encode(Auth::user()->getPermissionsViaRoles()->pluck('name'), true) !!};
         roles_permissions.map((item)=>{
            if(permissions.indexOf(item) === -1) {
              permissions.push(item);
            }
         });
       @else
           window.user = [];
           window.permissions = [];
       @endauth
       @if(session('login')=="true" || session('login')==true)
       setTimeout(function() {
       // toastr['success'](
       // 'You have successfully logged in to {{config('app.name')}}.',
       // '👋 Welcome {{Auth::user()->name}}!', {
       //     closeButton: true,
       //      tapToDismiss: false
       // }
       // );
       }, 1000);
       @php
       session(['login' => '']);
       @endphp
       @endif
  </script>
        <script src="{{asset('assets/plugins/apexcharts/apexcharts.min-1.js')}}"></script>
        <script src="{{asset('assets/pages/analytics-index.init-1.js')}}"></script>
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- App js -->
        <script src="{{asset('assets/js/app-1.js')}}"></script>

    </body>
    <!--end body-->
</html>
