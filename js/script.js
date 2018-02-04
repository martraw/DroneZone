// document.addEventListener("DOMContentLoaded", function(event) {
  const navPopup = document.querySelector('.nav-popup');
  const navButton = document.querySelector('.nav-popup__foreground');
  const navBackground = document.querySelector('.nav-popup__background');
  const navContent = document.querySelector('.nav-popup__container');
  const navListItems = document.querySelectorAll('.nav-popup__item');
  const topNavBar = document.querySelector('.nav-container');

  function showButton(e) {
    // console.log(e);
    if (window.scrollY > topNavBar.offsetHeight) {
      navPopup.classList.add('nav-popup-visible');
    } 
    else {
      if (navPopup.classList.contains('nav-popup-active') && navButton.classList.contains('nav-popup__foreground-active') && window.scrollY < topNavBar.offsetHeight) {
        console.log("aaaa");
        return;
      }

      else {
        navPopup.classList.remove('nav-popup-visible');

      }
    }
  }

  function openNav() {
    // navButton.classList.toggle('nav-popup__foreground-active');
    // if (navButton.classList.contains('nav-popup__foreground-active')) {
      navPopup.classList.add('nav-popup-active');
      navBackground.classList.add('nav-popup__background-active')
      navContent.classList.add('nav-popup__container-active');

      navListItems.forEach(item => item.addEventListener('click', closeNav))
    // }
  };

  function closeNav() {
    
    navBackground.classList.remove('nav-popup__background-active');
    navContent.classList.remove('nav-popup__container-active');
    navButton.classList.remove('nav-popup__foreground-active');
    
  };

  function handleNav(e) {
    navButton.classList.toggle('nav-popup__foreground-active');
    if (navButton.classList.contains('nav-popup__foreground-active')) {
      openNav();
    } else {
      closeNav();
      if (window.scrollY < topNavBar.offsetHeight) {
        setTimeout(() => {
          navPopup.classList.remove('nav-popup-visible');
          console.log("bbb");
        }, 800);
      }
    }
  }

  window.addEventListener('scroll', showButton);
  navButton.addEventListener('click', handleNav);

  /* navButton.addEventListener('click', function(e) {
    navButton.classList.toggle('nav-popup__foreground-active');
    if (navButton.classList.contains('nav-popup__foreground-active')) {
      navPopup.classList.add('nav-popup-active');
      navBackground.classList.add('nav-popup__background-active')
      navContent.classList.add('nav-popup__container-active');

      navListItems.forEach(item => item.addEventListener('click', function(e){
        navBackground.classList.remove('nav-popup__background-active');
        navContent.classList.remove('nav-popup__container-active');
        navButton.classList.remove('nav-popup__foreground-active');
      }))
    } else {
      navPopup.classList.remove('nav-popup-active');
      navBackground.classList.remove('nav-popup__background-active');
      navContent.classList.remove('nav-popup__container-active');
    }
    // console.log(Array.from([navButton.classList.value, navPopup.classList.value, navBackground.classList.value, navContent.classList.value]));
  }) */
// });
  
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