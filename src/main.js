import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/sass/styles.scss';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmPopup from 'primevue/confirmpopup';

const app = createApp(App);
app.use(PrimeVue);
app.use(ConfirmationService)
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('ConfirmPopup', ConfirmPopup);
app.mount('#app');

