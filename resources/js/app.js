require('./bootstrap');

require('alpinejs');

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
        function hideDropdowns(dropdown) {
            var currentMenu = dropdown.querySelector('.dropdown-menu');
            var nestedMenus = currentMenu.querySelectorAll('.dropdown-menu');
            if (nestedMenus) {
              [].forEach.call(nestedMenus, function(menu) {
                menu.classList.remove('show');
              });
            }
          }
          [].forEach.call(dropdowns, function(dropdown) {
            var toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
            if (toggle) {
              toggle.addEventListener(events[0], function(e) {
                toggleDropdown(e, dropdown);
              });
            }else{
                hideDropdowns(dropdown);
            }
          });
    }
});

app.use(router).mount('#app');
