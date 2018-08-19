define(["jquery", "json!province.json"], function($, jsonData) {
  return function() {
    return { provinceList: jsonData };
  };
});
