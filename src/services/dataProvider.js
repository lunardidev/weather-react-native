import AsyncStorage from '@react-native-community/async-storage';

import api from './api';

export const onlineDataProvider = async (longitude, latitude) => {
  let url = `?user_ip=remote`;

  if (longitude && latitude) {
    url = `?lat=${latitude}&lon=${longitude}&user_ip=remote`;
  }

  const response = await api.get(
    `?lat=${latitude}&lon=${longitude}&user_ip=remote`
  );

  try {
    return new Promise((resolve) => {
      resolve(response.data.results);
    });
  } catch (e) {
    return Promise.reject(new Error('Previsão não encontrada!'));
  }
};

export const offlineDataProvider = async () => {
  const offlineData = await AsyncStorage.getItem('@bovcontrol:weather');

  try {
    return new Promise((resolve) => {
      resolve(JSON.parse(offlineData));
    });
  } catch (e) {
    return Promise.reject(new Error('Previsão offline não encontrada!'));
  }
};
