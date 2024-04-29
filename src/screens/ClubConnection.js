import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../style';

const ClubConnection = () => {
    const [userInputConnectMethod, setUserInputConnectMethod] = useState('');
    const [placeholderConnectMethod, setPlaceholderConnectMethod] = useState('xxxxxx');
    const [userInputNumber, setUserInputNumber] = useState('');
    const [placeholderNumber, setPlaceholderNumber] = useState('333243783');

    const saveBtn = () => {
        if (userInputConnectMethod.trim() !== '') {
            setUserInputConnectMethod(userInputConnectMethod);
            alert('Connect method saved: ' + userInputConnectMethod);
            clearInput()
            setPlaceholderConnectMethod('xxxxx');
        } else if (userInputNumber.trim() !== '') {
            setUserInputNumber(userInputNumber);
            alert('Number saved: ' + userInputNumber);
            clearInput()
            setPlaceholderNumber('333243783');
        } else {
            alert('Please enter a valid connect method or number!');
        }
    }
    const clearInput = () => {
        setUserInputConnectMethod('');
        setUserInputNumber('');
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
                            value={userInputConnectMethod}
                            onChangeText={setUserInputConnectMethod}
                            placeholder={placeholderConnectMethod}
                            textAlign="right"
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, styles.alignRight]}>number</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, styles.numberInput]}
                            value={userInputNumber}
                            onChangeText={setUserInputNumber}
                            placeholder={placeholderNumber}
                            textAlign="right"
                        />
                    </View>
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

export default ClubConnection;
