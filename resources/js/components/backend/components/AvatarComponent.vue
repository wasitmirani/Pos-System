<template>

      <span :class="'thumb-md  justify-content-center d-flex align-items-center '+ getRandomColors() + ' rounded-circle me-2'">{{name.substr(0, 2)}}</span>

</template>

<script>
export default {
props:['name'],
methods: {
    getRandomColors(){
        let x = Math.floor((Math.random() * 5) + 1);
        switch (x) {
            case 1:
            return "bg-soft-success";
            break;

            case 2:
            return "bg-soft-pink";
            break;

            case 3:
            return "bg-soft-purple";
            break;

            case 4:
            return "bg-soft-warning";
            break;

            case 5:
            return "bg-soft-info";
            break;

            default:
                return "bg-soft-success";
             break;
        }
    }
},
}
</script>

<style>

</style>
