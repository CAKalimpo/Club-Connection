import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { styles } from '../style';
import useConnection from './useConnection';
const ClubConnection = () => {
    const {
        connectMethod,
        userInputConnectMethod,
        setUserInputConnectMethod,
        placeholderConnectMethod,
        userInputNumber,
        number,
        setUserInputNumber,
        placeholderNumber,
        saveBtn,
        clearInput,
    } = useConnection();

    return (
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
    );
};

export default ClubConnection;
