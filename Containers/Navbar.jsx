import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './Home';
import Sale from './Sale';
//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const saleName = "saleName";


const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={
          ({ route }) => (
            {
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                  iconName = focused ? 'home' : 'home-outline';

                }
                else if (rn === saleName) {
                  iconName = focused ? 'home' : 'cart-outline';
                }
                else if (rn === detailsName) {
                  iconName = focused ? 'apps' : 'apps-outline';

                } else if (rn === settingsName) {
                  iconName = focused ? 'settings' : 'settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}

        tabBarOptions={{
          activeTintColor: 'teal',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={Home} options={{ headerShown: false }} />
        <Tab.Screen name={detailsName} component={Sale} options={{ headerShown: false }} />

        <Tab.Screen name={saleName} component={Sale} options={{ headerShown: false }} />

        <Tab.Screen name={settingsName} component={Home} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;