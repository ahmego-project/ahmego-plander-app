import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator'

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const platformVersion = parseInt(Platform.Version, 10);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <SafeAreaView 
        style={styles.container}
      >
        {Platform.OS === 'ios' && <StatusBar backgroundColor="blue" barStyle="light-content" />}
        {Platform.OS === 'android' && <StatusBar backgroundColor="blue" barStyle="light-content" />}
        <AppNavigator />
      </SafeAreaView>
    );
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // require('./assets/images/robot-dev.png'),
      // require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // 이 글꼴은 우리가 탭 막대에 사용하고있는 글꼴입니다.
      ...Ionicons.font,
      // 우리가 HomeScreen.js에서 사용해야하기 때문에 SpaceMono를 include합니다. 이 폰트를 앱에서 사용하지 않을 경우 자유롭게 삭제하셔도 좋습니다.
      // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
