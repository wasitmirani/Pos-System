require('./bootstrap');

require('alpinejs');
import Swal from 'sweetalert2'
window.Swal = Swal;
import { createApp } from 'vue';
import router from './router'
import LaravelVuePagination from 'laravel-vue-pagination';
import AvatarComponent from "./components/backend/components/AvatarComponent";

const app =createApp({
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
