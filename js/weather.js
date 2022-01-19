function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in,", lat, lng);
}
function onGeoError() {
  alert("Can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
