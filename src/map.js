const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
  
    static loadGoogleMapsApi() {
      return loadGoogleMapsApi({ key: `AIzaSyAQF8f08sj8KWB2NPw_dNFGgdaeUvUb38U` });
    }  static createMap(googleMaps, mapElement) {
      return new googleMaps.Map(mapElement, {
        center: { lat: -135.426498294, lng: 34.658830698 },
        zoom: 14
      });
    }
  }
  
  export { Map };