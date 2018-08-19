define(["jquery"], function($) {
  return function() {
    return {
      loadBinaryResource: function(url,fileName) {
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "blob";
        oReq.onload = function(oEvent) {
          var blob = oReq.response;
          var aTag = document.createElement("a");
          aTag.download = fileName; // 下载的文件名
          aTag.href = URL.createObjectURL(blob);
          aTag.click();
          URL.revokeObjectURL(blob);
        };
        oReq.send();
      },
      download: function() {
        if (!window.Blob) {
          window.open("data/2017企业最新介绍.rar");
        } else {
          this.loadBinaryResource("data/2017企业最新介绍.rar", "2017企业最新介绍.rar");
        }
      }
    };
  };
});
