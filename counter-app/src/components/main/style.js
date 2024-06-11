import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    conatiner:{
        backgroundColor: '#99dece',
        height: '70%',
        width: '80%',
        borderRadius: 10,
        padding: 10
    },

    header:{
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },

    content:{
        height: '85%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer:{
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }

});

export default styles;