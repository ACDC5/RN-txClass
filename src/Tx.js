import React from 'react';
// import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Detail from "./pages/Detail";
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import Logo from './component/Logo'
import StyleTest from "./pages/StyleTest";


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
            case '样式':
              iconName = 'android-list';
              break;
          }
          return (
              <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
              />);
        },
      })}
      tabBarOptions={{
        activeTintColor: '#23b8ff',
        inactiveTintColor: '#999',
      }}>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="列表" component={ListPage} />
      <Tab.Screen name="样式" component={StyleTest}/>
    </Tab.Navigator>
  );
}

export default function Tx() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{
              // headerTitle: 'Tab'
              headerTitle:(props) => <Logo {...props} />
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTitle:(props) => <Logo {...props} />,
            headerBackTitle: 'back'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

