import { Fonts } from './CustomFonts';

export const styles = {
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
        flexDirection: 'row-reverse', 
    },
    input: {
        flex: 1,
        fontFamily: Fonts.ISM,
        color: 'black',
        padding: 0,
        marginStart: 10,
        height: 15, // Adjust the height here
    },

    numberInput: {
        textAlign: 'right',
    },
    buttonContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
};