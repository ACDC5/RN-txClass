/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//官方要求把react-native-gesture-handler放到app.js的顶端
import 'react-native-gesture-handler';//好像注释掉也没什么影响
import React from 'react';
import Tx from './src/Tx';
const App: () => Node = () => {
  return <Tx/>;
};

export default App;
