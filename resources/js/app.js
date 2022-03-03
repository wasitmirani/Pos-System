require('./bootstrap');

require('alpinejs');
import Swal from 'sweetalert2'
window.Swal = Swal;
import { createApp } from 'vue';
import router from './router'
import LaravelVuePagination from 'laravel-vue-pagination';
import AvatarComponent from "./components/backend/components/AvatarComponent";

const app =createApp({
    filters: {
        productLimit: function (value) {
            if (value) {
                if (value.length > 0) {
                   return value.slice(0, 35) + "...";
                }
                else {
                return 'N/A';
            }
         }
        }
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


app.component("Pagination", LaravelVuePagination);
app.component("avatar-component", AvatarComponent);
app.use(router).mount('#app');
