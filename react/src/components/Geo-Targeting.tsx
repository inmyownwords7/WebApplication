let map: google.maps.Map;
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center,
    zoom: 8,
  });
}

let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById('map') as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
