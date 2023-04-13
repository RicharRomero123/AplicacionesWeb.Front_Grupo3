import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import primeVueDigitalVersion from "@/components/PrimeVueDigitalVersion.vue";

const app = createApp(App);

app.use(PrimeVue);

app.component('pv-button',Button)
app.component('pv-inputmask',InputMask)
app.component('pv-inputtext',InputText)
app.component('pv-dropdown',Dropdown)
app.component('pv-calendar',Calendar)
app.component('pv-inputnumber',InputNumber)
app.component('pv-texttarea',Textarea)
app.component('pv-checkbox',Checkbox)
app.component('pv-radiobutton',RadioButton)

app.use(PrimeVue)

app.use(createPinia())
app.use(router)

app.mount('#app')
