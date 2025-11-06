import React, {useState} from 'react';
import {Alert, ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Define own Question component with appropriate parameters and display
const QuizQuestion = ({ question, image, options, selectedValue, onValueChange }) => {
    return (
        <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{question}</Text>
            <Image
                source={{ uri: image }}
                style={{ width: 250, height: 180, borderRadius: 10, marginBottom: 10 }}
            />
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={{ width: 200, height: 50 }}
            >
                <Picker.Item label="-- Select an answer --" value="" />
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};
const QuizApp = () => {

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');

    const correctAnswer = ['German M1907 Feldrock', 'United Kingdom', 'Produced by Lockheed-Martin', 'Ratnik 6SH117, Russia', 'The Iraq War' ]

    const handleSubmit = () => {
        let score = 0;

        // Example: assuming you have 5 correct answers
        if (answer1 === correctAnswer[0]) score++;
        if (answer2 === correctAnswer[1]) score++;
        if (answer3 === correctAnswer[2]) score++;
        if (answer4 === correctAnswer[3]) score++;
        if (answer5 === correctAnswer[4]) score++;

        let feedback = '';

        if (score === 5) {
            feedback = 'Outstanding! You got a perfect score — well done!';
        } else if (score >= 4) {
            feedback = 'Great job! You really know your stuff!';
        } else if (score === 3) {
            feedback = 'Good effort! You’re getting there.';
        } else if (score === 2) {
            feedback = 'Not bad, but you can do better next time.';
        } else {
            feedback = 'Keep trying! You’ll do better next time.';
        }

        Alert.alert('Quiz Result', `You got ${score} out of 5 correct!\n\n${feedback}`);
    };

    return (
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
            <Text>Military Knowledge Test</Text>


            {/* Question 1*/}
            <QuizQuestion
                question="1. What military uniform model is this?"
                image="https://cdn11.bigcommerce.com/s-us1e3z01mr/images/stencil/1280x1280/products/114/12401/M190710_Feldrock__95069.1614785785.jpg?c=1"
                options={['German M1907 Feldrock', 'French M1920', 'Polish M1936 jacket']}
                selectedValue={answer1}
                onValueChange={setAnswer1}
            />

            {/* Question 2*/}
            <QuizQuestion
                question="2. Which country developed the rifle in the picture? "
                image="https://tse3.mm.bing.net/th/id/OIP.5DZpmgNTIqS4DoegyymUygHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
                options={['United Kingdom', 'United States', 'Germany', 'Russia']}
                selectedValue={answer2}
                onValueChange={setAnswer2}
            />

            {/* Question 3*/}
            <QuizQuestion
                question="3. Which of the following is not true about the jet in the picture?"
                image="https://tse3.mm.bing.net/th/id/OIP.IjKlzI6B7zDIGHpwGVpGmAHaEe?rs=1&pid=ImgDetMain&o=7&rm=3"
                options={['The fastest aircraft of WW2', 'The only operational rocket-powered fighter', 'Produced by Lockheed-Martin']}
                selectedValue={answer3}
                onValueChange={setAnswer3}
            />

            {/* Question 4*/}
            <QuizQuestion
                question="4. What model of chest rig is this and which country produces it?"
                image="https://preview.redd.it/6sh117-gen-4-v0-j6in06xsqa6d1.jpeg?auto=webp&s=02e519657e118f6bfb08d162cfd8fdfdcb00c6a5"
                options={['Ratnik 6SH117, Russia', '6094 vest, America', 'Mission, Germany', 'JPC 1.0, America']}
                selectedValue={answer4}
                onValueChange={setAnswer4}
            />

            {/* Question 5*/}
            <QuizQuestion
                question="5. In which war will you most likely to see the weapon in the picture?"
                image="https://i.redd.it/kaeg2j5slkr71.jpg"
                options={['The Gulf War', 'The Vietnam War', 'The Iraq War']}
                selectedValue={answer5}
                onValueChange={setAnswer5}
            />


            {/* Submit Button */}
            <TouchableOpacity
                style={{
                    margin: 10,
                    backgroundColor: 'deepskyblue',
                    height: 50,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={handleSubmit}
            >
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                    SUBMIT ANSWERS
                </Text>
            </TouchableOpacity>


        </ScrollView>
    );
};

export default QuizApp;

