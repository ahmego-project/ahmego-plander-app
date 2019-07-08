import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';
import { Text, ScrollView, View, StyleSheet, Button,StatusBar } from 'react-native';

export default class CalendarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }

    render() {
        return (
          <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.text}>Calendar with selectable date and arrows</Text>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
            />
          </ScrollView>
        );
    }
    
    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }
}

const styles = StyleSheet.create({
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    },
    text: {
      textAlign: 'center',
      borderColor: '#bbb',
      padding: 10,
      backgroundColor: '#eee'
    },
    container: {
      flex: 1,
      backgroundColor: 'gray'
    }
});