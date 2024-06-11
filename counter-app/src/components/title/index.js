import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export function Title(){
    return (
        <View>
            <Text style={styles.text}>Contador</Text>
        </View>
    );
}