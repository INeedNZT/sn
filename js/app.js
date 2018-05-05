/* app入口文件，配置requirejs */

requirejs.config({
    paths: {
        jquery: '../vendor/jquery/jquery',
        vue: '../vendor/vue/vue',
        vueRouter: '../vendor/vue/vue.router',
        text: '../vendor/requirejs/text',
        components: './components',
        routerConfig: './router.config'
    }
});


requirejs(['components/main'], function(app) {
    console.info('app start!');
});