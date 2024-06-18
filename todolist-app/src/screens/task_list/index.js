import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ROUTES } from "../../route";
import styles from "./style";

export function TaskList({ navigation }) {
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Tasks</Text>
                <Pressable style={styles.headerButton}
                    onPress={() =>
                        navigation.navigate(ROUTES.EDIT)
                    }>
                    <MaterialCommunityIcons name="plus" style={styles.headerIcon} />
                </Pressable>
            </View>
            <ScrollView>
                <FlatList />
            </ScrollView>
        </SafeAreaView>
    )
}