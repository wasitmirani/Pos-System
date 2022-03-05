

<div class="menu-content h-100" data-simplebar="">
    @php
    $sidebar=sideBarMenu();
    @endphp
    <div class="menu-body navbar-vertical">
        <div class="collapse navbar-collapse tab-content" id="sidebarCollapse">
            <!-- Navigation -->
            <ul class="navbar-nav tab-pane active" id="Main" role="tabpanel">
                @foreach ($sidebar as $menu)
                @if(!empty($menu['heading']))
                <li class="menu-label mt-0 text-primary font-12 fw-semibold">{{$menu['heading']}}<span></span><br>
                <span class="font-10 text-secondary fw-normal">{{$menu['subheading']}} </span></li>
                @endif
                @if(!empty($menu['menu']))
                {{-- @if(isset($menu['menu']['can'])) v-can="'{{$menu['menu']['can']}}'" @endif --}}
                <li class="nav-item">
                    <a class="nav-link" href="#sidebar{{str_replace(' ', '',$menu['menu']['title'])}}" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebar{{str_replace(' ', '',$menu['menu']['title'])}}">
                        <i data-feather="{{$menu['menu']['icon']}}"></i>
                        <span style="margin-left: 15px;"> {{$menu['menu']['title']}}</span>
                    </a>
                    <div class="collapse " id="sidebar{{str_replace(' ', '',$menu['menu']['title'])}}">
                        <ul class="nav flex-column">
                            @foreach ($menu['menu']['sub_menu'] as $item)
                            {{-- @if(isset($item['v-can'])) v-can="'{{$item['v-can']}}'" @endif --}}
                            <li class="nav-item">
                                <router-link class="nav-link" to="{{$item['v-route']}}"  >{{$item['title']}}</router-link>
                            </li><!--end nav-item-->
                           @endforeach
                        </ul><!--end nav-->
                    </div><!--end sidebarAnalytics-->
                </li>
                <!--end nav-item-->
                @endif
                @if(!empty($menu['single_link']))
                <li class="nav-item">
                    <router-link  class="nav-link" to="{{$menu['single_link']['v-route']}}">
                        <i data-feather="{{$menu['single_link']['icon']}}"></i>
                        <span style="margin-left: 15px;">{{$menu['single_link']['title']}}</span>
                    </a>
                </li>
            @endif
            @endforeach

            <li class="nav-item">
                <a  class="nav-link"  href="{{ route('logout') }}"
                onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">
                    <i data-feather="log-out"></i>
                    <span style="margin-left: 15px;">Log out</span>
                </a>
            </li>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
            </ul><!--end navbar-nav--->
        </div><!--end sidebarCollapse-->
    </div>
</div>
