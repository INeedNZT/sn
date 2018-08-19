define(['jquery','async!BMap'], function($) {
 
  return function() {
    function renderMap(){
      var place = "无锡双鸟科技股份有限公司";
      var map = new BMap.Map("allmap");
  
      var getDrivingPath = function(b, e) {
        var driving = new BMap.DrivingRoute(map, {
          renderOptions: { map: map, autoViewport: true }
        });
        driving.search(b, e);
      };
  
      var getCustomLocation = function() {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(
          function(r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
              var mk = new BMap.Marker(r.point, { icon: khIcon });
              map.addOverlay(mk);
              mk.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
              var _opts = { width: 50, height: 20, title: '我的位置' }; // 信息窗口宽度 // 信息窗口高度 // 信息窗口标题
              var iw = new BMap.InfoWindow('位置：'+r.address.province+r.address.city+r.address.district+r.address.street, _opts); // 创建信息窗口对象
              mk.addEventListener("click", function() {
                if (iw.isOpen()) {
                  map.closeInfoWindow(iw);
                } else {
                  map.openInfoWindow(iw, r.point); //开启信息窗口
                }
              });
            } else {
              alert("failed" + this.getStatus());
            }
          },
          { enableHighAccuracy: true }
        );
      };
  
      var myGeo = new BMap.Geocoder();
      var snIcon = new BMap.Icon("image/icon_sn.png", new BMap.Size(30, 30));
      var khIcon = new BMap.Icon("image/icon_cu.png", new BMap.Size(30, 30));
      // 将地址解析结果显示在地图上,并调整地图视野
      myGeo.getPoint(place, function(point) {
        if (point) {
          map.centerAndZoom(point, 14);
          var mark = new BMap.Marker(point, { icon: snIcon });
          map.addOverlay(mark);
          map.enableScrollWheelZoom();
          map.enableDragging();
  
          var opts = { width: 240, height: 100, title: place }; // 信息窗口宽度 // 信息窗口高度 // 信息窗口标题
          var infoWindow = new BMap.InfoWindow("地址：江苏省无锡市惠山区惠明路88号 <br/> 电话：86-510-83263888", opts); // 创建信息窗口对象
          // 默认打开
          map.openInfoWindow(infoWindow, point);
          mark.addEventListener("click", function() {
            if (infoWindow.isOpen()) {
              map.closeInfoWindow(infoWindow);
            } else {
              map.openInfoWindow(infoWindow, point); //开启信息窗口
            }
          });
  
          // 初始完百度地图，然后获取用户位置
          getCustomLocation();
        } else {
          alert("您选择地址没有解析到结果!");
        }
      });
    }
  
    
    if ($("#allmap").length > 0) {
      renderMap();
    } else {
      $("#allmap").ready(function() {
        renderMap();
      });
    }

    return {data:new Date()};
  };
});
