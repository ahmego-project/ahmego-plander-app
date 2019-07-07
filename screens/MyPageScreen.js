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

export default class MyPageScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                >   
                    <Text style={styles.getStartedText}>MyPage 화면</Text>
                    <Text style={styles.getStartedText}>이 부분에서 개인정보 수정 및 클라우드 저장 등등 마이페이지 기능 구현할것</Text>
                </ScrollView>
            </View>
        );
    };
};

MyPageScreen.navigationOptions = {
    title: 'MyPage'
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
