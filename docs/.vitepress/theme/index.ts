import DefaultTheme from 'vitepress/theme';
import DemoJsonViewer from './Demo.vue';
import DemoSpinner from './DemoSpinner.vue';

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('DemoJsonViewer', DemoJsonViewer);
		app.component('DemoSpinner', DemoSpinner);
	},
};
