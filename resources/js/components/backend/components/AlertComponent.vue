<template>
  <div>
    <div class="alert custom-alert custom-alert-warning  icon-custom-alert shadow-sm fade show" role="alert">
                                    <i class="la la-skull-crossbones alert-icon text-warning  align-self-center font-30 me-3"></i>
                                    <div class="alert-text my-1">
                                        <h5 class="mb-1 fw-bold mt-0">{{title}}</h5>
                                        <span>{{message}}</span>
                                    </div>
                                    <div class="alert-close">
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
     </div>
  </div>
</template>

<script>
export default {
props:['title','message'],
}

</script>

<style>

</style>
