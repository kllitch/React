import { StyleSheet } from "react-native";
import { Appearance } from 'react-native';
import theme from "../../util/theme";

var styles = StyleSheet.create({
    page: {
        backgroundColor: theme[Appearance.getColorScheme()].background
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: theme[Appearance.getColorScheme()].primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme[Appearance.getColorScheme()].background,
    },
    headerIcon: {
        color: theme[Appearance.getColorScheme()].background,
        fontSize: 30
    },
    headerButton: {
        borderColor: theme[Appearance.getColorScheme()].background,
        borderWidth: 2,
        borderRadius: 100
    },
})

export default styles;