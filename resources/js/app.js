require('./bootstrap');

require('alpinejs');
import Swal from 'sweetalert2'
window.Swal = Swal;
import { createApp } from 'vue';
import router from './router'
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

app.use(router).mount('#app');
