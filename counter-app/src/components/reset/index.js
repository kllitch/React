import React from 'react';
import {Text, View, Pressable} from 'react-native';

import styles from './style';

export function Reset({count, setCount}) {
    return(
        <View style={count>0?styles.button:styles.disabled}>
            <Pressable
                onPress={()=>{
                    if(count>0){
                        setCount(0);
                    }
                }}>
                <Text style={styles.text}>
                    Reset
                </Text>
            </Pressable>
        </View>
    );
}