<template>
   <div>
         <div class="row">
       <form v-on:submit.prevent="onSubmit">
      <div class="row">
    <div class="col-8">
        <div class="form-group">
         <label for="exampleInputEmail1">Product Name</label>
         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" v-model="product.name" required>
        </div>
    </div>
     <div class="col-4">
        <div class="form-group">
         <label for="exampleInputEmail1">Product Price</label>
         <input type="number" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Price" v-model="product.price" required>
        </div>
    </div>
    </div>
     <div class="row">
     <div class="col-4">
      <div class="form-group">

                                            <label class="mb-3">Default Select</label>
                                            <select id="default">
                                                <option value="value-1">Value 1</option>
                                                <option value="value-2">Value 2</option>
                                                <option value="value-3">Value 3</option>
                                            </select>

      </div>
    </div>
    <div class="col-8">
      <div class="form-group">
         <label for="exampleInputEmail1">Product Description</label>
         <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows="2" placeholder="Enter Product Description" v-model="product.description"></textarea>
      </div>
    </div>
        <div class="col-6">
      <div class="form-group">
            <div class="d-grid">

                <div class="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>
                <input type="file" id="input-file" name="input-file" accept="image/*" onchange={handleChange()} hidden />
                <label class="btn-upload btn btn-primary mt-4" for="input-file">Upload Image</label>
             </div>
      </div>
      </div>
     </div>
      <hr>
      <div class="float-right-buttons">
        <button type="button" class="btn btn-de-danger btn-sm"  style="margin-right: 10px;" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary btn-sm" v-if="!edit_mode">Submit</button>
      <button type="submit" class="ml-2 btn btn-success btn-sm" v-else>Update</button>
      </div>

       </form>
            </div>
   </div>
</template>
<script>
   export default {

       props:['edit_mode','editForm'],
       emits: ['created','updated'],

       data(){
           return{
               product:{},
               errors:[],
           }
       },
       watch: {
    editForm(collection) {
      if (collection == null) {
       this.product={};
       return true;
      }
      if (collection) {
        this.errors = [];
        this.product = collection;
      }
      else {
          this.product ={};
      }
    //   } else {
    //     this.rest_form();
    //   }
    }
    },
       methods:{
           toastAlert(icon,title) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              })

              Toast.fire({
                icon: icon,
                title: title,
              })
        },
           onSubmit(){
               let data = this.product;
                // this.$emit('created')
               if(this.edit_mode){
                   this.updateItem(data);
                }else {
                   this.createItem(data);
                }
           },
           createItem(data){
                 axios.post("/product",data).then((res)=>{
                    //   console.log(re);
                      this.$emit('created');
                      this.product = {};
                      return res.data;
                  }).catch((err)=>{
                        this.errors = err.response.data.errors;

                  });
           },
           updateItem(data){
              const url="/product/"+this.product.id;
              axios.put(url,data).then((res)=>{
                      this.$emit('updated');
                    this.toastAlert('success',"Category Updated Successfully");

                  }).catch((err)=>{
                        this.errors = err.response.data.errors;

                  });
           }
       }
   }
</script>
<style>
.float-right-buttons{
float: right;
}
</style>
