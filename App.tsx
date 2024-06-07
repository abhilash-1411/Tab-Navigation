import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab=createBottomTabNavigator();
// const App=()=>{

//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='Login' component={Login} />
//         <Tab.Screen name='SignUp' component={SignUp} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const Login=()=>{
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//     <Text style={{fontSize:40}}>Login</Text>
//   </View>
//   )
// }
// const SignUp=()=>{
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       <Text style={{fontSize:40}}>SignUp</Text>
//     </View>
//   )
// }


const Tab=createMaterialTopTabNavigator();
const App=()=>{

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='SignUp' component={SignUp} />
        <Tab.Screen name='User' component={SignUp} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Login=()=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:40}}>Login</Text>
  </View>
  )
}
const SignUp=()=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:40}}>SignUp</Text>
    </View>
  )
}


export default App;
