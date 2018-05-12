/* Vue和Router启动 */
define(["vue", "vueRouter", "routerConfig"], function(
  Vue,
  VueRouter,
  routerConfig 
) {
  Vue.use(VueRouter);
  var app = new Vue({ el: "#app", router: routerConfig.router });
  return app;
});
