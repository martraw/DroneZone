// function initMap(){
//   var options = {
//     zoom: 12,
//     center: {lat: 51.5277, lng: 17.27137}
//   };

//   var image = {
//     url: 'img/location-pin.png',
//       // This marker is 20 pixels wide by 32 pixels high.
//       size: new google.maps.Size(41, 63),
//       // The origin for this image is (0, 0).
//       origin: new google.maps.Point(0, 0),
//       // The anchor for this image is the base of the flagpole at (0, 32).
//       anchor: new google.maps.Point(20, 63)
//   };

//   var infoWindow = new google.maps.InfoWindow({
//     content: '<H2>Mordor</H2> <p>Tu się dzieje!</p>'
//   })

//   var map = new google.maps.Map(document.getElementById('map'), options);

//   var marker = new google.maps.Marker({
//     position: {lat: 51.499323, lng: 17.168887},
//     map: map,
//     icon: image
//   });

//   marker.addListener('click', function(){
//     infoWindow.open(map, marker)
//   });

// }

function initMap(){
  const options = {
    center: {lat: 51.5277, lng: 17.27137},
    zoom: 12
  };
  
  const map = new google.maps.Map(document.getElementById('map'), options);
  
  const markerIcon = {
    url: '../img/location-pin.png',
    size: new google.maps.Size(41,63),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 63)
  }
  
  const markesPropss = [
      {lat: 51.499538, lng: 17.169372},
      {lat: 51.5277, lng: 17.27137},

    ]

  const marker = new google.maps.Marker({
    position: markesPropss[0],
    map: map,
    icon: markerIcon
  });




};