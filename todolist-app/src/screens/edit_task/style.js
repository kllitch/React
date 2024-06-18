import React from "react";
import { StyleSheet } from "react-native";
import { Appearance } from 'react-native';
import theme from "../../util/theme";

var styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5,
    },
    headerButton:{
        marginHorizontal: 15,
    },
    headerIcon:{
        fontSize: 30,
        color: theme[Appearance.getColorScheme()].primary,
    },
    headerText:{
        fontSize: 20,
        color: theme[Appearance.getColorScheme()].primary,
    }
});

export default styles;