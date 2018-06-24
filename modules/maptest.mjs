"use strict";



(async()=>{
    let initLat = 34.678395;
    let initLon =  135.4601305;
    let watchId;
    let zoom = 18;

    let loc = await new Promise((resolve,reject)=>{
      if(navigator.geolocation){
        watchId = navigator.geolocation.watchPosition(updateLoc,e=>{throw e;},{enableHighAccuracy:true,maximumAge:27000});
        navigator.geolocation.getCurrentPosition((position)=> {
          resolve([position.coords.latitude, position.coords.longitude]);
        },(e)=>reject(e));
      } else {
        resolve ([initLat,initLon]);
      }
    });

    let map = L.map('map',{minZoom:6,maxZoom:18}).setView(loc,zoom);
    //地理院地図レイヤー追加
    L.tileLayer(
      'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
      {
        attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
        detectRetina:true
      }
    ).addTo(map);

    const marker = L.circleMarker(loc,{radius:5,color:'red',fill:true,fillColor:'red'}).addTo(map);
    const startMarker = L.marker(loc).addTo(map);

    function updateLoc(position){
      loc[0] = position.coords.latitude;
      loc[1] = position.coords.longitude;
      map.setView(loc,map.getZoom());
      marker.setLatLng(loc);

    }

  })();


