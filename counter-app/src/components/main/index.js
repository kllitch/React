import {React, useState} from 'react';
import {View} from 'react-native';
import {Title} from '../title';
import {Reset} from '../reset';
import {Counter} from '../counter';

import styles from './style';

export function Main(){

    var [count, setCount] = useState(0)

    return(
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Title/>
            </View>
            <View style={styles.content}>
                <Counter count={count} setCount={setCount}/>
            </View>
            <View style={styles.footer}>
                <Reset count={count} setCount={setCount}/>
            </View>
        </View>
    );
}