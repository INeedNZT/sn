/* Vue初始化文件 */

define(['vue', 'vueRouter', 'routerConfig'], function(Vue, VueRouter, routerConfig) {
    Vue.use(VueRouter);
    var app = new Vue({ router: routerConfig.router }).$mount('#app')
});