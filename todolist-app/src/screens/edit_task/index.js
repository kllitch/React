import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from './style';
import { ROUTES } from "../../route";

export function Edit({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Pressable
                    style={styles.headerButton}
                    onPress={() =>
                        navigation.navigate(ROUTES.TASKLIST)
                    }>
                    <MaterialCommunityIcons style={styles.headerIcon} name="arrow-left"/>
                </Pressable>
                <Text style={styles.headerText}>
                    Edit
                </Text>
            </View>
        </SafeAreaView>
    )
}