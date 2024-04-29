import { useState } from 'react';

const useConnection = () => {
    const [connectMethod, setConnectMethod] = useState('xxxxxx');
    const [userInputConnectMethod, setUserInputConnectMethod] = useState('');
    const [placeholderConnectMethod, setPlaceholderConnectMethod] = useState('xxxxxx');
    const [number, setNumber] = useState('333243783');
    const [userInputNumber, setUserInputNumber] = useState('');
    const [placeholderNumber, setPlaceholderNumber] = useState('333243783');

    const saveBtn = () => {
        let message = '';

        if (userInputConnectMethod.trim() !== '') {
            setConnectMethod(userInputConnectMethod);
            message += 'Connect method saved: ' + userInputConnectMethod + '\n';
            clearInput();
            setPlaceholderConnectMethod('xxxxx');
        }

        if (userInputNumber.trim() !== '') {
            setNumber(userInputNumber);
            message += 'Number saved: ' + userInputNumber + '\n';
            clearInput();
            setPlaceholderNumber('333243783');
        }

        if (message !== '') {
            alert(message);
        } else {
            alert('Please enter a valid connect method or number!');
        }
    };
    
    const clearInput = () => {
        setUserInputConnectMethod('');
        setUserInputNumber('');
    };

    return {
        connectMethod,
        userInputConnectMethod,
        setUserInputConnectMethod,
        placeholderConnectMethod,
        number,
        userInputNumber,
        setUserInputNumber,
        placeholderNumber,
        saveBtn,
        clearInput,
    };
};

export default useConnection;
