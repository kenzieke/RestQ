import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Slider from '@react-native-community/slider';
import { DateComponent } from '../../components/DateComponent';

const OptionButton: React.FC<{
    label: string;
    onPress: () => void;
    isSelected: boolean;
  }> = ({ label, onPress, isSelected }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.optionButton,
        isSelected && styles.optionButtonSelected,
      ]}>
      <Text
        style={[
          styles.optionText,
          isSelected && styles.optionTextSelected,
        ]}
        numberOfLines={2} // Allow text to wrap to a new line
        adjustsFontSizeToFit // Adjust the font size to ensure the text fits
        minimumFontScale={0.5} // Minimum scale factor for text size
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

const HealthTrackerScreen: React.FC = () => {
    // Generic function to render option buttons for a question
    const renderOptions = <T extends string>(
        question: string,
        value: T,
        setValue: React.Dispatch<React.SetStateAction<T>>,
        options: T[]
    ) => {
        return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.optionsRow}>
            {options.map((option) => (
                <OptionButton
                    key={option}
                    label={option}
                    onPress={() => setValue(option)}
                    isSelected={value === option && value !== ''}
                />
                ))}
            </View>
        </View>
        );
    };

    const [caffeine, setCaffeine] = useState<string>('');
    const [vegetables, setVegetables] = useState<string>('');
    const [sugaryDrinks, setSugaryDrinks] = useState<string>('');
    const [fastFood, setFastFood] = useState<string>('');
    const [steps, setSteps] = useState<string>('');
    const [goals, setGoals] = useState<string>('');
    const [dailyWeight, setDailyWeight] = useState<string>('');
    const [weightUnit, setWeightUnit] = useState<string>('kgs');

    const [sliderValue, setSliderValue] = useState<number>(5);

    // Function to convert slider value to a string
    const getSleepRating = (value: number): string => {
      const ratings = ['1', '2', '3', '4', '5'];
      return ratings[Math.floor(value / 1)]; // Since we have 5 steps, each step corresponds to one label
    };
    
    const sliderWidth = Dimensions.get('window').width - (20 * 2); // padding is 20 on each side
    const [labelWidth, setLabelWidth] = useState(0);
    const labelPosition = (sliderValue / 5) * (sliderWidth - labelWidth) + 20; // Adjusted for padding

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {/* <Pressable onPress={() => router.push("/screens/SleepAssessment")} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#52796F" />
                </Pressable>
                <Text style={styles.title}>Health Tracker</Text> */}

              <View style={styles.questionContainer}>
                <DateComponent></DateComponent>
              </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Rate your stress level:</Text>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={4}
                            step={1}
                            value={sliderValue}
                            onValueChange={value => setSliderValue(value)}
                            minimumTrackTintColor="#52796F"
                            maximumTrackTintColor="#BDBDBD"
                            thumbTintColor="#FFFFFF"
                        />
                        <View style={[styles.labelContainer, { left: labelPosition }]}>
                            <Text style={styles.labelText}>{getSleepRating(sliderValue)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Weight:</Text>
                    <View style={styles.inputRow}>
                    <TextInput
                        style={styles.healthInput}
                        onChangeText={setDailyWeight}
                        value={dailyWeight}
                        keyboardType="numeric"
                        placeholder="Enter here"
                    />
                    <SwitchSelector
                        initial={0}
                        onPress={value => setWeightUnit(value)}
                        textColor={'#BDBDBD'} // your active text color
                        selectedColor={'#52796F'} // the color for the label text when it is selected
                        buttonColor={'#BDBDBD'} // the color for the button when it is selected
                        borderColor={'#BDBDBD'} // border color
                        hasPadding
                        maxLength={3}
                        options={[
                        { label: 'kgs', value: 'lbs' },
                        { label: 'lbs', value: 'kgs' },
                        ]}
                        style={styles.switchSelector}
                        buttonStyle={styles.switchButton}
                    />
                    </View>
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        Drinks with caffeine:
                    </Text>
                    <TextInput
                        style={styles.healthInput}
                        onChangeText={setCaffeine}
                        value={caffeine}
                        keyboardType="numeric"
                        placeholder="# of drinks"
                    />
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        Vegetable servings:
                    </Text>
                    <TextInput
                        style={styles.healthInput}
                        onChangeText={setVegetables}
                        value={vegetables}
                        keyboardType="numeric"
                        placeholder="# of vegetable servings"
                    />
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        Sugary drinks:
                    </Text>
                    <TextInput
                        style={styles.healthInput}
                        onChangeText={setSugaryDrinks}
                        value={sugaryDrinks}
                        keyboardType="numeric"
                        placeholder="# of sugary drinks"
                    />
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        Fast food:
                    </Text>
                    <TextInput
                        style={styles.healthInput}
                        onChangeText={setFastFood}
                        value={fastFood}
                        keyboardType="numeric"
                        placeholder="# of fast food items"
                    />
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        Steps:
                    </Text>
                    <TextInput
                        style={styles.healthInput}
                        onChangeText={setSteps}
                        value={steps}
                        keyboardType="numeric"
                        placeholder="# of steps"
                    />
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        Other goals:
                    </Text>
                    <TextInput
                        style={styles.healthInput}
                        onChangeText={setGoals}
                        value={goals}
                        keyboardType="numeric"
                        placeholder="Enter your goals here"
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container: {
      padding: 24,
      paddingBottom: 50, // Add padding to the bottom to ensure the 'Next' button is not cut off
    },
    title: {
      // I would like this to be in line with the back arrow
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 24,
      textAlign: 'center',
    },
    backButton: {
      padding: 8, // Padding to make it easier to press
      top: 0,
    },
    sliderContainer: {
      position: 'relative',
      marginBottom: 16,
    },
    slider: {
      marginTop: 30,
      width: '100%',
      height: 0,
    },
    labelContainer: {
      marginTop: 16,
      position: 'absolute',
      top: -25, // Adjust this to fit your design
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#52796F',
      paddingVertical: 5,
      paddingHorizontal: 10, // This will give space inside the label
      borderRadius: 15, // This will round the corners
    },
    labelText: {
      textAlign: 'center', // Center the text inside the label
      color: 'white',
      backgroundColor: '#52796F',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    contentView: {
        padding: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
      },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    switchSelector: {
      width: 80, // Adjust the width as needed
      height: 30, // Adjust the height as needed
      borderRadius: 15, // Half of the height to make it rounded
      marginLeft: 150, // Add some space between the text input and the switch
    },
    switchButton: {
      padding: 2, // Reduce padding to decrease the size of the button
      // You may also want to adjust fontSize here if the text is too large after scaling
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionButton: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 10,
      paddingVertical: 10,
      marginHorizontal: 4,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40, // Set a fixed height for buttons
    },
    optionButtonSelected: {
      backgroundColor: '#52796F',
      borderColor: '#52796F',
    },
    optionText: {
      fontSize: 16,
      color: '#000000',
      textAlign: 'center',
      flexShrink: 1, // Allow text to shrink if needed
    },
    optionTextSelected: {
      color: '#ffffff',
    },
    questionContainer: {
      marginBottom: 16,
    },
    questionText: {
      fontSize: 16,
      color: '#000000',
      textAlign: 'left',
      flexShrink: 1, // Allow text to shrink if needed
      marginBottom: 16,
    },
    healthInput: {
      borderBottomWidth: 1, // Add underline
      borderColor: '#BDBDBD', // Set underline color
      paddingVertical: 5, // Adjust padding as needed
      marginBottom: 20, // Space between the inputs
      fontSize: 16,
    },
    optionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    timeInput: {
      borderBottomWidth: 1,
      borderColor: '#BDBDBD',
      textAlign: 'center',
      width: 60, // Fixed width for the inputs
      fontSize: 16,
      paddingVertical: 5,
    },
    unitText: {
      fontSize: 16,
      width: 50, // Fixed width for the unit text
    },
    button: {
      backgroundColor: '#52796F',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 25,
      marginTop: 24,
    },
    buttonText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
});

export default HealthTrackerScreen;