<template>
    <div class="dataTable-info"> Showing {{table.current_page}} to {{table.per_page}} of {{table.total}} entries</div>
</template>

<script>
export default {
props:['table']
}
</script>

<style>

</style>
