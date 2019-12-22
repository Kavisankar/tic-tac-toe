import React from 'react';
import { View } from 'react-native';
import styles from './styles/globalStyles';
import Cell from './cell';

export default function board(){
    return (
        <View style={styles.board}>
            <View style={styles.boardRow}>
                <Cell id={0}></Cell>
                <Cell id={1}></Cell>
                <Cell id={2}></Cell>
            </View>
            <View style={styles.boardRow}>
                <Cell id={3}></Cell>
                <Cell id={4}></Cell>
                <Cell id={5}></Cell>
            </View>
            <View style={styles.boardRow}>
                <Cell id={6}></Cell>
                <Cell id={7}></Cell>
                <Cell id={8}></Cell>
            </View>
        </View>
    )
}
