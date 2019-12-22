import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Cell from './cell';

export default function board(){
    return (
        <View style={styles.board}>
            <View style={styles.row}>
                <Cell id={0}></Cell>
                <Cell id={1}></Cell>
                <Cell id={2}></Cell>
            </View>
            <View style={styles.row}>
                <Cell id={3}></Cell>
                <Cell id={4}></Cell>
                <Cell id={5}></Cell>
            </View>
            <View style={styles.row}>
                <Cell id={6}></Cell>
                <Cell id={7}></Cell>
                <Cell id={8}></Cell>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    board:{
        height: 300,
        width: 300,
        backgroundColor: "#fff",
        alignSelf: "center",
        borderWidth: 2,
    },
    row:{
        flex: 1,
        flexDirection: "row",
    },
})