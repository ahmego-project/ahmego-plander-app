import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';

export default class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                >   
                    <Text style={styles.getStartedText}>Home 화면</Text>
                    <Text style={styles.getStartedText}>Hello world Bangshinchul !!</Text>
                </ScrollView>
            </View>
        )
    }
}

HomeScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
});
