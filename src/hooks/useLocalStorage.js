import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    let value;

    try {
      value = JSON.parse(
        AsyncStorage.getItem(key) || JSON.stringify(initialValue),
      );
    } catch (e) {
      value = initialValue;
    }

    return value;
  });

  useEffect(() => {
    async function setItemStore() {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    }

    if (state !== null) setItemStore();
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
