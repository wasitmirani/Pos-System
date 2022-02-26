<template>
  <div>
     <div class="input-group">
            <input type="text"  v-on:keyup="searchQuery" name="example-input1-group2" class="form-control form-control-sm" v-model="query" :placeholder="placeholder">
            <button type="button" class="btn btn-primary btn-sm" @click="searchQuery"><i class="fas fa-search"></i></button>
     </div>
  </div>
</template>

<script>
export default {
props:['placeholder','apiurl','query_input'],
emits:['loading','filterdata','query'],
data() {
    return {
        query: '',
    };
},
computed:{
    // query(){
    //     if(this.query.length<1){
    //         return this.query_input;
    //     }

    // }
},
 methods: {
    //asyncdata
    searchQuery: _.debounce(
      function () {
        this.$emit("loading", true);
        setTimeout(() => {
            this.search();
        }, 700);
      },
      500 // 500 milliseconds
    ),
   async search() {
      if (this.query.length > 2) {
       await axios.get(this.apiurl + "&query=" + this.query).then((response) => {

            this.$emit("filterdata", response.data);
            this.$emit("query", this.query);
             this.$emit("loading", false);
          });
      } else {
        this.query = "";
        this.$emit("query", this.query);

        this.$emit("reload");
      }
    },
  },
  watch: {
    query() {
      if (this.query == "") {
        this.query = "";
        this.$emit("query", this.query);

        this.$emit("reload");
      }
    },
  }
}
</script>

<style>

</style>
