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

export default class LoginPageScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                >   
                    <Text style={styles.getStartedText}>LoginPage 화면</Text>
                    <Text style={styles.getStartedText}>이 부분에서 로그인을 처리할 수 있도록 한다</Text>
                </ScrollView>
            </View>
        )
    }
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
