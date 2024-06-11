import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label:{
        fontSize: 50,
        color: '#ffffff',
        marginBottom: 10,
        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    button:{
        borderColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 2,
        padding: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
        userSelect: 'none'
    }
});

export default styles;