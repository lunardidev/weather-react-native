import React from 'react';
import { StatusBar } from 'react-native';

import './config/ractotron';

import { Main } from './layouts/Weather';

import { ApiContextProvider } from './contexts/apiContext';

const App = () => (
  <ApiContextProvider>
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />
    <Main />
  </ApiContextProvider>
);

export default App;
