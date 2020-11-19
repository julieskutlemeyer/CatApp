import React from 'react';
import { Provider } from 'react-redux'
import AppNavigator from './src/AppNavigator'
import configureStore from "./src/state/Store";


export default function App() {
  return (
    <Provider store={configureStore}>
      <AppNavigator/>
    </Provider>
  )
}

