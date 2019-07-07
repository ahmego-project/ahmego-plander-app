import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GraphScreen from '../screens/GraphScreen';
import MyPageScreen from '../screens/MyPageScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    title: '홈',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                ? 'ios-calendar'
                : 'md-calendar'
            }
        />
    ),
};

/*
ios-stats
ios-pie
*/
const GraphStack = createStackNavigator({
    Graph: GraphScreen,
});

GraphStack.navigationOptions = {
    title: '그래프',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-pie' : 'md-pie'}
        />
    ),
};

/*
ios-information-circle
ios-information-circle-outline

ios-keypad
ios-more

ios-person
*/
const MyPageStack = createStackNavigator({
    MyPage: MyPageScreen,
});

MyPageStack.navigationOptions = {
    title: '마이',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={ Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    GraphStack,
    MyPageStack,
});
  