import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './../styles/globalStyles';
import Cell from './cell';

export default function board(){
    const history = useSelector( state => state.history );
    const boardValue = history[history.length-1].values;
    return (
        <View style={styles.board}>
            <View style={styles.boardRow}>
                <Cell id={0}>{boardValue[0]}</Cell>
                <Cell id={1}>{boardValue[1]}</Cell>
                <Cell id={2}>{boardValue[2]}</Cell>
            </View>
            <View style={styles.boardRow}>
                <Cell id={3}>{boardValue[3]}</Cell>
                <Cell id={4}>{boardValue[4]}</Cell>
                <Cell id={5}>{boardValue[5]}</Cell>
            </View>
            <View style={styles.boardRow}>
                <Cell id={6}>{boardValue[6]}</Cell>
                <Cell id={7}>{boardValue[7]}</Cell>
                <Cell id={8}>{boardValue[8]}</Cell>
            </View>
        </View>
    )
}
