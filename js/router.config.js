define(['vueRouter'], function(VueRouter) {
    /* 通过requirejs异步获取资源文件，返回component组件对象 */
    function requireDataAsync(resolve, html, js) {
        return require([html, js], function(text, data) {
            resolve({ template: text, data: data });
        });
    }

    /* 异步懒加载返回promise.resolve对象 */
    var APP = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/app.html', 'components/app');
    }

    var ABOUT = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/about.html', 'components/about');
    }

    var CONTACT = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/contact.html', 'components/contact');
    }

    var HOME = function(resolve) {
      return require(["text!../view/home.html", "components/home"], function(text, data) {
        var beforeRouteLeave = function(to, from, next) {
          this.$parent._data.isSubTitle = true;
          next();
        };
        resolve({
          template: text,
          data: data,
          beforeRouteLeave: beforeRouteLeave
        });
      });
    };

    var routes = [
        {
            path:'/',
            redirect: '/app/home'
        },
        {
            path: '/app',
            component: function(resolve) { APP(resolve) },
            children: [
                { path: '', component: function(resolve) { HOME(resolve) } },
                { path: 'home', component: function(resolve) { HOME(resolve) } },
                { path: 'about', component: function(resolve) { ABOUT(resolve) } },
                { path: 'contact', component: function(resolve) { CONTACT(resolve) } }
            ]
        } 
    ]

    var router = new VueRouter({
        routes: routes
    });

    return { router: router }

});