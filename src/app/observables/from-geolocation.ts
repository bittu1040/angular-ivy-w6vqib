import { Observable } from "rxjs";

export function fromGeolocation() {
  return new Observable((observer) => {
    let watchId;
    const success = (position) => {
      observer.next(position);
      console.log(
        'got location',
        position.coords.latitude,
        position.coords.longitude
      );
      observer.complete();
    };

    const error = (err) => {
      observer.error(err);
    };

    const options = {
      // enableHighAccuracy: false,
      // timeout: 5000,
      maximumAge: 0,
    };

    const geolocation = navigator.geolocation;
    if (!geolocation) {
      observer.error('Geolocation is not supported by your browser');
    } else {
      watchId = geolocation.watchPosition(success, error, options);
    }

    return () => navigator.geolocation.clearWatch(watchId);
  });
}