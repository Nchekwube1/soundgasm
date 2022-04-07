/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Colors from './colors';
import {store} from './store';
import {Provider} from 'react-redux';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
function App() {
  return (
    <Provider store={store}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: Colors.white,
        }}>
        <SafeAreaView
          style={{
            height: STATUSBAR_HEIGHT,
            backgroundColor: Colors.greenTheme,
          }}>
          <StatusBar
            translucent
            barStyle={'dark-content'}
            backgroundColor={Colors.greenTheme}
          />
        </SafeAreaView>
      </View>
    </Provider>
  );
}

export default App;
