/* requirejs入口文件，配置requirejs加载Vue启动文件 */
requirejs.config({
  paths: {
    jquery: "../vendor/jquery/jquery",
    BMap:"http://api.map.baidu.com/api?v=2.0&ak=8BB7F0E5C9C77BD6B9B655DB928B74B6E2D838FD",
    vue: "../vendor/vue/vue.min",
    vueAwesomeSwiper: "../vendor/vue/vue.awesome.swiper",
    vueRouter: "../vendor/vue/vue.router",
    json: "../vendor/requirejs/json",
    text: "../vendor/requirejs/text",
    async: "../vendor/requirejs/async",
    noext: "../vendor/requirejs/noext",
    image: "../vendor/requirejs/image",
    routerConfig: "./router.config",
    components: "./components"
  },
  shim: {
    BMap: {
      deps: ["jquery"],
      exports: "BMap"
    },
    vueAwesomeSwiper: {
      deps: [],
      exports: "vueAwesomeSwiper"
    }
  }
});



require(["image!image/second.jpg","image!image/banner_1.jpg","image!image/banner_2.jpg","image!image/shanghai.jpg"], function() {
  requirejs(["components/main"], function() {
    console.info("app start!");
  });
});
