import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Fonts } from '../CustomFonts';

const ClubConnection = () => {
    const [connectMethod, setConnectMethod] = useState('xxxxxx');
    const [userInput, setUserInput] = useState('');
    const [placeholder, setPlaceholder] = useState('xxxxxx');

    const saveBtn = () => {
        if (userInput.trim() !== '') {
            setConnectMethod(userInput);
            alert('Connection saved: ' + userInput);

        } else {
            alert('Please enter a valid connect method!');
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Club Connection</Text>
            <View>
                <View style={styles.row}>
                    <Text style={styles.label}>connect method</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={userInput}
                            onChangeText={setUserInput}
                            placeholder={placeholder}
                            textAlign="right" // Ensure caret appears at the end
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, styles.alignRight]}>number</Text>
                    <Text style={{color: 'black', fontFamily: Fonts.ISM}}>333243783</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Save'
                        color="#007AFF"
                        onPress={saveBtn}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: Fonts.ISM,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5, 
    },
    label: {
        flex: 1,
        fontFamily: Fonts.ISM,
        color: 'black',
        paddingStart: 10,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row-reverse', // Aligns TextInput at the end
    },
    input: {
        flex: 1,
        fontFamily: Fonts.ISM,
        color: 'black',
        padding: 0,
        height: 15, // Adjust the height here
    },
    text: {
        fontFamily: Fonts.ISM,
        color: 'black',
    },
    spacer: {
        flex: 1,
    },
    buttonContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
});

export default ClubConnection;
