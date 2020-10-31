import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AppContainer from './src/navigation/AppContainer'
import {Provider} from 'react-redux'
import {store, persistor} from './src/redux/store'
import {PersistGate} from 'redux-persist/integration/react'



export default function App (){ 
   return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer/> 
        </PersistGate>
       </Provider>    
    )
 
}



