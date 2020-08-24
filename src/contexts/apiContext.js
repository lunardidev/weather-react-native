// eslint-disable-next-line object-curly-newline
import React, { createContext, useState, useContext, useEffect } from 'react';

import { useNetInfo } from '@react-native-community/netinfo';

import {
  offlineDataProvider,
  onlineDataProvider,
} from '../services/dataProvider';

import { useGeolocation, useLocalStorage } from '../hooks';

export const ApiContext = createContext();

export const ApiContextProvider = (props) => {
  const [data, setData] = useState({});
  const [connection, setConnection] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [offlineStorage, setOfflineStorage] = useLocalStorage(
    '@bovcontrol:weather',
    null
  );
  const geolocation = useGeolocation();
  const netInfo = useNetInfo();

  useEffect(() => {
    setConnection(netInfo.isConnected);
  }, [netInfo.isConnected]);

  const getData = async () => {
    if (connection) {
      try {
        const onlineData = await onlineDataProvider(
          geolocation.longitude,
          geolocation.latitude
        );
        setData(onlineData);
        setOfflineStorage(onlineData);
      } catch (e) {
        return false;
      }
    } else {
      try {
        const offlineData = await offlineDataProvider();
        setData(offlineData);
        setOfflineStorage(offlineData);
      } catch (e) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection]);

  const updateData = async () => {
    setLoading(true);
    await getData();
    setLoading(false);
  };

  return (
    <ApiContext.Provider value={{ data, connection, loading, updateData }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export function useApi() {
  const context = useContext(ApiContext);
  return context;
}
