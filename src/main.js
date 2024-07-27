import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import InputNumber from 'primevue/inputnumber';
import Aura from '@primevue/themes/aura';
import IconField from 'primevue/iconfield';
import InputText from 'primevue/inputtext';





createApp(App)
    .use(PrimeVue,{
        theme:{
            preset:Aura
        }
    })
    .component('pv-button',Button)
    .component('pv-inputNumber',InputNumber)
    .component('pv-inputField',IconField)
    .component('pv-inputText',InputText)
    .mount('#app')


