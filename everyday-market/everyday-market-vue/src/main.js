import Vue from 'vue';
import App from './App.vue';

import './styles.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

// https://vuejs.org/v2/guide/components-registration.html

// can split files using src tag

// JSX, decorators: vue-class-component / vue-property-decorator

// data binding - mention modifiers
// reactive - mention computed props and watches

// http and plugins - vue-resource / https://vuejs.org/v2/guide/plugins.html / https://vuejs.org/v2/api/#provide-inject
// https://stackoverflow.com/questions/38498427/vue-js-define-a-service
// https://www.thepolyglotdeveloper.com/2017/10/consume-api-data-http-vuejs-web-application/
// For each injected property, inject would traverse the parent chain until first provider is reached. Plus, it is not reactive
// provide/inject - https://alligator.io/vuejs/component-communication / https://alligator.io/vuejs/custom-component-renderers/

// provide/inject - also part of component interaction?

// props (default, validation, etc) - https://vuejs.org/v2/guide/components-props.html

// functional components -
// https://itnext.io/whats-the-deal-with-functional-components-in-vue-js-513a31eb72b0
// https://vuejs.org/v2/guide/render-function.html#Functional-Components