import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

export { default as JsonViewer } from './components/JsonViewer/index.vue';
export { default as Spinner } from './components/Spinner.vue';
