import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronLeft, faChevronRight, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft, faChevronRight, faPencil, faPlus)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')