import DefaultTheme from 'vitepress/theme';
import DemoJsonViewerObject from './DemoJsonViewerObject.vue';
import DemoJsonViewerString from './DemoJsonViewerString.vue';
import DemoJsonViewerArray from './DemoJsonViewerArray.vue';
import DemoSpinner from './DemoSpinner.vue';

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('DemoJsonViewerObject', DemoJsonViewerObject);
		app.component('DemoJsonViewerString', DemoJsonViewerString);
		app.component('DemoJsonViewerArray', DemoJsonViewerArray);
		app.component('DemoSpinner', DemoSpinner);
	},
};
