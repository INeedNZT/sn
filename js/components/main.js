/* Vue和Router启动 */
define(["vue", "vueRouter", "vueAwesomeSwiper", "routerConfig"], function(
  Vue,
  VueRouter,
  VueAwesomeSwiper,
  routerConfig
) {
  Vue.use(VueAwesomeSwiper);
  Vue.use(VueRouter);
  var app = new Vue({ el: "#app", router: routerConfig.router });
  return app;
});
