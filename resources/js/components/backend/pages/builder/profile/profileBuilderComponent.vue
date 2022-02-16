<template>
<div>
          <breadcrumb active_name="Profile Builder"></breadcrumb>
           <div class="container-fluid">
            <div class="row">
              <div class="col-xl-7 col-md-12 box-col-12">
                <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)">file filter</a>
                  <div class="md-sidebar-aside job-left-aside custom-scrollbar">
                    <div class="file-sidebar">
                      <div class="card">
                        <div class="card-body">
                          <!-- <ul>
                            <li>
                              <div class="btn btn-primary"><i data-feather="home">                                    </i>Home </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><i data-feather="folder"></i>All    </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><i data-feather="clock"></i>Recent    </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><i data-feather="star"></i>Starred      </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><i data-feather="alert-circle"></i>Recovery        </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><i data-feather="trash-2"></i>Deleted </div>
                            </li>
                          </ul> -->
                          <!-- <hr> -->
                          <!-- <ul>
                            <li>
                              <div class="btn btn-outline-primary"><i data-feather="database">   </i>Storage   </div>
                              <div class="m-t-15">
                                <div class="progress sm-progress-bar mb-1">
                                  <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>25 GB of 100 GB used</h6>
                              </div>
                            </li>
                          </ul> -->
                          <!-- <hr> -->
                          <ul>
                            <!-- <li>
                              <div class="btn btn-outline-primary"><i data-feather="grid">   </i>Pricing plan</div>
                            </li> -->
                            <li>
                              <div class="pricing-plan">
                                <h6>Trial Version </h6>
                                <h5>FREE</h5>
                                <p> 100 GB Space</p>
                                <div class="btn btn-outline-primary btn-xs">Selected</div><img class="bg-img" src="assets/images/dashboard/folder.png" alt="">
                              </div>
                            </li>
                            <li>
                              <div class="pricing-plan">
                                <h6>Premium</h6>
                                <h5>$5/month</h5>
                                <p> 200 GB Space</p>
                                <div class="btn btn-outline-primary btn-xs">Contact Us</div><img class="bg-img" src="assets/images/dashboard/folder1.png" alt="">
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-md-12 box-col-12">

                <div class="card">
                    <div class="iphone-x">
                        <i>Speaker</i>
                        <b>Camera</b>
                        <s>10:24</s>

                        <span>Left action button</span>
                        <span>Right action button</span>
                    </div>

                </div>
              </div>
            </div>
            </div>
            </div>
</template>

<script>
import breadcrumb from '../../../components/breadcrumbComponent.vue';
export default {
    components:{breadcrumb},
        mounted(){
            console.log('profile builder component mounted.');
        }
}
</script>

<style>

</style>
