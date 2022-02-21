<template>
   <div>
      <div class="row">
         <div class="col-sm-12">
            <div class="page-title-box">
               <div class="float-end">
                  <ol class="breadcrumb">
                     <li class="breadcrumb-item">

                      <router-link class="home-item"  to="/home/dashboard"  >
                        Dashboard
                  </router-link>


                     </li>
                     <!--end nav-item-->
                        <li class="breadcrumb-item" v-for="item in items" :key="item.id"  v-show="items">
                          <router-link :to="item.link">{{item.name}}</router-link>
                        </li>

                     <!--end nav-item-->
                     <li class="breadcrumb-item active">{{active_name}}</li>
                  </ol>
               </div>
               <h4 class="page-title">{{active_name}}</h4>
            </div>
            <!--end page-title-box-->
         </div>
         <!--end col-->
      </div>
   </div>
</template>
<script>
   export default {
       props: {
           items: {
               type: Array,
               default: () => []
           },
           active_name: {
              type: String,
              required: true,
           }
       },
    }
</script>
