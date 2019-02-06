let map;
let mapCity;
let info = new google.maps.InfoWindow();
let gmarkers = [];
let gmarkersCity = [];

const markers = [
  {
    country: 'France',
    city: 'Paris',
    lat: 52.2082716,
    lng: 21.0218746,
    message: 'test 1'
  },
  {
    country: 'France',
    city: 'Paris',
    lat: 52.1101935,
    lng: 21.0220677,
    message: 'test 2'
  },
  {
    country: 'USA',
    city: 'New York',
    lat: 51.4063449,
    lng: 21.155306,
    message: 'test 2'
  },
  {
    country: 'USA',
    city: 'New York',
    lat: 51.4063448,
    lng: 21.155306,
    message: 'test 223232'
  },
  {
    country: 'USA',
    city: 'New York',
    lat: 49.4063449,
    lng: 20.155306,
    message: 'test 333333'
  },
  {
    country: 'USA',
    city: 'New York',
    lat: 50.4063448,
    lng: 20.155306,
    message: 'test 223232'
  },
  {
    country: 'USA',
    city: 'New York',
    lat: 52.4063449,
    lng: 22.155306,
    message: 'test 333333'
  },
  {
    country: 'USA',
    city: 'New York1',
    lat: 34.4063448,
    lng: 15.155306,
    message: 'test 223232'
  },
  {
    country: 'USA',
    city: 'New York1',
    lat: 33.4063449,
    lng: 16.155306,
    message: 'test 333333'
  },
];

function renderSelects(markers, selectedCountry) {
  let state = '';
  let city = '';
  const uniqueCountries = new Set();
  const uniqueCities = new Set();
  markers.forEach(marker => {
    uniqueCountries.add(marker.country);
  });
  selectedCountry = selectedCountry || Array.from(uniqueCountries)[0];
  markers.filter(marker => marker.country === selectedCountry).forEach(marker => {
    uniqueCities.add(marker.city);
  });

  uniqueCountries.forEach(countryName => {
    if(selectedCountry === countryName) {
      state += `<option selected value="${countryName}">${countryName}</option>`;
    } else {
      state += `<option value="${countryName}">${countryName}</option>`;
    }
  });
  uniqueCities.forEach(cityName => {
      city += `<option value="${cityName}">${cityName}</option>`;
  });

  document.getElementById("state").innerHTML = `<select onchange="onCountryChange(this.value);">${state}</select>`;
  document.getElementById("city").innerHTML = `<select onchange="onCityChange(this.value);">${city}</select>`;
}
renderSelects(markers);

const countrySelect = document.querySelector("#state select");
const citySelect = document.querySelector("#city select");

let selectedCountry = countrySelect.options[countrySelect.selectedIndex].value;
let selectedCity = citySelect.options[citySelect.selectedIndex].value;

console.log(selectedCountry, selectedCity);
function onCountryChange(country) {
  selectedCountry = country;
  renderSelects(markers, country);
  const citySelect =  document.querySelector("#city select");
  selectedCity = citySelect.options[citySelect.selectedIndex].value;
  clearMarkers();
  reRenderMarkers();
}
function onCityChange(city) {
  selectedCity = city;
  clearMarkers();
  reRenderMarkers();
}

function clearMarkers() {
  setMapOnAll(null);
  gmarkers = [];
}
function setMapOnAll(map) {
  for (var i = 0; i < gmarkers.length; i++) {
    gmarkers[i].setMap(map);
  }
}

function reRenderMarkers() {
  let bounds = new google.maps.LatLngBounds();
  markers.filter(marker => marker.city === selectedCity && marker.country === selectedCountry).forEach(marker => {
    addMarker(marker, bounds);
  });
  map.fitBounds(bounds);
}
function initialize() {
  let mapOptions = {
    scrollwheel: true,
    zoom: 11,
    center: new google.maps.LatLng(52.2081935, 21.0220677)
  };
  map = new google.maps.Map(document.getElementById('google-maps'), mapOptions);

  let bounds = new google.maps.LatLngBounds();
  markers.filter(marker => marker.city === selectedCity && marker.country === selectedCountry).forEach(marker => {
    addMarker(marker, bounds);
  });
  map.fitBounds(bounds);


 // google.maps.event.trigger(gmarkers[2], 'click');
  //map.setCenter(gmarkers[2].getPosition());

}
function addMarker(draftMarker, bounds) {
  let myLatLng = new google.maps.LatLng(draftMarker.lat, draftMarker.lng);
  let image = {
    url: 'https://cache.fivebelow.com/media/catalog/swatches/1/35x35/media/wwebrie.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(120, 132),
  };
  let marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: draftMarker.message,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  bounds.extend(marker.position);

  google.maps.event.addListener(marker, 'click', function () {
    info.setContent(draftMarker.message);
    info.open(map, marker);
  });

  gmarkers.push(marker);
  return marker;
}

function myclick(i) {
  map.setCenter(gmarkers[i].getPosition());
  google.maps.event.trigger(gmarkers[i], "click");
}


google.maps.event.addDomListener(window, 'load', initialize);
