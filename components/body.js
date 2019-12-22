import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#eff",
        alignContent:"center",
        justifyContent:"center",
    },
    info:{
        textAlign: "center",
        fontSize: 16,
        margin: 40,
    },
    buttons:{
        margin: 50,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})