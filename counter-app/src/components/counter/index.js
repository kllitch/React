import { React, useState } from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './style';

export function Counter({count, setCount}){
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{count}</Text>
            <Pressable
                onPress={() => {
                    setCount(count+1);
                }}
            >
            <Text style={styles.button}>Contar</Text>
            </Pressable>
        </View>
    );
}