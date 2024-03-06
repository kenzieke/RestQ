import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateComponent = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
    };
  
    const showDatepicker = () => {
      setShow(true);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={showDatepicker} 
            style={styles.button}
          >
            <Text style={styles.buttonText}>Select Date</Text>
          </TouchableOpacity>
          <Text style={styles.selectedDateText}>
            Selected: {date.toLocaleDateString()}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            display="default"
            onChange={onChange}
            accentColor="#52796F" // This is for Android, change accordingly if you are on a different platform
          />
        )}
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -16,
  },
  row: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Align children vertically in the center
    justifyContent: 'space-between', // Distribute children evenly
    padding: 10, // Add padding for aesthetics
  },
  button: {
    // Styles for the touchable area
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    // Styles for the text inside the button
    fontSize: 16,
    fontWeight: 'bold',
    color: '#52796F',
  },
  selectedDateText: {
    // Styles for the selected date text
    fontSize: 16,
    color: '#000',
    padding: 10,
  },
});
