import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from './src/components/Home'
import NotificationScreen from './src/components/Notification'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Home" useLegacyImplementation>
        <Drawer.Screen  name = "Home" component={HomeScreen}/>
        <Drawer.Screen name = "Notification" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App