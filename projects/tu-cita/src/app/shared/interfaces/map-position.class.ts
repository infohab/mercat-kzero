export class MapPosition {
  lat: number;
  lng: number;

  public constructor(partial) {
    this.lat = partial.latitude ? partial.latitude : null;
    this.lng = partial.longitude ? partial.longitude : null;
  }

  public static parseFromGeoCoordinate(geoCoordinate): MapPosition {
    return new MapPosition(geoCoordinate);
  }
}
