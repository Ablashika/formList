import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import LoginScreen from '../screens/LoginScreen'
import ContactsScreen from '../screens/ContactsScreen'
import SignUpScreen from '../screens/SignUpScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {connect} from 'react-redux'
import {logout} from '../redux/actions/authAction'




const Stack = createStackNavigator() 

 function AppContainer ({auth, logout}) {
 
 return (

    <NavigationContainer>  

      {
        auth.login ?
        <Stack.Navigator>
                <Stack.Screen
                options={{headerRight:()=>(
                  <TouchableOpacity onPress={logout}>
                        <Text style={{marginRight:20}}>Logout</Text>
                  </TouchableOpacity>
                )}}
                name="ContactsScreen" component={ContactsScreen}/>
         </Stack.Navigator>
         :
        <Stack.Navigator>
          <Stack.Screen
           options={{header:()=>null}}
          name="LoginScreen" component={LoginScreen}/> 
         <Stack.Screen
         options={{header:()=>null}}
         name="SignUpScreen" component={SignUpScreen}/>
       </Stack.Navigator>
       }
    </NavigationContainer>
    );
}



const mapStateToProps = (state) => {

  return {auth:state}
} 


export default connect(mapStateToProps, {logout})(AppContainer);