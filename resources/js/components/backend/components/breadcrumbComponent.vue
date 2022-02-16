<template>
   <div>
       <div class="container-fluid">
            <div class="page-title">
      <div class="row">
         <div class="col-12 col-sm-6">
            <h3>{{active_name}}</h3>
         </div>
         <div class="col-12 col-sm-6">
            <ol class="breadcrumb">
               <li class="breadcrumb-item">
                  <router-link class="home-item"  to="/home/dashboard"  >
                     <i class="fa fa-home"> Dashboard</i>
                  </router-link>
               </li>
               <li class="breadcrumb-item" v-for="item in items" :key="item.id"  v-show="items">
                  <router-link :to="item.link">{{item.name}}</router-link>
               </li>
               <li class="breadcrumb-item active">{{active_name}}</li>
            </ol>
         </div>
      </div>
   </div>
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

