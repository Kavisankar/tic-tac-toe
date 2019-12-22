import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/globalStyles';
import Board from './board';
import MyButton from './button';

export default function body(){
    return (
        <View style={styles.body}>
            <Text style={styles.info}>Player X's Turn</Text>
            <Board></Board>
            <View style={styles.buttons}>
                <MyButton icon="ios-undo">Undo</MyButton>
                <MyButton icon="ios-redo">Redo</MyButton>
            </View>
        </View>
    )
}
