import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((position) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return coordinates;
};

export default useGeolocation;
