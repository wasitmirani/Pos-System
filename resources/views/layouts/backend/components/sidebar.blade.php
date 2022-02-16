@php
$sidebar=sideBarMenu();

@endphp




          <div class="sidebar-wrapper">
            <div>
              <div class="logo-wrapper"><a href="index.html"><img class="img-fluid for-light" src="../assets/images/logo/small-logo.png" alt=""><img class="img-fluid for-dark" src="../assets/images/logo/small-white-logo.png" alt=""></a>
                <div class="back-btn"><i class="fa fa-angle-left"></i></div>
              </div>
              <div class="logo-icon-wrapper"><a href="index.html"><img class="img-fluid" src="../assets/images/logo-icon.png" alt=""></a></div>
              <nav class="sidebar-main">
                <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
                <div id="sidebar-menu">
                  <ul class="sidebar-links" id="simple-bar">
                    <li class="back-btn"><a href="index.html"><img class="img-fluid" src="../assets/images/logo-icon.png" alt=""></a>
                        <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true">        </i></div>
                      </li>
                    @foreach ($sidebar as $menu)
                    {{-- @if(!empty($menu['heading']))
                    <li class="menu-title" data-key="t-menu">{{$menu['heading']}}</li>
                    @endif --}}

                    @if(!empty($menu['menu']))


{{-- @if(isset($menu['menu']['can'])) v-can="'{{$menu['menu']['can']}}'" @endif --}}
                    <li class="sidebar-list" >
                        <a class="sidebar-link sidebar-title" href="#">
                            <i data-feather="{{$menu['menu']['icon']}}"></i>
                            <span >{{$menu['menu']['title']}}</span>
                        </a>
                        <ul class="sidebar-submenu">
                        @foreach ($menu['menu']['sub_menu'] as $item)
                        {{-- @if(isset($item['v-can'])) v-can="'{{$item['v-can']}}'" @endif --}}
                          <li   >
                            {{-- <a href="ecommerce-products.html" key="t-products">Products</a> --}}
                            <router-link to="{{$item['v-route']}}"  >{{$item['title']}}

                            </router-link>
                        </li>
                        @endforeach



                      </ul>
                    </li>

                  @endif
                  @if(!empty($menu['single_link']))

                  <li class="sidebar-list">
                    <router-link  class="sidebar-link sidebar-title link-nav"  to="{{$menu['single_link']['v-route']}}">
                        <i data-feather="{{$menu['single_link']['icon']}}"></i>
                        {{-- <span class="badge rounded-pill bg-soft-warning text-warning float-end">9+</span> --}}
                        <span >{{$menu['single_link']['title']}}</span>
                    </router-link>
                   {{-- <a class="sidebar-link sidebar-title link-nav" href="kanban.html">
                    <span>Kanban Board</span></a> --}}
                  </li>
                  @endif

                  @endforeach

                  </ul>
                  <div class="sidebar-img-section" >
                    <div class="sidebar-img-content"><img class="img-fluid" src="../assets/images/side-bar.png" alt="">
                      <h4>Need Help ?</h4>
                      <a class="txt" href="http://pixeliconic.com">Raise ticket at "www.pixeliconic.com"</a>

                      <a class="btn btn-secondary" href="tel:+923028864119">Call Now</a>
                    </div>
                  </div>
                </div>
                <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
              </nav>
            </div>
          </div>
