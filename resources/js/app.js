require('./bootstrap');

require('alpinejs');
import Swal from 'sweetalert2'
import moment from "moment";
window.Swal = Swal;
window.moment=moment;
import { createApp } from 'vue';
import router from './router'
import LaravelVuePagination from 'laravel-vue-pagination';
import AvatarComponent from "./components/backend/components/AvatarComponent";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";

const app =createApp({
    setup() {
        // Get toast interface
        const toast = useToast();

        // Use it!
        toast("I'm a toast!");

        // or with options
        toast.success("My toast content", {
          timeout: 2000
        });
        // These options will override the options defined in the "app.use" plugin registration for this specific toast

        // Make it available inside methods
        return { toast }
      },
    methods:{
        alertNotify(){
            this.toast.success("New item has been added successfully", {
                timeout: 2000
            });
        },
    },
    mounted(){

        try {
            document.getElementById('togglemenu').addEventListener("click", function (event) {
                event.preventDefault();
                document.body.classList.toggle('enlarge-menu')
            });
        } catch (err) {}

    }
});

// const options={
//     // You can set your default options here
// };
app.use(Toast,{
    transition: "Vue-Toastification__fade",
    maxToasts: 19,
    newestOnTop: true,
    pauseOnHover: false,
  });
app.component("Pagination", LaravelVuePagination);
app.component("avatar-component", AvatarComponent);
app.use(router).mount('#app');
