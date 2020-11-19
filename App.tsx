import React from 'react';
import { Provider } from 'react-redux'
import AppNavigator from './state-management/AppNavigator'
import configureStore from "./state-management/state/Store";


export default function App() {
  return (
    <Provider store={configureStore}>
      <AppNavigator/>
    </Provider>
  )
}

