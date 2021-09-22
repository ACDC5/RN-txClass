import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Detail from './pages/Detail';
import Home from './pages/Home';
import List from './pages/List';

function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOption={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case '首页':
              iconName = 'android-home';
              break;
            case '列表':
              iconName = 'android-list';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#23b8ff',
        inactiveTintColor: '#999',
      }}>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="列表" component={List} />
    </Tab.Navigator>
  );
}

export default function Tx() {
  const Stack = createStackNavigator();

  setTimeout(fcnction(){

  },2000)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{headerTitle: 'Tab'}}
        />
        <Stack.Screen
          name="Detaixl"
          component={Detail}
          options={{
            headerTitle: 'Detail',
            headerBackTitle: '返回',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
