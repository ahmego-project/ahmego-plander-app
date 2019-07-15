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
import Calendar from '../components/Calendar';

export default class HomeScreen extends Component{
    render() {
        return (
            <ScrollView style={styles.container}>
                <View 
                    style={styles.calendar}
                >
                    <Calendar></Calendar>
                </View>
                <View
                    style={styles.salesInfoDetail}
                >   
                    <Text style={styles.getStartedText}>Home 화면</Text>
                    <Text style={styles.getStartedText}>Hello world Bangshinchul !!</Text>
                </View>
            </ScrollView>
        )
    }
}

HomeScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    calendar: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    salesInfoDetail: {
        flex: 1,
        color: '#fff',
        backgroundColor: 'gray',
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
