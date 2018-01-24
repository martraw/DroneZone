/* Map settings */
function initMap(){
  const options = {
    center: {lat: 51.5277, lng: 17.27137},
    zoom: 11
  };
/* Create map object */  
  const map = new google.maps.Map(document.getElementById('map'), options);

/* Custom marker icon */  
  const markerIcon = {
    url: '../img/location-pin.png',
    size: new google.maps.Size(41,63),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 63)
  };

/* Markers */  
  const markesPropss = [
      {
        coords: {lat: 51.499538, lng: 17.169372},
        content: `<h1>DroneZone location 2</h1> <h2>Lorem ipsum</h2> <p>Mauris consequat libero metus, nec ultricies sem efficitur quis.</p>`
      },
      {
        coords: {lat: 51.5277, lng: 17.27137},
        content: `<h1>DroneZone location 1</h1> <h3>Lorem ipsum</h3> <p>Mauris consequat libero metus, nec ultricies sem efficitur quis.</p>`
      },
      {
        coords: {lat: 51.60945, lng: 16.85863},
        content: `<h1>DroneZone location 3</h1> <h2>Lorem ipsum</h2> <p>Mauris consequat libero metus, nec ultricies sem efficitur quis.</p>`
      }
    ];

  
  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: markerIcon
    });

    if(props.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: props.content
      }); 
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      })
    }
  }

  markesPropss.forEach(prop => addMarker(prop));
};