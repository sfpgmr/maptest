(function () {
  'use strict';

  (async function () {
    var initLat = 34.678395;
    var initLon = 135.4601305;

    var loc = await new Promise(function (resolve, reject) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          resolve([position.coords.latitude, position.coords.longitude]);
        }, function (e) {
          return reject(e);
        });
      } else {
        resolve([initLat, initLon]);
      }
    });
    var map = L.map('map').setView(loc, 17);
    //地理院地図レイヤー追加
    L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
      attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>"
    }).addTo(map);
    L.marker(loc).addTo(map);
  })();

}());
