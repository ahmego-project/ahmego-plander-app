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

export default class GraphScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                >   
                    <Text style={styles.getStartedText}>Graph 화면</Text>
                    <Text style={styles.getStartedText}>이 부분에서 데이터 받아와서 그래프 그릴것</Text>
                </ScrollView>
            </View>
        );
    };
};

GraphScreen.navigationOptions = {
    title: 'Graph'
};

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
