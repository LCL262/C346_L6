import React, { useState } from 'react';
import { Alert, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const QuizQuestion = ({ question, image, options, selectedValue, onValueChange }) => {
    return (
        <View style={styles.questionCard}>
            {/* Question text box */}
            <View style={styles.questionTextBox}>
                <Text style={styles.questionText}>{question}</Text>
            </View>

            {/* Image with colored border */}
            <Image source={{ uri: image }} style={styles.questionImage} />

            {/* Picker with colored border */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    style={styles.picker}
                    dropdownIconColor="black"
                >
                    <Picker.Item label="-- Select an answer --" value="" />
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

const QuizApp = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');

    const correctAnswer = [
        'German M1907 Feldrock',
        'United Kingdom',
        'Produced by Lockheed-Martin',
        'Ratnik 6SH117, Russia',
        'The Iraq War'
    ];

    const handleSubmit = () => {
        let score = 0;
        if (answer1 === correctAnswer[0]) score++;
        if (answer2 === correctAnswer[1]) score++;
        if (answer3 === correctAnswer[2]) score++;
        if (answer4 === correctAnswer[3]) score++;
        if (answer5 === correctAnswer[4]) score++;

        let feedback = '';
        if (score === 5) feedback = 'Outstanding! Perfect score!';
        else if (score >= 4) feedback = 'Great job!';
        else if (score === 3) feedback = 'Good effort!';
        else if (score === 2) feedback = 'Not bad!';
        else feedback = 'Keep trying!';

        Alert.alert('Quiz Result', `You got ${score} out of 5.\n${feedback}`);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Military Knowledge Test</Text>

            <QuizQuestion
                question="1. What military uniform model is this?"
                image="https://cdn11.bigcommerce.com/s-us1e3z01mr/images/stencil/1280x1280/products/114/12401/M190710_Feldrock__95069.1614785785.jpg?c=1"
                options={['German M1907 Feldrock', 'French M1920', 'Polish M1936 jacket']}
                selectedValue={answer1}
                onValueChange={setAnswer1}
            />

            <QuizQuestion
                question="2. Which country developed the rifle in the picture?"
                image="https://tse3.mm.bing.net/th/id/OIP.5DZpmgNTIqS4DoegyymUygHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
                options={['United Kingdom', 'United States', 'Germany', 'Russia']}
                selectedValue={answer2}
                onValueChange={setAnswer2}
            />

            <QuizQuestion
                question="3. Which of the following is not true about the jet in the picture?"
                image="https://tse3.mm.bing.net/th/id/OIP.IjKlzI6B7zDIGHpwGVpGmAHaEe?rs=1&pid=ImgDetMain&o=7&rm=3"
                options={['The fastest aircraft of WW2', 'The only operational rocket-powered fighter', 'Produced by Lockheed-Martin']}
                selectedValue={answer3}
                onValueChange={setAnswer3}
            />

            <QuizQuestion
                question="4. What model of chest rig is this and which country produces it?"
                image="https://preview.redd.it/6sh117-gen-4-v0-j6in06xsqa6d1.jpeg?auto=webp&s=02e519657e118f6bfb08d162cfd8fdfdcb00c6a5"
                options={['Ratnik 6SH117, Russia', '6094 vest, America', 'Mission, Germany', 'JPC 1.0, America']}
                selectedValue={answer4}
                onValueChange={setAnswer4}
            />

            <QuizQuestion
                question="5. In which war will you most likely to see the weapon in the picture?"
                image="https://i.redd.it/kaeg2j5slkr71.jpg"
                options={['The Gulf War', 'The Vietnam War', 'The Iraq War']}
                selectedValue={answer5}
                onValueChange={setAnswer5}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 30,
        paddingHorizontal: 10,
        backgroundColor: '#f0f8ff', // light background for the app
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'navy',
    },
    questionCard: {
        backgroundColor: '#e6f2ff', // light blue box for question
        padding: 15,
        marginBottom: 20,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'skyblue', // border color for question box
    },
    questionTextBox: {
        borderWidth: 1,
        borderColor: 'darkblue', // darker border for text box
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#cce0ff', // light blue background for text box
    },
    questionText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'navy',
    },
    questionImage: {
        width: 250,
        height: 180,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'skyblue', // border color for image
        marginBottom: 10,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'navy', // border color for picker
        borderRadius: 8,
        width: 220,
        overflow: 'hidden',
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#cce0ff', // background inside picker box
    },
    picker: {
        width: '100%',
        height: 50,
    },
    submitButton: {
        backgroundColor: 'darkblue',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 30,
    },
    submitText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default QuizApp;
