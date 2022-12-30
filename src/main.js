import { createApp } from "vue"
import App from "./App.vue"

const applicationObject = createApp(App)
applicationObject.config.devtools = true
applicationObject.mount("#app")
