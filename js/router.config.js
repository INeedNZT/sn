define(['vueRouter'], function(VueRouter) {
    /* 通过requirejs异步获取资源文件，返回component组件对象 */
    function requireDataAsync(html, js, resolve) {
        return require([html, js], function(text, data) {
            resolve({ template: text, data: data });
        });
    }

    /* 异步懒加载返回promise.resolve对象 */
    var ABOUT = function(resolve) {
        return Promise.resolve({ template: '<div>a2222ad</div>' })
    }

    var HOME = function(resolve) {
        return requireDataAsync('text!../view/home.html', 'components/home', resolve);
    }


    var routes = [
        { path: '/home', component: function(resolve) { HOME(resolve) } },
        { path: '/about', component: function(resolve) { ABOUT(resolve) } }
    ]

    var router = new VueRouter({
        routes: routes
    });


    return { router: router }

});