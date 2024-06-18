import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TaskList } from "../screens/task_list";
import { Edit } from "../screens/edit_task";

const Stack = createNativeStackNavigator();

export const ROUTES = {
  TASKLIST: "TaskList",
  EDIT:"Edit",
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
            animation: "slide_from_bottom"
        }}
      >
        <Stack.Screen
          name={ROUTES.TASKLIST}
          component={TaskList}
        />
        <Stack.Screen 
          name={ROUTES.EDIT} 
          component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};