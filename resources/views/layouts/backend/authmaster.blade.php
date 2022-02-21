
<!DOCTYPE html>
<html lang="en">

<head>
            <meta charset="utf-8" />
            <title>{{config('app.name')}} - Authication</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
            <meta content="" name="author" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />

            <!-- App favicon -->
            <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">



     <!-- App css -->
     <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
     <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
     <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" />

</head>

<body id="body" class="auth-page" style="background-image: url('{{asset('assets/images/p-1.png')}}'); background-size: cover; background-position: center center;">
   <!-- Log In page -->
    <div class="container-md">
        @yield('content')
  
        <!--end row-->
    </div><!--end container-->

    <!-- App js -->
    <script src="assets/js/app.js"></script>

</body>

</html>
